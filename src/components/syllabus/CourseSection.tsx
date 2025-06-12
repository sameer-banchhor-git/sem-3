import type { SyllabusCourse, SyllabusPaper, SyllabusPractical } from '@/types/syllabus';
import { slugify } from '@/lib/utils';
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { UnitDetails } from './UnitDetails';
import { BookList } from './BookList';
import { ResourceLinks } from './ResourceLinks';
import { PracticalDetails } from './PracticalDetails';
import { FileText, FlaskConical, ListChecks, Info } from 'lucide-react';

interface CourseSectionProps {
  course: SyllabusCourse;
}

export function CourseSection({ course }: CourseSectionProps) {
  const sectionId = slugify(course.title);
  const isPaper = course.type === 'paper';
  const paper = course as SyllabusPaper;
  const practical = course as SyllabusPractical;

  const Icon = isPaper ? FileText : FlaskConical;

  return (
    <Card id={sectionId} className="shadow-lg rounded-xl overflow-hidden">
      <CardHeader className="bg-secondary/50 p-6">
        <CardTitle className="text-2xl font-bold font-headline flex items-center text-primary">
          <Icon className="mr-3 h-7 w-7" />
          {course.title}
        </CardTitle>
        {course.maxMarks && course.minMarks && (
          <div className="flex space-x-4 mt-2">
            <Badge variant="outline">Max Marks: {course.maxMarks}</Badge>
            <Badge variant="outline">Min Marks: {course.minMarks}</Badge>
          </div>
        )}
      </CardHeader>
      <CardContent className="p-6">
        {course.note && (
          <CardDescription className="mb-6 p-4 border-l-4 border-accent bg-accent/10 rounded-r-md text-accent-foreground/80 flex items-start">
            <Info className="h-5 w-5 mr-2 mt-0.5 shrink-0 text-accent" />
            <span><strong>Note:</strong> {course.note}</span>
          </CardDescription>
        )}

        {isPaper && paper.courseOutcomes && paper.courseOutcomes.length > 0 && (
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3 flex items-center font-headline text-primary">
              <ListChecks className="mr-2 h-5 w-5" />
              Course Outcomes
            </h3>
            <ul className="list-disc list-inside space-y-1 text-foreground/80">
              {paper.courseOutcomes.map((outcome, index) => (
                <li key={index} className="text-sm ml-2">{outcome}</li>
              ))}
            </ul>
          </div>
        )}

        {isPaper ? (
          <>
            <UnitDetails units={paper.units} />
            <BookList books={paper.recommendedBooks} />
            <ResourceLinks links={paper.digitalPlatforms} />
          </>
        ) : (
          <PracticalDetails practical={practical} />
        )}
      </CardContent>
      {isPaper && paper.digitalPlatforms.length > 0 && (
         <CardFooter className="bg-muted/30 p-4 border-t">
            <p className="text-xs text-muted-foreground">
                Refer to "Suggested Digital Platforms" section for online resources.
            </p>
         </CardFooter>
      )}
    </Card>
  );
}
