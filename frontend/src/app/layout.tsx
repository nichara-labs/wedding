import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";

import "./globals.css";
import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";

import { Noto_Serif_Display } from "next/font/google";

const notoSerif = Noto_Serif_Display({
	subsets: ["latin"],
	weight: ["400", "700"], // regular & bold
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
		<html lang="en">
			<body className={notoSerif.className}>
				<MantineProvider>
					<Notifications />
					{children}
				</MantineProvider>
			</body>
		</html>
	);
}
