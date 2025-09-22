import "./globals.css";

import { Noto_Serif_Display } from "next/font/google";

import { cn } from "@/lib/utils";

const notoSerif = Noto_Serif_Display({
	subsets: ["latin"],
	weight: ["400", "700"],
});

export const metadata = {
	title: "Chanel and Nicholas's Wedding",
	description: "Please join us in celebrating our special day - Jan 10, 2026",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={cn(
					notoSerif.className,
					"min-h-screen bg-background text-foreground antialiased",
				)}
			>
				{children}
			</body>
		</html>
	);
}
