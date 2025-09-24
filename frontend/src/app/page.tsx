"use client";

import "@/app/globals.css";

import * as React from "react";
import { Gallery } from "@/app/Gallery";
import { Header } from "@/app/Header";
import { Timeline } from "@/app/Timeline";
import { anchors } from "@/lib/constants";
import { Details } from "./Details";
import { Footer } from "./Footer";
import { RsvpForm } from "./RsvpForm";

export default function Page() {
  const rsvpSectionRef = React.useRef<HTMLElement | null>(null);

  return (
    <main id={anchors.top} className="flex min-h-screen flex-col">
      <Header />
      <div className="flex flex-1 flex-col">
        <Details sectionId={anchors.details} />
        <Timeline sectionId={anchors.timeline} />
        <Gallery sectionId={anchors.gallery} />
        <RsvpForm sectionId={anchors.rsvp} rsvpSectionRef={rsvpSectionRef} />
      </div>
      <Footer />
    </main>
  );
}
