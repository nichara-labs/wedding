import { Heart } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { anchors } from "@/lib/constants";
import { cn } from "@/lib/utils";

const navigation = [
  { label: "Details", href: `#${anchors.details}` },
  { label: "Timeline", href: `#${anchors.timeline}` },
  { label: "Gallery", href: `#${anchors.gallery}` },
  { label: "RSVP", href: `#${anchors.rsvp}` },
];

export const Header = () => (
  <header className="sticky inset-x-0 top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur">
    <div className="mx-auto flex w-full max-w-6xl flex-col px-4 md:px-6">
      <div className="flex items-center justify-between gap-4 py-4">
        <Link
          href={`#${anchors.top}`}
          className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.25em] text-foreground"
          aria-label="Back to top"
        >
          <Heart className="h-5 w-5 text-primary" />
          <span className="inline-block">Chanel & Nicholas</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-primary/90"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          className={cn(buttonVariants({ size: "sm" }))}
          href={`#${anchors.rsvp}`}
        >
          RSVP Now
        </Link>
      </div>
    </div>
  </header>
);
