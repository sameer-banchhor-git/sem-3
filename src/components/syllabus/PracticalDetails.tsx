import type { SyllabusPractical } from '@/types/syllabus';
import { ClipboardList, TerminalSquare, Code2 } from 'lucide-react'; // Terminal for Linux, Code2 for Java

interface PracticalDetailsProps {
  practical: SyllabusPractical;
}

export function PracticalDetails({ practical }: PracticalDetailsProps) {
  const ProgramIcon = practical.title.toLowerCase().includes('linux') ? TerminalSquare : Code2;

  return (
    <div className="mt-6">
      <h3 className="text-xl font-semibold mb-3 flex items-center font-headline text-primary">
        <ClipboardList className="mr-2 h-5 w-5" />
        Scheme of Examination
      </h3>
      <p className="text-sm text-foreground/80 mb-2">{practical.examinationSchemeIntro}</p>
      <ul className="list-disc list-inside space-y-1 text-sm text-foreground/80 mb-6">
        {practical.examinationSchemeMarks.map((item, index) => (
          <li key={index} className="ml-2">{item}</li>
        ))}
      </ul>

      {practical.note && (
        <p className="text-sm italic text-muted-foreground mb-4">Note: {practical.note}</p>
      )}

      <h3 className="text-xl font-semibold mb-4 flex items-center font-headline text-primary">
        <ProgramIcon className="mr-2 h-5 w-5" />
        List of Practicals
      </h3>
      <div className="space-y-3">
        {practical.programs.map((program, index) => (
          <div key={program.id} className="p-3 border border-dashed border-accent/30 rounded-md bg-background hover:shadow-sm transition-shadow">
            <p className="text-sm font-medium text-foreground">
              <span className="text-accent">{index + 1}. </span>
              {program.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
