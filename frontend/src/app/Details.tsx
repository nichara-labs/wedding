import { CalendarDays, ChevronRight, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import HeroImage from "@/../public/hero.jpg";
import { CalendarButton } from "@/components/CalendarButton";
import { buttonVariants } from "@/components/ui/button";
import { anchors } from "@/lib/constants";
import { cn } from "@/lib/utils";

export const Details = ({ sectionId }: { sectionId: string }) => (
  <section
    id={sectionId}
    className="relative overflow-hidden bg-gradient-to-b from-background via-background to-secondary/20"
  >
    <div
      className="absolute inset-x-0 top-0 h-68 bg-[radial-gradient(circle,_rgba(90,76,219,0.15)_0%,_rgba(255,255,255,0)_65%)]"
      aria-hidden
    />
    <div className="max-w-6xl mx-auto flex flex-col items-center gap-12 px-4 pb-16 pt-12 md:flex-row md:items-start md:gap-16 md:px-6 lg:pb-24 lg:pt-16 ">
      <div className="flex w-full flex-1 flex-col items-center gap-6 text-center md:items-start md:text-left">
        <p className="text-xs font-semibold uppercase tracking-[0.45em] text-primary">
          You're Invited
        </p>
        <h1 className="text-6xl md:text-7xl font-semibold tracking-tight font-[allura]">
          Chanel & Nicholas
        </h1>
        <p className="max-w-xl text-base text-muted-foreground sm:text-lg">
          Join us for an elegant luncheon celebration on Saturday, 10 January
          2026 at The Ritz-Carlton, Millenia Singapore.
        </p>
        <div className="grid w-full gap-4 text-sm text-foreground sm:grid-cols-2 sm:text-base">
          <Link
            href={`#${anchors.timeline}`}
            className="flex items-center justify-center gap-3 rounded-xl border border-border/60 bg-card/60 px-5 py-4 md:justify-start hover:bg-secondary/50 transition"
          >
            <CalendarDays className="h-6 w-6 text-primary" />
            <div className="text-left">
              <p className="font-semibold">Saturday, 10 January 2026</p>
              <p className="text-sm text-muted-foreground">
                Tea ceremony from 11:00 <br />
                Cocktails from 12:00
              </p>
            </div>
            <ChevronRight className="ml-auto" />
          </Link>
          <Link
            href="https://maps.app.goo.gl/NvMmkn4hb4UnrVvs6"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 rounded-xl border border-border/60 bg-card/60 px-5 py-4 md:justify-start hover:bg-secondary/50 transition"
          >
            <MapPin className="h-6 w-6 text-primary" />
            <div className="text-left">
              <p className="font-semibold">The Ritz-Carlton, Millenia</p>
              <p className="text-sm text-muted-foreground">
                Marina Bay, Singapore
              </p>
            </div>
            <ChevronRight className="ml-auto" />
          </Link>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href={`#${anchors.rsvp}`}
            className={cn(
              buttonVariants({ variant: "default", size: "lg" }),
              "w-full text-center sm:w-auto",
            )}
          >
            RSVP Now
          </Link>
          <CalendarButton />
        </div>
      </div>
      <div className="relative flex w-full max-w-md flex-1 justify-center">
        <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[2rem] border border-border/80 shadow-xl">
          <Image
            src={HeroImage}
            alt="Chanel and Nicholas"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </div>
  </section>
);
