import { Send } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface RsvpData {
  email: string;
  name: string;
  isRelative: boolean;
  side: "groom" | "bride";
  isAttending: boolean;
  notes: string;
}

export const RsvpForm = ({
  rsvpSectionRef,
  sectionId,
}: {
  rsvpSectionRef: React.RefObject<HTMLElement | null>;
  sectionId: string;
}) => {
  const [formData, setFormData] = useState<RsvpData>({
    name: "",
    email: "",
    isRelative: false,
    side: "groom",
    isAttending: true,
    notes: "",
  });
  return (
    <section
      id={sectionId}
      ref={rsvpSectionRef}
      className="mx-auto w-full max-w-4xl px-4 py-16 md:px-6 lg:py-24"
    >
      <Card className="overflow-hidden bg-card/95">
        <CardHeader>
          <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.35em] text-primary">
            <Send className="h-5 w-5" />
            <span>Join us</span>
          </div>
          <CardTitle className="mt-2 text-3xl font-semibold sm:text-4xl font-[allura]">
            RSVP & Well Wishes
          </CardTitle>
          <CardDescription>
            RSVPs have closed. Please{" "}
            <Link className="underline" href="mailto:us@chanelandnicholas.com">
              contact us
            </Link>{" "}
            for any enquiries.
          </CardDescription>
        </CardHeader>
      </Card>
    </section>
  );
};
