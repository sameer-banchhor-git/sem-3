import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { TableOfContents } from '@/components/syllabus/TableOfContents';
import { CourseSection } from '@/components/syllabus/CourseSection';
import { syllabusData } from '@/data/syllabusData';
import { Separator } from '@/components/ui/separator';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 md:px-6 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <aside className="md:col-span-4 lg:col-span-3">
            <TableOfContents courses={syllabusData} />
          </aside>
          <section className="md:col-span-8 lg:col-span-9 space-y-10">
            {syllabusData.map((course, index) => (
              <CourseSection key={index} course={course} />
            ))}
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
