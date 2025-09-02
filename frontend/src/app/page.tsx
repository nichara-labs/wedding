import {
	Box,
	Button,
	Card,
	Container,
	Group,
	SimpleGrid,
	Stack,
	Text,
	Title,
} from "@mantine/core";
import {
	IconCalendar,
	IconClock,
	IconHeart,
	IconMapPin,
} from "@tabler/icons-react";
import Link from "next/link";

export default function Home() {
	return (
		<>
			{/* Hero Section */}
			<Box
				style={{
					height: "60vh",
					position: "relative",
					backgroundImage: "url('/couple-photo.jpg')",
					backgroundSize: "cover",
					backgroundPosition: "center",
					backgroundRepeat: "no-repeat",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				{/* Overlay for better text readability */}
				<Box
					style={{
						position: "absolute",
						top: 0,
						left: 0,
						right: 0,
						bottom: 0,
						background:
							"linear-gradient(135deg, rgba(252, 228, 236, 0.8), rgba(243, 229, 245, 0.8))",
						zIndex: 1,
					}}
				/>

				<Container
					size="md"
					ta="center"
					style={{ position: "relative", zIndex: 2 }}
				>
					<Stack gap="xl">
						<Group justify="center" gap="xs">
							<IconHeart size={40} color="#e91e63" />
							<Title
								order={1}
								size="3rem"
								fw={700}
								c="#e91e63"
								style={{
									fontFamily: "serif",
									textShadow: "0 2px 4px rgba(255, 255, 255, 0.8)",
								}}
							>
								Chanel & Nicholas
							</Title>
							<IconHeart size={40} color="#e91e63" />
						</Group>

						<Text
							size="xl"
							c="dark"
							fw={500}
							style={{ textShadow: "0 1px 2px rgba(255, 255, 255, 0.8)" }}
						>
							Are getting married!
						</Text>

						<Text
							size="lg"
							c="dimmed"
							maw={600}
							mx="auto"
							style={{ textShadow: "0 1px 2px rgba(255, 255, 255, 0.8)" }}
						>
							Join us as we celebrate our love and begin our journey together as
							husband and wife
						</Text>

						<Group justify="center" gap="md">
							<Button
								component={Link}
								href="/rsvp"
								size="lg"
								gradient={{ from: "#e91e63", to: "#f06292" }}
								variant="gradient"
								radius="md"
							>
								RSVP Now
							</Button>
							<Button
								component={Link}
								href="/our-story"
								size="lg"
								variant="outline"
								color="pink"
								radius="md"
							>
								Our Story
							</Button>
						</Group>
					</Stack>
				</Container>
			</Box>

			{/* Wedding Details Section */}
			<Container size="lg" py="xl">
				<Title order={2} ta="center" mb="xl" c="#e91e63">
					Wedding Details
				</Title>

				<SimpleGrid cols={{ base: 1, sm: 2, md: 4 }} spacing="lg">
					<Card shadow="sm" padding="lg" radius="md" withBorder>
						<Stack align="center" gap="md">
							<IconCalendar size={40} color="#e91e63" />
							<Text fw={600} size="lg">
								Date
							</Text>
							<Text ta="center" c="dimmed">
								January 10, 2026
								<br />
								Saturday
							</Text>
						</Stack>
					</Card>

					<Card shadow="sm" padding="lg" radius="md" withBorder>
						<Stack align="center" gap="md">
							<IconClock size={40} color="#e91e63" />
							<Text fw={600} size="lg">
								Time
							</Text>
							<Text ta="center" c="dimmed">
								Reception: 11:00 AM
								<br />
								Ceremony: 12:00 PM
							</Text>
						</Stack>
					</Card>

					<Card shadow="sm" padding="lg" radius="md" withBorder>
						<Stack align="center" gap="md">
							<IconMapPin size={40} color="#e91e63" />
							<Text fw={600} size="lg">
								Venue
							</Text>
							<Text ta="center" c="dimmed">
								The Ritz Carlton
								<br />
								Marina Bay, 7 Raffles Avenue
								<br />
								Singapore 039799
							</Text>
						</Stack>
					</Card>

					<Card shadow="sm" padding="lg" radius="md" withBorder>
						<Stack align="center" gap="md">
							<IconHeart size={40} color="#e91e63" />
							<Text fw={600} size="lg">
								Dress Code
							</Text>
							<Text ta="center" c="dimmed">
								Semi-Formal
								<br />
								Garden Party Attire
							</Text>
						</Stack>
					</Card>
				</SimpleGrid>
			</Container>

			{/* Quick RSVP Section */}
			<Box style={{ background: "rgba(233, 30, 99, 0.05)" }} py="xl">
				<Container size="md" ta="center">
					<Title order={2} mb="md" c="#e91e63">
						Can't Wait to Celebrate?
					</Title>
					<Text size="lg" c="dimmed" mb="xl">
						Please let us know if you'll be joining us for our special day
					</Text>
					<Button
						component={Link}
						href="/rsvp"
						size="xl"
						gradient={{ from: "#e91e63", to: "#f06292" }}
						variant="gradient"
						radius="md"
					>
						RSVP Today
					</Button>
				</Container>
			</Box>
		</>
	);
}
