
export interface SyllabusLink {
  text: string;
  url: string;
}

export interface SyllabusUnit {
  title: string;
  content: string; // Original paragraph content
}

export interface SyllabusPaper {
  type: 'paper';
  title:string;
  maxMarks: number;
  minMarks: number;
  note?: string;
  courseOutcomes: string[];
  units: SyllabusUnit[];
  recommendedBooks: string[];
  digitalPlatforms: SyllabusLink[];
}

export interface PracticalProgram {
  id: string;
  description: string;
}

export interface SyllabusPractical {
  type: 'practical';
  title: string;
  maxMarks?: number;
  minMarks?: number;
  note?: string;
  examinationSchemeIntro: string;
  examinationSchemeMarks: string[];
  programs: PracticalProgram[];
}

export type SyllabusCourse = SyllabusPaper | SyllabusPractical;

// New type for structured content
export interface HierarchicalContentNode {
  id: string;
  text: string;
  children?: HierarchicalContentNode[];
}
