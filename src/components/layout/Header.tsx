
import { GraduationCap } from 'lucide-react';
import { ExamCountdown } from './ExamCountdown';

export function Header() {
  // Note: getFullYear() will be based on client's current year when ExamCountdown runs.
  // Month is 0-indexed, so 11 is December.
  const examDate = new Date(new Date().getFullYear(), 11, 22, 0, 0, 0); 

  return (
    <header className="bg-background text-foreground border-b border-border">
      <div className="container mx-auto px-4 py-6 md:px-8 md:py-8">
        <div className="flex items-center space-x-3">
          <GraduationCap size={40} className="text-primary" />
          <div>
            <h1 className="text-3xl font-bold font-headline">Syllabus Central</h1>
            <p className="text-lg text-foreground/80">M.Sc. (CS) - THIRD SEMESTER</p>
            <ExamCountdown targetDate={examDate} />
          </div>
        </div>
      </div>
    </header>
  );
}
