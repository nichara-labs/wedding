/** biome-ignore-all lint/correctness/useUniqueElementIds: <explanation> */
"use client";

import "@/app/globals.css";

import { CalendarDays, Clock, Heart, MapPin, Send } from "lucide-react";
import Image from "next/image";
import * as React from "react";
import { Button, buttonVariants } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { API_BASE_URL } from "@/lib/constants";
import { cn } from "@/lib/utils";

const navigation = [
	{ label: "Details", href: "#details" },
	{ label: "Timeline", href: "#timeline" },
	{ label: "Gallery", href: "#gallery" },
	{ label: "RSVP", href: "#rsvp" },
];

const timelineItems = [
	{
		time: "10:30 AM",
		title: "Tea Ceremony",
		description:
			"Share a quiet moment with us and our families as we begin the celebrations.",
	},
	{
		time: "11:30 AM",
		title: "Cocktail Reception",
		description:
			"Sip on signature drinks and mingle at The Ritz-Carlton ballroom foyer.",
	},
	{
		time: "12:20 PM",
		title: "Guests to be Seated",
		description:
			"Doors open and ushers will guide you to your tables for the luncheon.",
	},
	{
		time: "12:30 PM",
		title: "Commencement of Lunch",
		description:
			"A celebratory lunch begins, followed by toasts, stories, and sweet surprises.",
	},
];

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

