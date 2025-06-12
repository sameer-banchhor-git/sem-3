
"use client";

import type { HierarchicalContentNode } from '@/types/syllabus';
import { Folder, FileText, ChevronRight, Dot } from 'lucide-react';
import { cn } from '@/lib/utils';

interface HierarchicalContentDisplayProps {
  nodes: HierarchicalContentNode[];
  level?: number;
}

const NodeDisplay: React.FC<{ node: HierarchicalContentNode; level: number }> = ({ node, level }) => {
  const hasChildren = node.children && node.children.length > 0;
  const indentClass = `ml-${level * 4}`; // Tailwind classes for margin need to be complete, e.g. ml-0, ml-4, ml-8, ml-12 etc.

  // Determine padding based on level for deeper indentation effect
  let paddingLeft;
  switch (level) {
    case 0: paddingLeft = 'pl-0'; break;
    case 1: paddingLeft = 'pl-4'; break;
    case 2: paddingLeft = 'pl-8'; break;
    case 3: paddingLeft = 'pl-12'; break;
    case 4: paddingLeft = 'pl-16'; break;
    default: paddingLeft = 'pl-20';
  }


  return (
    <li className={cn('mb-1 flex flex-col', paddingLeft)}>
      <div className="flex items-start py-1">
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
      </div>
      {hasChildren && (
        <HierarchicalContentDisplay nodes={node.children!} level={level + 1} />
      )}
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
