import type { SyllabusLink } from '@/types/syllabus';
import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ResourceLinksProps {
  links: SyllabusLink[];
}

export function ResourceLinks({ links }: ResourceLinksProps) {
  if (!links || links.length === 0) {
    return null;
  }

  return (
    <div className="mt-8">
      <h3 className="text-xl font-semibold mb-4 flex items-center font-headline text-primary">
        <ExternalLink className="mr-2 h-5 w-5" />
        Suggested Digital Platforms
      </h3>
      <div className="space-y-2">
        {links.map((link, index) => (
          <Button
            key={index}
            variant="outline"
            className="w-full justify-start text-left hover:bg-accent/10 hover:border-accent group transition-colors duration-200"
            asChild
          >
            <a href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center">
              <span className="truncate group-hover:text-accent transition-colors duration-200">{link.text}</span>
              <ExternalLink className="ml-auto h-4 w-4 text-muted-foreground group-hover:text-accent transition-colors duration-200" />
            </a>
          </Button>
        ))}
      </div>
    </div>
  );
}
