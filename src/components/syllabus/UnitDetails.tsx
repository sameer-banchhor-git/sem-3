
"use client";
import type { SyllabusUnit } from '@/types/syllabus';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { NotebookText } from 'lucide-react';
import { HierarchicalContentDisplay } from './HierarchicalContentDisplay'; // Import the new component

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
              <div className="pt-2 pb-4">
                {unit.structuredContent ? (
                  <HierarchicalContentDisplay nodes={unit.structuredContent} />
                ) : (
                  // Fallback for any old data that might not have structuredContent
                  <p className="text-sm leading-relaxed text-foreground/80 whitespace-pre-line">
                    Content not available in structured format.
                  </p>
                )}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
