
export function Footer() {
  return (
    <footer className="bg-muted text-muted-foreground py-6 mt-12">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} sameer banchhor . All rights reserved.
        </p>
        <p className="text-xs mt-1">
          Slimshadow Inc.
        </p>
      </div>
    </footer>
  );
}
