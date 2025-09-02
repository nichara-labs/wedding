import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import AppShellLayout from "../components/AppShellLayout";
import "./globals.css";
import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Chanel and Nicholas's Wedding",
	description: "Please join us in celebrating our special day - Jan 10, 2026",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable}`}>
				<MantineProvider>
					<Notifications />
					<AppShellLayout>{children}</AppShellLayout>
				</MantineProvider>
			</body>
		</html>
	);
}
