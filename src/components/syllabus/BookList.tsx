import { BookOpenText } from 'lucide-react';

interface BookListProps {
  books: string[];
}

export function BookList({ books }: BookListProps) {
  if (!books || books.length === 0) {
    return null;
  }

  return (
    <div className="mt-8">
      <h3 className="text-xl font-semibold mb-3 flex items-center font-headline text-primary">
        <BookOpenText className="mr-2 h-5 w-5" />
        Recommended Books
      </h3>
      <ul className="list-disc list-inside space-y-1 text-foreground/80">
        {books.map((book, index) => (
          <li key={index} className="text-sm ml-2">{book}</li>
        ))}
      </ul>
    </div>
  );
}
