"use client";

import {
	Anchor,
	AppShell,
	Burger,
	Button,
	Container,
	Group,
	Stack,
	Text,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconHeart } from "@tabler/icons-react";
import Link from "next/link";

interface AppShellLayoutProps {
	children: React.ReactNode;
}

export default function AppShellLayout({ children }: AppShellLayoutProps) {
	const [opened, { toggle }] = useDisclosure();

	const navItems = [
		{ label: "Home", href: "/" },
		{ label: "Our Story", href: "/our-story" },
		{ label: "Wedding Details", href: "/details" },
		{ label: "Gallery", href: "/gallery" },
		{ label: "RSVP", href: "/rsvp" },
	];

	return (
		<AppShell
			header={{ height: 70 }}
			footer={{ height: 80 }}
			navbar={{
				width: 250,
				breakpoint: "sm",
				collapsed: { desktop: true, mobile: !opened },
			}}
			padding="md"
		>
			<AppShell.Header>
				<Group h="100%" px="md" justify="space-between">
					<Group>
						<Burger
							opened={opened}
							onClick={toggle}
							hiddenFrom="sm"
							size="sm"
						/>
						<Group gap="xs">
							<IconHeart size={24} color="#e91e63" />
							<Text size="xl" fw={700} c="#e91e63">
								Sarah & Michael
							</Text>
						</Group>
					</Group>

					<Group visibleFrom="sm">
						{navItems.map((item) => (
							<Button
								key={item.href}
								component={Link}
								href={item.href}
								variant="subtle"
								color="pink"
								size="sm"
							>
								{item.label}
							</Button>
						))}
					</Group>
				</Group>
			</AppShell.Header>

			<AppShell.Navbar p="md">
				<Stack gap="sm">
					{navItems.map((item) => (
						<Button
							key={item.href}
							component={Link}
							href={item.href}
							variant="subtle"
							color="pink"
							fullWidth
							justify="start"
							onClick={toggle}
						>
							{item.label}
						</Button>
					))}
				</Stack>
			</AppShell.Navbar>

			<AppShell.Main
				style={{
					background: "linear-gradient(135deg, #fce4ec, #f3e5f5)",
					minHeight: "calc(100vh - 150px)",
				}}
			>
				{children}
			</AppShell.Main>

			<AppShell.Footer p="md">
				<Container size="lg">
					<Group justify="space-between" align="center">
						<Text size="sm" c="dimmed">
							Built with ❤️ by{" "}
							<Anchor
								href="https://nicharalabs.com"
								target="_blank"
								c="pink"
								size="sm"
							>
								Nichara Labs
							</Anchor>
						</Text>
						<Text size="sm" c="dimmed">
							<Anchor
								href="https://github.com/nichara-labs/wedding"
								target="_blank"
								c="pink"
								size="sm"
							>
								View Source Code
							</Anchor>
						</Text>
					</Group>
				</Container>
			</AppShell.Footer>
		</AppShell>
	);
}
