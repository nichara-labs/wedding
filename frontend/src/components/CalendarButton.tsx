"use client";

import { AddToCalendarButton } from "add-to-calendar-button-react";
import { useEffect, useState } from "react";

export const CalendarButton = () => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) {
    return null;
  }

  return (
    <AddToCalendarButton
      name="Chanel & Nicholas Wedding"
      options={["Apple", "Google", "iCal", "Outlook.com"]}
      location="Junior Ballroom, The Ritz-Carlton, Millenia Singapore, 7 Raffles Avenue, Singapore 039799"
      description={`
11:00 AM - Tea Ceremony · Share a quiet moment with us and our families as we begin the celebrations.

12:00 PM - Cocktail Reception · Sip on signature drinks and mingle at The Ritz-Carlton ballroom foyer.

12:20 PM - Guests to be Seated · Doors open and ushers will guide you to your tables for the luncheon.

12:30 PM - Commencement of Lunch · A celebratory lunch begins, followed by toasts, stories, and sweet surprises.

More details at https://chanelandnicholas.com/#timeline`}
      startDate="2026-01-10"
      endDate="2026-01-10"
      startTime="11:00"
      endTime="14:00"
      iCalFileName="chanel-nicholas-wedding"
      timeZone="Asia/Singapore"
      hideBranding={true}
    />
  );
};
