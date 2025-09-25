import { Send } from "lucide-react";
import { useCallback, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { API_BASE_URL } from "@/lib/constants";
import { getFastapiErrorMessage } from "@/lib/utils";

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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formMessage, setFormMessage] = useState<string | null>(null);
  const [formError, setFormError] = useState<string | null>(null);
  const rsvpEndpoint = useMemo(() => {
    const base = API_BASE_URL?.replace(/\/$/, "");
    return `${base ?? ""}/rsvp`;
  }, []);

  const handleSubmit = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      setIsSubmitting(true);
      setFormMessage(null);
      setFormError(null);

      try {
        const response = await fetch(rsvpEndpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: formData.email,
            name: formData.name,
            is_relative: formData.isRelative,
            is_attending: formData.isAttending,
            side: formData.side,
            notes: formData.notes,
          }),
        });

        if (!response.ok) {
          const data = await response.json().catch(() => null);

          throw new Error(
            getFastapiErrorMessage(data) ??
              "We couldn't save your RSVP. Please try again in a moment.",
          );
        }

        setFormMessage(
          "Thank you! We received your RSVP and sent a confirmation email.",
        );
        setFormData({
          name: "",
          email: "",
          isRelative: false,
          isAttending: true,
          side: "groom",
          notes: "",
        });
      } catch (error) {
        console.log(error);
        setFormError(
          error instanceof Error
            ? error.message
            : "Something unexpected happened. Please try again.",
        );
      } finally {
        setIsSubmitting(false);
      }
    },
    [
      rsvpEndpoint,
      formData.email,
      formData.name,
      formData.isRelative,
      formData.notes,
      formData.isAttending,
      formData.side,
    ],
  );

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
            We would be honoured to have you celebrate with us. Kindly RSVP at
            your earliest convenience so we can prepare a seat at our table just
            for you.
          </CardDescription>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground sm:text-base">
          <p>
            Let us know any dietary preferences or song requests to make the
            afternoon extra special.
          </p>
          <form className="mt-6 grid gap-4" onSubmit={handleSubmit}>
            <div className="grid gap-2">
              <label
                className="text-xs font-semibold uppercase tracking-[0.3em] text-foreground/80"
                htmlFor="name"
              >
                Full Name*
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={(event) =>
                  setFormData((prev) => ({
                    ...prev,
                    name: event.target.value,
                  }))
                }
                className="h-11 w-full rounded-lg border border-border/60 bg-background px-4 text-sm text-foreground shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/60"
              />
            </div>
            <div className="grid gap-2">
              <label
                className="text-xs font-semibold uppercase tracking-[0.3em] text-foreground/80"
                htmlFor="email"
              >
                Email Address*
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                value={formData.email}
                onChange={(event) =>
                  setFormData((prev) => ({
                    ...prev,
                    email: event.target.value,
                  }))
                }
                className="h-11 w-full rounded-lg border border-border/60 bg-background px-4 text-sm text-foreground shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/60"
              />
            </div>
            <div className="grid gap-2">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-foreground/80">
                Celebrating with*
              </p>
              <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:gap-3">
                <Button
                  type="button"
                  variant={formData.side === "groom" ? "default" : "outline"}
                  className="w-full sm:w-auto"
                  aria-pressed={formData.side === "groom"}
                  onClick={() =>
                    setFormData((prev) => ({
                      ...prev,
                      side: "groom",
                    }))
                  }
                >
                  Groom's Side
                </Button>
                <Button
                  type="button"
                  variant={formData.side === "bride" ? "default" : "outline"}
                  className="w-full sm:w-auto"
                  aria-pressed={formData.side === "bride"}
                  onClick={() =>
                    setFormData((prev) => ({
                      ...prev,
                      side: "bride",
                    }))
                  }
                >
                  Bride's Side
                </Button>
              </div>
            </div>
            <div className="grid gap-2">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-foreground/80">
                Attendance*
              </p>
              <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:gap-3">
                <Button
                  type="button"
                  variant={formData.isAttending ? "default" : "outline"}
                  className="w-full sm:w-auto"
                  aria-pressed={formData.isAttending}
                  onClick={() =>
                    setFormData((prev) => ({
                      ...prev,
                      isAttending: true,
                    }))
                  }
                >
                  Attending
                </Button>
                <Button
                  type="button"
                  variant={!formData.isAttending ? "default" : "outline"}
                  className="w-full sm:w-auto"
                  aria-pressed={!formData.isAttending}
                  onClick={() =>
                    setFormData((prev) => ({
                      ...prev,
                      isAttending: false,
                    }))
                  }
                >
                  Can't Make It
                </Button>
              </div>
            </div>
            <div className="grid gap-2">
              <label
                className="text-xs font-semibold uppercase tracking-[0.3em] text-foreground/80"
                htmlFor="notes"
              >
                Notes & Well Wishes
              </label>
              <textarea
                id="notes"
                name="notes"
                rows={4}
                value={formData.notes}
                onChange={(event) =>
                  setFormData((prev) => ({
                    ...prev,
                    notes: event.target.value,
                  }))
                }
                className="w-full rounded-lg border border-border/60 bg-background px-4 py-3 text-sm text-foreground shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/60"
                placeholder="Share any dietary needs, song requests, well wishes, or other guests you are bringing."
              />
            </div>
            <label className="flex items-center gap-3 rounded-lg border border-dashed border-border/60 bg-secondary/10 p-4 text-sm text-foreground">
              <input
                type="checkbox"
                name="is_relative"
                checked={formData.isRelative}
                onChange={(event) =>
                  setFormData((prev) => ({
                    ...prev,
                    isRelative: event.target.checked,
                  }))
                }
                className="h-4 w-4 rounded border border-border/60"
              />
              <span>I'm a relative of the couple</span>
            </label>
            {formMessage ? (
              <p className="rounded-lg border border-primary/30 bg-primary/10 px-4 py-3 text-sm text-primary">
                {formMessage}
              </p>
            ) : null}
            {formError ? (
              <p className="rounded-lg border border-destructive/40 bg-destructive/10 px-4 py-3 text-sm text-destructive">
                {formError}
              </p>
            ) : null}
            <div className="pt-1">
              <Button
                type="submit"
                size="lg"
                className="w-full sm:w-auto"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send RSVP"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </section>
  );
};
