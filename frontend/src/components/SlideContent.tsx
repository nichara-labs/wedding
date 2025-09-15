"use client";

import { Stack } from "@mantine/core";

export default function SlideContent({
	children,
}: {
	children: React.ReactNode;
}) {
	return <Stack className="slide-stack">{children}</Stack>;
}
