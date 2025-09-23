import Link from "next/link";
export const Footer = () => (
  <footer className="border-t border-border/60 bg-background/90">
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-4 py-6 text-center text-xs text-muted-foreground md:flex-row md:items-center md:justify-between md:px-6">
      <p className="flex-1">
        &copy; {new Date().getFullYear()} Chanel & Nicholas
      </p>
      <p className="basis-1/2">
        With appreciation to our family and friends joining us on our special
        day.
      </p>
      <Link
        className="flex-1 underline-offset-2 hover:underline"
        href="mailto:us@chanelandnicholas.com"
      >
        Contact us
      </Link>
    </div>
  </footer>
);
