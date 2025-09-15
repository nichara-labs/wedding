// app/page.tsx
"use client";

import { MantineProvider } from "@mantine/core";
import Slideshow from "@/components/Slideshow";
import "@/app/globals.css"; // your global CSS

export default function Page() {
	return (
		<MantineProvider>
			<Slideshow />
		</MantineProvider>
	);
}