export default function Page() {
	const handleRsvpClick = React.useCallback(() => {
		console.log("RSVP button clicked - TODO: wire up RSVP handler");
	}, []);

	return (
		<main id="top" className="flex min-h-screen flex-col">
			<header className="sticky inset-x-0 top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur">
				<div className="mx-auto flex w-full max-w-6xl flex-col px-4 md:px-6">
					<div className="flex items-center justify-between gap-4 py-4">
						<a
							href="#top"
							className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.35em] text-foreground"
							aria-label="Back to top"
						>
							<Heart className="h-5 w-5 text-primary" />
							<span className="hidden sm:inline-block">Chanel & Nicholas</span>
							<span className="sm:hidden">C & N</span>
						</a>
						<nav className="hidden items-center gap-6 text-sm font-medium md:flex">
							{navigation.map((item) => (
								<a
									key={item.href}
									href={item.href}
									className="hover:text-primary/90"
								>
									{item.label}
								</a>
							))}
						</nav>
						<Button size="sm" className="shadow-md" onClick={handleRsvpClick}>
							RSVP Now {API_BASE_URL}
						</Button>
					</div>
					<nav className="flex items-center gap-4 pb-4 text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground md:hidden">
						{navigation.map((item) => (
							<a
								key={item.href}
								href={item.href}
								className="hover:text-primary/90"
							>
								{item.label}
							</a>
						))}
					</nav>
				</div>
			</header>
			<div className="flex flex-1 flex-col">
				<section
					id="details"
					className="relative overflow-hidden bg-gradient-to-b from-background via-background to-secondary/20"
				>
					<div
						className="absolute inset-x-0 top-0 h-64 bg-[radial-gradient(circle,_rgba(90,76,219,0.15)_0%,_rgba(255,255,255,0)_65%)]"
						aria-hidden
					/>
					<div className="mx-auto flex max-w-6xl flex-col items-center gap-12 px-4 pb-16 pt-12 md:flex-row md:items-start md:gap-16 md:px-6 lg:pb-24 lg:pt-16">
						<div className="flex w-full flex-1 flex-col items-center gap-6 text-center md:items-start md:text-left">
							<p className="text-xs font-semibold uppercase tracking-[0.45em] text-primary">
								You're Invited
							</p>
							<h1 className="text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
								Chanel & Nicholas
							</h1>
							<p className="max-w-xl text-base text-muted-foreground sm:text-lg">
								Join us for an elegant celebration of love on Saturday, 10
								January 2026 at The Ritz-Carlton, Millenia Singapore. We cannot
								wait to share this day with you.
							</p>
							<div className="grid w-full gap-4 text-sm text-foreground sm:grid-cols-2 sm:text-base">
								<div className="flex items-center justify-center gap-3 rounded-xl border border-border/60 bg-card/60 px-5 py-4 md:justify-start">
									<CalendarDays className="h-6 w-6 text-primary" />
									<div className="text-left">
										<p className="font-semibold">Saturday, 10 January 2026</p>
										<p className="text-sm text-muted-foreground">
											Tea ceremony from 10:30 AM
										</p>
									</div>
								</div>
								<div className="flex items-center justify-center gap-3 rounded-xl border border-border/60 bg-card/60 px-5 py-4 md:justify-start">
									<MapPin className="h-6 w-6 text-primary" />
									<div className="text-left">
										<p className="font-semibold">The Ritz-Carlton, Millenia</p>
										<p className="text-sm text-muted-foreground">
											Marina Bay, Singapore
										</p>
									</div>
								</div>
							</div>
							<div className="flex flex-col items-center gap-3 sm:flex-row md:items-start">
								<Button
									size="lg"
									className="w-full sm:w-auto"
									onClick={handleRsvpClick}
								>
									RSVP Now
								</Button>
								<a
									href="#timeline"
									className={cn(
										buttonVariants({ variant: "secondary", size: "lg" }),
										"w-full text-center sm:w-auto",
									)}
								>
									View Timeline
								</a>
							</div>
						</div>
						<div className="relative flex w-full max-w-md flex-1 justify-center">
							<div className="relative aspect-[3/4] w-full overflow-hidden rounded-[2rem] border border-border/80 shadow-xl">
								<Image
									src="/couple-photo.jpg"
									alt="Chanel and Nicholas"
									fill
									className="object-cover"
									priority
								/>
							</div>
						</div>
					</div>
				</section>
				<section
					id="timeline"
					className="mx-auto w-full max-w-6xl px-4 py-16 md:px-6 lg:py-24"
				>
					<div className="flex flex-col gap-4 text-center md:flex-row md:items-end md:justify-between md:text-left">
						<div>
							<p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary">
								The Day Of
							</p>
							<h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
								Wedding Day Timeline
							</h2>
						</div>
						<p className="text-sm text-muted-foreground sm:text-base md:max-w-sm">
							Arrive a little early, settle in, and enjoy each chapter of our
							celebration as it unfolds.
						</p>
					</div>
					<div className="mt-10 grid gap-6 md:grid-cols-2">
						{timelineItems.map((item) => (
							<Card key={item.time} className="relative overflow-hidden">
								<CardHeader className="pb-3">
									<div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.3em] text-primary">
										<Clock className="h-4 w-4" />
										<span>{item.time}</span>
									</div>
									<CardTitle className="mt-3 text-2xl font-semibold">
										{item.title}
									</CardTitle>
								</CardHeader>
								<CardContent>
									<p className="text-sm text-muted-foreground sm:text-base">
										{item.description}
									</p>
								</CardContent>
							</Card>
						))}
					</div>
				</section>
				<section id="gallery" className="bg-secondary/25 py-16 md:py-24">
					<div className="mx-auto w-full max-w-6xl px-4 md:px-6">
						<div className="flex flex-col items-center text-center">
							<p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary">
								Photo Montage
							</p>
							<h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
								Moments in Bloom
							</h2>
							<p className="mt-4 max-w-2xl text-sm text-muted-foreground sm:text-base">
								A glimpse into the memories that brought us here—captured in the
								heart of Singapore and beyond.
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
				<section
					id="rsvp"
					className="mx-auto w-full max-w-4xl px-4 py-16 md:px-6 lg:py-24"
				>
					<Card className="overflow-hidden bg-card/95">
						<CardHeader>
							<div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.35em] text-primary">
								<Send className="h-5 w-5" />
								<span>Join us</span>
							</div>
							<CardTitle className="mt-2 text-3xl font-semibold sm:text-4xl">
								RSVP & Well Wishes
							</CardTitle>
							<CardDescription>
								We would be honoured to have you celebrate with us. Kindly RSVP
								at your earliest convenience so we can prepare a seat at our
								table just for you.
							</CardDescription>
						</CardHeader>
						<CardContent className="text-sm text-muted-foreground sm:text-base">
							<p>
								Let us know any dietary preferences or song requests to make the
								afternoon extra special.
							</p>
						</CardContent>
						<CardFooter className="flex flex-col gap-3 sm:flex-row">
							<Button
								size="lg"
								className="w-full sm:w-auto"
								onClick={handleRsvpClick}
							>
								RSVP Now
							</Button>
							<Button
								variant="outline"
								size="lg"
								className="w-full border-dashed sm:w-auto"
								onClick={handleRsvpClick}
							>
								Send Your Wishes
							</Button>
						</CardFooter>
					</Card>
				</section>
			</div>
			<footer className="border-t border-border/60 bg-background/90">
				<div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-4 py-6 text-center text-xs text-muted-foreground md:flex-row md:items-center md:justify-between md:px-6">
					<p>
						&copy; {new Date().getFullYear()} Chanel & Nicholas. All our love.
					</p>
					<p>
						With appreciation to our family and friends joining us at The
						Ritz-Carlton, Singapore.
					</p>
				</div>
			</footer>
		</main>
	);
}
