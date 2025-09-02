import {
	Anchor,
	Box,
	Card,
	Container,
	Group,
	List,
	SimpleGrid,
	Stack,
	Text,
	Title,
} from "@mantine/core";
import { IconCalendar, IconCar, IconMapPin } from "@tabler/icons-react";

export default function WeddingDetails() {
	return (
		<Container size="lg" py="xl">
			<Stack gap="xl">
				{/* Header */}
				<Box ta="center">
					<Title order={1} c="#e91e63" mb="md">
						Wedding Details
					</Title>
					<Text size="lg" c="dimmed" maw={600} mx="auto">
						Everything you need to know about our special day
					</Text>
				</Box>

				{/* Schedule */}
				<Card shadow="lg" padding="xl" radius="lg" withBorder>
					<Title order={2} mb="xl" c="#e91e63">
						<Group gap="sm">
							<IconCalendar size={28} />
							Schedule of Events
						</Group>
					</Title>

					<SimpleGrid cols={{ base: 1, md: 3 }} spacing="lg">
						<Stack>
							<Text fw={600} size="lg">
								Saturday, October 15
							</Text>
							<Stack gap="sm">
								<Group justify="space-between">
									<Text>10:30 AM</Text>
									<Text c="dimmed">Guest Arrival</Text>
								</Group>
								<Group justify="space-between">
									<Text>11:00 AM</Text>
									<Text c="dimmed">Tea Ceremony</Text>
								</Group>
								<Group justify="space-between">
									<Text>11:30 AM</Text>
									<Text c="dimmed">Photography & Mingling</Text>
								</Group>
							</Stack>
						</Stack>

						<Stack>
							<Text fw={600} size="lg">
								Lunch Reception
							</Text>
							<Stack gap="sm">
								<Group justify="space-between">
									<Text>12:00 PM</Text>
									<Text c="dimmed">Banquet Begins</Text>
								</Group>
								<Group justify="space-between">
									<Text>1:00 PM</Text>
									<Text c="dimmed">Lunch Service</Text>
								</Group>
								<Group justify="space-between">
									<Text>2:00 PM</Text>
									<Text c="dimmed">Toasts & Speeches</Text>
								</Group>
							</Stack>
						</Stack>

						<Stack>
							<Text fw={600} size="lg">
								Celebration
							</Text>
							<Stack gap="sm">
								<Group justify="space-between">
									<Text>2:30 PM</Text>
									<Text c="dimmed">Cake Cutting</Text>
								</Group>
								<Group justify="space-between">
									<Text>3:00 PM</Text>
									<Text c="dimmed">Dancing & Celebration</Text>
								</Group>
								<Group justify="space-between">
									<Text>4:00 PM</Text>
									<Text c="dimmed">Send Off</Text>
								</Group>
							</Stack>
						</Stack>
					</SimpleGrid>
				</Card>

				{/* Venue Information */}
				<Card shadow="lg" padding="xl" radius="lg" withBorder>
					<Title order={2} mb="xl" c="#e91e63">
						<Group gap="sm">
							<IconMapPin size={28} />
							Venue Information
						</Group>
					</Title>

					<SimpleGrid cols={{ base: 1, md: 2 }} spacing="lg">
						<Stack>
							<Text fw={600} size="lg">
								The Ritz Carlton
							</Text>
							<Text c="dimmed">
								Marina Bay, 7 Raffles Avenue
								<br />
								Singapore 039799
							</Text>
							<Anchor
								href="https://maps.google.com/?q=7+Raffles+Avenue+Singapore+039799"
								target="_blank"
								c="pink"
							>
								View on Google Maps
							</Anchor>
							<Text size="sm">
								A luxurious waterfront hotel with stunning views of Marina Bay,
								perfect for both ceremony and reception.
							</Text>
						</Stack>

						<Stack>
							<Text fw={600} size="lg">
								Getting There
							</Text>
							<Group gap="sm" mb="sm">
								<IconCar size={20} color="#e91e63" />
								<Text fw={500}>Parking</Text>
							</Group>
							<Text size="sm" c="dimmed" mb="md">
								Valet parking available at the hotel
							</Text>

							<Text fw={500}>Public Transportation</Text>
							<Text size="sm" c="dimmed">
								Take MRT to Esplanade station (5 min walk) or taxi/grab to the
								hotel entrance
							</Text>
						</Stack>
					</SimpleGrid>
				</Card>

				{/* Dress Code */}
				<Card shadow="lg" padding="xl" radius="lg" withBorder>
					<Title order={3} mb="lg" c="#e91e63">
						Dress Code
					</Title>
					<Stack gap="md">
						<Text fw={500}>Smart Casual</Text>
						<List spacing="sm" size="sm">
							<li>Business casual attire or cocktail dresses</li>
							<li>Dress shirts with chinos or nice slacks</li>
							<li>Comfortable dress shoes</li>
							<li>Light jacket or blazer recommended</li>
						</List>
						<Text size="sm" c="dimmed">
							Please avoid white, ivory, or cream colors.
						</Text>
					</Stack>
				</Card>

				{/* Contact */}
				<Card
					shadow="lg"
					padding="xl"
					radius="lg"
					withBorder
					style={{ textAlign: "center" }}
				>
					<Title order={3} mb="md" c="#e91e63">
						Questions?
					</Title>
					<Text>
						If you have any questions about the wedding, please don't hesitate
						to reach out!
					</Text>
					<Text mt="sm">
						<Anchor href="mailto:wedding@chanelandnicholas.com" c="pink">
							wedding@chanelandnicholas.com
						</Anchor>
					</Text>
				</Card>
			</Stack>
		</Container>
	);
}
