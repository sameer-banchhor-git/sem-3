
"use client";

import type { HierarchicalContentNode } from '@/types/syllabus';
import { Folder, FileText, ChevronRight, Dot, Sparkles, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import React, { useState } from 'react';
import { explainTopic } from '@/ai/flows/explain-topic-flow';

interface HierarchicalContentDisplayProps {
  nodes: HierarchicalContentNode[];
  level?: number;
}

const NodeDisplay: React.FC<{ node: HierarchicalContentNode; level: number }> = ({ node, level }) => {
  const hasChildren = node.children && node.children.length > 0;

  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [alertContent, setAlertContent] = useState('');
  const [alertTitle, setAlertTitle] = useState('');
  const [isLoadingExplanation, setIsLoadingExplanation] = useState(false);

  let paddingLeft;
  switch (level) {
    case 0: paddingLeft = 'pl-0'; break;
    case 1: paddingLeft = 'pl-4'; break;
    case 2: paddingLeft = 'pl-8'; break;
    case 3: paddingLeft = 'pl-12'; break;
    case 4: paddingLeft = 'pl-16'; break;
    default: paddingLeft = 'pl-20';
  }

  const handleExplainClick = async (topic: string) => {
    setAlertTitle(`Explanation for: ${topic}`);
    setAlertContent('');
    setIsLoadingExplanation(true);
    setIsAlertOpen(true);
    try {
      const result = await explainTopic({ topicText: topic });
      setAlertContent(result.explanation);
    } catch (error) {
      console.error("Error generating explanation:", error);
      setAlertContent('Sorry, I could not generate an explanation for this topic at the moment.');
    } finally {
      setIsLoadingExplanation(false);
    }
  };

  return (
    <li className={cn('mb-1 flex flex-col', paddingLeft)}>
      <div className="flex items-start py-1 group">
        {hasChildren ? (
          <Folder size={18} className="mr-2 mt-0.5 text-primary shrink-0" />
        ) : (
          <Dot size={20} className="mr-1.5 mt-0.5 text-accent shrink-0" />
        )}
        {node.isCode ? (
          <code className="text-sm bg-muted/80 px-1.5 py-0.5 rounded font-mono text-foreground/90">{node.text}</code>
        ) : (
          <span className="text-sm text-foreground/80">{node.text}</span>
        )}
        <Button
          variant="ghost"
          size="icon"
          className="ml-2 h-6 w-6 opacity-50 group-hover:opacity-100 transition-opacity"
          onClick={() => handleExplainClick(node.text)}
          title={`Get AI explanation for "${node.text}"`}
        >
          <Sparkles size={14} className="text-primary" />
        </Button>
      </div>
      {hasChildren && (
        <HierarchicalContentDisplay nodes={node.children!} level={level + 1} />
      )}
      <AlertDialog open={isAlertOpen} onOpenChange={setIsAlertOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>{alertTitle}</AlertDialogTitle>
            {isLoadingExplanation ? (
              <div className="flex items-center justify-center py-4 text-sm text-muted-foreground">
                <Loader2 className="mr-2 h-6 w-6 animate-spin text-primary" />
                <span>Generating explanation...</span>
              </div>
            ) : (
              <AlertDialogDescription className="max-h-[60vh] overflow-y-auto whitespace-pre-line">
                {alertContent}
              </AlertDialogDescription>
            )}
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction onClick={() => setIsAlertOpen(false)}>Close</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </li>
  );
};

export function HierarchicalContentDisplay({ nodes, level = 0 }: HierarchicalContentDisplayProps) {
  if (!nodes || nodes.length === 0) {
    return null;
  }

  return (
    <ul className={cn('list-none space-y-1', level > 0 ? 'mt-1' : '')}>
      {nodes.map((node, index) => (
        <NodeDisplay key={`${level}-${index}-${node.text.slice(0,10)}`} node={node} level={level} />
      ))}
    </ul>
  );
}
