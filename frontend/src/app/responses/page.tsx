"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { API_BASE_URL } from "@/lib/constants";

interface RsvpResponseItem {
  email: string;
  name: string;
  is_relative: boolean;
  notes: string;
  is_attending: boolean;
  side: "groom" | "bride";
  created_at: string;
}

type SortField = "created_at" | "name" | "is_attending" | "side";
type SortDirection = "asc" | "desc";

export default function ResponsesPage() {
  const [password, setPassword] = useState("");
  const [responses, setResponses] = useState<RsvpResponseItem[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [sortField, setSortField] = useState<SortField>("created_at");
  const [sortDirection, setSortDirection] = useState<SortDirection>("desc");

  const responsesEndpoint = useMemo(() => {
    const base = API_BASE_URL?.replace(/\/$/, "");
    return `${base ?? ""}/responses`;
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!password) {
      setError("Password is required.");
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(responsesEndpoint, {
        headers: {
          Authorization: password,
        },
      });

      if (!response.ok) {
        const message =
          response.status === 401
            ? "Incorrect password."
            : "Failed to load responses. Please try again.";
        throw new Error(message);
      }

      const data: RsvpResponseItem[] = await response.json();
      setResponses(data);
    } catch (fetchError) {
      setResponses(null);
      setError(
        fetchError instanceof Error
          ? fetchError.message
          : "Something went wrong. Please try again.",
      );
    } finally {
      setIsLoading(false);
    }
  };

  const sortedResponses = useMemo(() => {
    if (!responses) {
      return [];
    }

    const sorted = [...responses].sort((a, b) => {
      const directionMultiplier = sortDirection === "asc" ? 1 : -1;

      if (sortField === "created_at") {
        const aTime = new Date(a.created_at).getTime() || 0;
        const bTime = new Date(b.created_at).getTime() || 0;
        return (aTime - bTime) * directionMultiplier;
      }

      if (sortField === "is_attending") {
        return (
          (Number(a.is_attending) - Number(b.is_attending)) *
          directionMultiplier
        );
      }

      if (sortField === "side") {
        return a.side.localeCompare(b.side) * directionMultiplier;
      }

      return a.name.localeCompare(b.name) * directionMultiplier;
    });

    return sorted;
  }, [responses, sortField, sortDirection]);

  const handleSort = (field: SortField) => {
    setSortField((currentField) => {
      if (currentField === field) {
        setSortDirection((currentDirection) =>
          currentDirection === "asc" ? "desc" : "asc",
        );
        return currentField;
      }

      setSortDirection("asc");
      return field;
    });
  };

  const sortLabel = (field: SortField, label: string) => {
    if (sortField !== field) {
      return label;
    }

    return `${label} ${sortDirection === "asc" ? "↑" : "↓"}`;
  };

  return (
    <main className="min-h-screen bg-secondary/10 px-4 py-16 md:px-6 lg:py-24">
      <div className="mx-auto w-full max-w-5xl">
        <Card className="overflow-hidden bg-card/95">
          <CardHeader>
            <CardTitle className="text-3xl font-semibold sm:text-4xl font-[allura]">
              RSVP Responses
            </CardTitle>
            <CardDescription>
              Enter the shared password to review all RSVP submissions.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <form
              className="flex flex-col gap-4 sm:flex-row"
              onSubmit={handleSubmit}
            >
              <div className="flex-1">
                <label
                  className="text-xs font-semibold uppercase tracking-[0.3em] text-foreground/80"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  className="mt-2 h-11 w-full rounded-lg border border-border/60 bg-background px-4 text-sm text-foreground shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/60"
                  placeholder="Enter password"
                />
              </div>
              <div className="self-end">
                <Button type="submit" size="lg" disabled={isLoading}>
                  {isLoading ? "Loading..." : "View Responses"}
                </Button>
              </div>
            </form>
            {error ? (
              <p className="rounded-lg border border-destructive/40 bg-destructive/10 px-4 py-3 text-sm text-destructive">
                {error}
              </p>
            ) : null}
            {responses && sortedResponses.length === 0 ? (
              <p className="text-sm text-muted-foreground">No responses yet.</p>
            ) : null}
            {sortedResponses.length > 0 ? (
              <div className="overflow-x-auto">
                <div className="mb-4 flex flex-wrap gap-2">
                  <Button
                    type="button"
                    variant={sortField === "created_at" ? "default" : "outline"}
                    onClick={() => handleSort("created_at")}
                  >
                    {sortLabel("created_at", "Submitted")}
                  </Button>
                  <Button
                    type="button"
                    variant={sortField === "name" ? "default" : "outline"}
                    onClick={() => handleSort("name")}
                  >
                    {sortLabel("name", "Name")}
                  </Button>
                  <Button
                    type="button"
                    variant={sortField === "side" ? "default" : "outline"}
                    onClick={() => handleSort("side")}
                  >
                    {sortLabel("side", "Side")}
                  </Button>
                  <Button
                    type="button"
                    variant={
                      sortField === "is_attending" ? "default" : "outline"
                    }
                    onClick={() => handleSort("is_attending")}
                  >
                    {sortLabel("is_attending", "Attending")}
                  </Button>
                </div>
                <table className="min-w-full divide-y divide-border/60 text-sm">
                  <thead className="bg-secondary/20 text-foreground/80">
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold uppercase tracking-[0.2em]">
                        Name
                      </th>
                      <th className="px-4 py-3 text-left font-semibold uppercase tracking-[0.2em]">
                        Email
                      </th>
                      <th className="px-4 py-3 text-left font-semibold uppercase tracking-[0.2em]">
                        Side
                      </th>
                      <th className="px-4 py-3 text-left font-semibold uppercase tracking-[0.2em]">
                        Attending
                      </th>
                      <th className="px-4 py-3 text-left font-semibold uppercase tracking-[0.2em]">
                        Relative
                      </th>
                      <th className="px-4 py-3 text-left font-semibold uppercase tracking-[0.2em]">
                        Submitted
                      </th>
                      <th className="px-4 py-3 text-left font-semibold uppercase tracking-[0.2em]">
                        Notes
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/60">
                    {sortedResponses.map((item) => {
                      const submittedAt = new Date(item.created_at);
                      const formattedDate = Number.isNaN(submittedAt.getTime())
                        ? item.created_at
                        : submittedAt.toLocaleString();

                      return (
                        <tr
                          key={`${item.email}-${item.created_at}`}
                          className="bg-background"
                        >
                          <td className="px-4 py-3 font-medium text-foreground">
                            {item.name}
                          </td>
                          <td className="px-4 py-3 text-foreground/80">
                            {item.email}
                          </td>
                          <td className="px-4 py-3 capitalize text-foreground/80">
                            {item.side}
                          </td>
                          <td className="px-4 py-3 text-foreground/80">
                            {item.is_attending ? "Yes" : "No"}
                          </td>
                          <td className="px-4 py-3 text-foreground/80">
                            {item.is_relative ? "Yes" : "No"}
                          </td>
                          <td className="px-4 py-3 text-foreground/80">
                            {formattedDate}
                          </td>
                          <td className="px-4 py-3 text-foreground/80">
                            {item.notes?.trim() ? item.notes : "—"}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            ) : null}
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
