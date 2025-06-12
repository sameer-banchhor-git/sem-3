import { GraduationCap } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-background text-foreground border-b border-border">
      <div className="container mx-auto px-4 py-6 md:px-8 md:py-8">
        <div className="flex items-center space-x-3">
          <GraduationCap size={40} className="text-primary" /> {/* Changed icon color to primary */}
          <div>
            <h1 className="text-3xl font-bold font-headline">Syllabus Central</h1>
            <p className="text-lg text-foreground/80">M.Sc. (CS) - THIRD SEMESTER</p> {/* Changed text to foreground */}
          </div>
        </div>
      </div>
    </header>
  );
}
