import type { SyllabusCourse } from '@/types/syllabus';
import { slugify } from '@/lib/utils';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';
import { ChevronRight, FileText, FlaskConical, BookOpenText } from 'lucide-react';

interface TableOfContentsProps {
  courses: SyllabusCourse[];
}

export function TableOfContents({ courses }: TableOfContentsProps) {
  return (
    <Card className="sticky top-8 shadow-md rounded-lg"> {/* Reduced shadow and rounding */}
      <CardHeader>
        <CardTitle className="flex items-center text-xl font-headline">
          <BookOpenText className="mr-2 h-6 w-6 text-primary" />
          Table of Contents
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[calc(100vh-12rem)] pr-3">
          <nav>
            <ul className="space-y-2">
              {courses.map((course) => (
                <li key={slugify(course.title)}>
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-left h-auto py-2 px-3 transition-colors duration-200 hover:bg-muted/50 group" /* Changed hover to muted/50 */
                    asChild
                  >
                    <a href={`#${slugify(course.title)}`} className="flex items-center">
                      {course.type === 'paper' ? (
                        <FileText className="mr-2 h-5 w-5 text-primary group-hover:text-primary transition-colors duration-200" /> /* Changed hover text to primary */
                      ) : (
                        <FlaskConical className="mr-2 h-5 w-5 text-primary group-hover:text-primary transition-colors duration-200" /> /* Changed hover text to primary */
                      )}
                      <span className="flex-1 group-hover:text-primary transition-colors duration-200">{course.title}</span> {/* Changed hover text to primary */}
                      <ChevronRight className="ml-auto h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors duration-200" /> {/* Changed hover text to primary */}
                    </a>
                  </Button>
                </li>
              ))}
            </ul>
          </nav>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
