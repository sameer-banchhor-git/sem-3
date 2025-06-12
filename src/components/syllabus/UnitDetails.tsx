
"use client";
import type { SyllabusUnit, HierarchicalContentNode } from '@/types/syllabus';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { NotebookText, Folder, FileText, AlertCircle } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';
import { structureText, type StructureTextOutput } from '@/ai/flows/structure-text-flow';
import React, { useState, useEffect } from 'react';

// Component to render a single node in the hierarchy
const NodeDisplay: React.FC<{ node: HierarchicalContentNode; level: number }> = ({ node, level }) => {
  const hasChildren = node.children && node.children.length > 0;
  const Icon = hasChildren ? Folder : FileText;

  return (
    <li className="mt-1">
      <div className="flex items-start" style={{ paddingLeft: `${level * 1.25}rem` }}>
        <Icon className="h-4 w-4 text-accent mr-2 shrink-0 mt-0.5" />
        <span className="text-foreground flex-1">{node.text}</span>
      </div>
      {hasChildren && (
        <ul className="mt-0.5">
          {node.children!.map((childNode) => (
            <NodeDisplay key={childNode.id} node={childNode} level={level + 1} />
          ))}
        </ul>
      )}
    </li>
  );
};

// Component to fetch and display structured content
const StructuredContentRenderer: React.FC<{ unitContent: string; unitTitle: string }> = ({ unitContent, unitTitle }) => {
  const [data, setData] = useState<HierarchicalContentNode[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;
    const processContent = async () => {
      if (!unitContent) {
        if (isMounted) {
          setData([]);
          setIsLoading(false);
        }
        return;
      }
      setIsLoading(true);
      setError(null);
      try {
        const result: StructureTextOutput = await structureText({ textContent: unitContent });
        if (isMounted) {
          setData(result.structuredContent || []);
        }
      } catch (err) {
        console.error(`Error structuring content for unit "${unitTitle}":`, err);
        if (isMounted) {
          setError(`Failed to structure content. Original text displayed below.`);
          setData([{id: 'fallback-error', text: unitContent}]); // Show original on error
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    processContent();
    return () => {
      isMounted = false;
    };
  }, [unitContent, unitTitle]);

  if (isLoading) {
    return (
      <div className="space-y-2 py-2">
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-4 w-1/2 ml-5" />
        <Skeleton className="h-4 w-5/6" />
        <Skeleton className="h-4 w-2/3 ml-5" />
        <Skeleton className="h-4 w-3/4" />
      </div>
    );
  }

  if (error && (!data || data.length === 0 || (data.length === 1 && data[0].id === 'fallback-error'))) {
    return (
      <div className="pt-2 pb-4">
        <div className="flex items-center text-destructive mb-2 p-3 bg-destructive/10 border border-destructive/30 rounded-md">
          <AlertCircle className="h-5 w-5 mr-2 shrink-0" />
          <p className="text-sm font-medium">{error}</p>
        </div>
        <div className="text-sm leading-relaxed text-foreground/80 whitespace-pre-line">
          {unitContent}
        </div>
      </div>
    );
  }
  
  if (!data || data.length === 0) {
     return <div className="text-sm leading-relaxed text-foreground/80 pt-2 pb-4 whitespace-pre-line">{unitContent}</div>;
  }
  
  // If data has only one item and its text is the original content (fallback from flow or error scenario)
  if (data.length === 1 && data[0].text === unitContent && !data[0].children?.length) {
    if (error) {
       return (
        <div className="pt-2 pb-4">
          <div className="flex items-center text-destructive mb-2 p-3 bg-destructive/10 border border-destructive/30 rounded-md">
            <AlertCircle className="h-5 w-5 mr-2 shrink-0" />
            <p className="text-sm font-medium">{error}</p>
          </div>
          <div className="text-sm leading-relaxed text-foreground/80 whitespace-pre-line">
            {unitContent}
          </div>
        </div>
      );
    }
    return <div className="text-sm leading-relaxed text-foreground/80 pt-2 pb-4 whitespace-pre-line">{unitContent}</div>;
  }


  return (
    <div className="text-sm leading-relaxed text-foreground/80 pt-2 pb-4">
       {error && (
         <div className="flex items-center text-destructive mb-2 p-3 bg-destructive/10 border border-destructive/30 rounded-md">
           <AlertCircle className="h-5 w-5 mr-2 shrink-0" />
           <p className="text-sm font-medium">{error}</p>
         </div>
       )}
      <ul className="space-y-1">
        {data.map((node) => (
          <NodeDisplay key={node.id} node={node} level={0} />
        ))}
      </ul>
    </div>
  );
};

interface UnitDetailsProps {
  units: SyllabusUnit[];
}

export function UnitDetails({ units }: UnitDetailsProps) {
  if (!units || units.length === 0) {
    return null;
  }

  return (
    <div className="mt-6">
      <h3 className="text-xl font-semibold mb-3 flex items-center font-headline text-primary">
        <NotebookText className="mr-2 h-5 w-5" />
        Units
      </h3>
      <Accordion type="single" collapsible className="w-full">
        {units.map((unit, index) => (
          <AccordionItem value={`unit-${index + 1}`} key={`unit-${index + 1}-${unit.title}`} className="border-accent/20">
            <AccordionTrigger className="text-md font-medium hover:text-accent transition-colors duration-200 py-3 text-left">
              {unit.title}
            </AccordionTrigger>
            <AccordionContent>
              <StructuredContentRenderer unitContent={unit.content} unitTitle={unit.title} />
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
