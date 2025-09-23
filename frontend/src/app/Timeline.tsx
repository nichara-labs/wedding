import type { LucideIcon } from "lucide-react";
import {
  Clock,
  Coffee,
  DoorOpen,
  Martini,
  UtensilsCrossed,
} from "lucide-react";

type TimelineItem = {
  time: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

const timelineItems: TimelineItem[] = [
  {
    time: "10:30 AM",
    title: "Tea Ceremony",
    description:
      "Share a quiet moment with us and our families as we begin the celebrations.",
    icon: Coffee,
  },
  {
    time: "11:30 AM",
    title: "Cocktail Reception",
    description:
      "Sip on signature drinks and mingle at The Ritz-Carlton ballroom foyer.",
    icon: Martini,
  },
  {
    time: "12:20 PM",
    title: "Guests to be Seated",
    description:
      "Doors open and ushers will guide you to your tables for the luncheon.",
    icon: DoorOpen,
  },
  {
    time: "12:30 PM",
    title: "Commencement of Lunch",
    description:
      "A celebratory lunch begins, followed by toasts, stories, and sweet surprises.",
    icon: UtensilsCrossed,
  },
];

export const Timeline = ({ sectionId }: { sectionId: string }) => (
  <section
    id={sectionId}
    className="mx-auto w-full max-w-5xl px-4 py-16 md:px-6 lg:py-24"
  >
    <div className="flex flex-col gap-4 text-center md:flex-row md:items-end md:justify-between md:text-left">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary">
          Our Celebration
        </p>
        <h2 className="mt-2 text-6xl font-semibold tracking-tight font-[allura]">
          Schedule
        </h2>
      </div>
      <p className="text-sm text-muted-foreground sm:text-base md:max-w-sm">
        Arrive a little early, settle in, and enjoy each chapter of our
        celebration as it unfolds.
      </p>
    </div>
    <div className="relative mt-12 pl-14">
      <div
        className="absolute left-6 top-0 h-full w-px bg-border/60"
        aria-hidden
      />
      <ul className="space-y-10">
        {timelineItems.map((item) => (
          <li
            key={item.time}
            className="relative flex flex-col gap-3 sm:flex-row sm:gap-6"
          >
            <div className="flex min-w-0 flex-1 flex-col rounded-2xl border border-border/60 bg-card/70 p-6 shadow-sm hover:bg-secondary/50 transition">
              <div className="flex flex-col gap-1">
                <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-primary">
                  <Clock className="hidden h-3.5 w-3.5 sm:block" />
                  <span>{item.time}</span>
                </p>
                <h3 className="flex items-center gap-2 text-xl font-semibold sm:text-xl sm:my-3">
                  <item.icon className="h-5 w-5 text-primary" />
                  <span>{item.title}</span>
                </h3>
              </div>
              <p className="text-sm text-muted-foreground sm:text-base">
                {item.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </section>
);
