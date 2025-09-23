import Image from "next/image";
import { cn } from "@/lib/utils";

const galleryImages = [
  {
    src: "/couple-photo.jpg",
    alt: "Engagement portrait of Chanel and Nicholas",
    className: "sm:col-span-2 sm:row-span-2 aspect-[3/4] lg:aspect-[4/5]",
  },
  {
    src: "/slide2_1.jpg",
    alt: "Chanel and Nicholas overlooking the city",
    className: "aspect-square",
  },
  {
    src: "/slide2_2.jpg",
    alt: "A candid laugh between Chanel and Nicholas",
    className: "aspect-square",
  },
  {
    src: "/slide2_3.jpg",
    alt: "Chanel and Nicholas sharing a quiet moment",
    className: "aspect-[4/5]",
  },
];

export const Gallery = ({ sectionId }: { sectionId: string }) => (
  <section id={sectionId} className="bg-secondary/25 py-16 md:py-24">
    <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
      <div className="flex flex-col items-center text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary">
          Photo Montage
        </p>
        <h2 className="mt-2 text-6xl font-semibold tracking-tight font-[allura]">
          Moments in Bloom
        </h2>
        <p className="mt-4 max-w-2xl text-sm text-muted-foreground sm:text-base">
          A glimpse into the memories that brought us here—captured in the heart
          of Singapore and beyond.
        </p>
      </div>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {galleryImages.map((image) => (
          <div
            key={image.src}
            className={cn(
              "group relative overflow-hidden rounded-3xl border border-border/60 bg-card/70 shadow-sm",
              image.className,
            )}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover transition duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
          </div>
        ))}
      </div>
    </div>
  </section>
);
