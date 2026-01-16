export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="container mx-auto max-w-5xl flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-muted-foreground">
          © {currentYear} Mark Darabos. Built with restraint.
        </p>
        <p className="text-sm text-muted-foreground">
          Designed & developed by me
        </p>
      </div>
    </footer>
  );
}
