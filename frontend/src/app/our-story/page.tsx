import {
	Avatar,
	Box,
	Card,
	Container,
	Group,
	Stack,
	Text,
	Title,
} from "@mantine/core";
import {
	IconCalendar,
	IconHeart,
	IconMapPin,
	IconRings,
} from "@tabler/icons-react";

export default function OurStory() {
	return (
		<Container size="md" py="xl">
			<Stack gap="xl">
				{/* Header */}
				<Box ta="center">
					<Title order={1} c="#e91e63" mb="md">
						Our Story
					</Title>
					<Text size="lg" c="dimmed" maw={600} mx="auto">
						Every love story is beautiful, but ours is our favorite
					</Text>
				</Box>

				{/* Couple Introduction */}
				<Card shadow="lg" padding="xl" radius="lg" withBorder>
					<Group justify="center" mb="xl">
						<Stack align="center" gap="sm">
							<Avatar
								size={120}
								radius="50%"
								src="/couple-photo.jpg"
								alt="Sarah"
								color="pink"
							>
								S
							</Avatar>
							<Text fw={600} size="lg">
								Chanel
							</Text>
							<Text size="sm" c="dimmed">
								Data Scientist
							</Text>
						</Stack>

						<IconHeart size={40} color="#e91e63" />

						<Stack align="center" gap="sm">
							<Avatar
								size={120}
								radius="50%"
								src="/couple-photo.jpg"
								alt="Michael"
								color="blue"
							>
								M
							</Avatar>
							<Text fw={600} size="lg">
								Nicholas
							</Text>
							<Text size="sm" c="dimmed">
								Software Engineer
							</Text>
						</Stack>
					</Group>

					<Text ta="center" size="md" c="dark" mb="lg">
						"We knew from the moment we met that we were meant to be together.
						Our love story has been filled with laughter, adventure, and endless
						support for one another."
					</Text>
				</Card>

				{/* Timeline */}
				<Card shadow="lg" padding="xl" radius="lg" withBorder>
					<Title order={2} ta="center" mb="xl" c="#e91e63">
						Our Journey Together
					</Title>

					<Stack gap="lg">
						<Card
							padding="lg"
							radius="md"
							style={{ borderLeft: "4px solid #e91e63" }}
						>
							<Group gap="md" align="flex-start">
								<IconMapPin size={24} color="#e91e63" />
								<Stack gap="xs" style={{ flex: 1 }}>
									<Text fw={600} size="lg">
										First Meeting
									</Text>
									<Text c="dimmed" size="sm">
										<strong>The Coffee Bean</strong> • Oct 2021
									</Text>
									<Text size="sm">
										We matched on Bumble and decided to meet at The Coffee Bean.
										Nicholas arrived first and, not spotting Chanel anywhere,
										figured he'd grab a drink while waiting. Little did he know
										Chanel was running late from badminton practice! When she
										finally arrived (still slightly sweaty but glowing), we hit
										it off immediately and spontaneously decided to continue our
										afternoon adventure at Guilin Nature Park. ever!
									</Text>
								</Stack>
							</Group>
						</Card>

						<Card
							padding="lg"
							radius="md"
							style={{ borderLeft: "4px solid #e91e63" }}
						>
							<Group gap="md" align="flex-start">
								<IconHeart size={24} color="#e91e63" />
								<Stack gap="xs" style={{ flex: 1 }}>
									<Text fw={600} size="lg">
										First Date
									</Text>
									<Text c="dimmed" size="sm">
										<strong>Marina Bay Sands</strong> • April 2019
									</Text>
									<Text size="sm">
										Our first official date was watching the sunset at Marina
										Bay. We talked for hours and knew we had found something
										special.
									</Text>
								</Stack>
							</Group>
						</Card>

						<Card
							padding="lg"
							radius="md"
							style={{ borderLeft: "4px solid #e91e63" }}
						>
							<Group gap="md" align="flex-start">
								<IconCalendar size={24} color="#e91e63" />
								<Stack gap="xs" style={{ flex: 1 }}>
									<Text fw={600} size="lg">
										Moving In Together
									</Text>
									<Text c="dimmed" size="sm">
										<strong>Our First Apartment</strong> • September 2021
									</Text>
									<Text size="sm">
										After two years of dating, we decided to take the next step
										and move in together. It was the best decision we ever made!
									</Text>
								</Stack>
							</Group>
						</Card>

						<Card
							padding="lg"
							radius="md"
							style={{ borderLeft: "4px solid #e91e63" }}
						>
							<Group gap="md" align="flex-start">
								<IconRings size={24} color="#e91e63" />
								<Stack gap="xs" style={{ flex: 1 }}>
									<Text fw={600} size="lg">
										The Proposal
									</Text>
									<Text c="dimmed" size="sm">
										<strong>Gardens by the Bay</strong> • December 2023
									</Text>
									<Text size="sm">
										Nicholas proposed at the Flower Dome where we had our second
										date. Chanel said yes through happy tears, and we celebrated
										with champagne and dinner!
									</Text>
								</Stack>
							</Group>
						</Card>

						<Card
							padding="lg"
							radius="md"
							style={{ borderLeft: "4px solid #e91e63" }}
						>
							<Group gap="md" align="flex-start">
								<IconHeart size={24} color="#e91e63" />
								<Stack gap="xs" style={{ flex: 1 }}>
									<Text fw={600} size="lg">
										Our Wedding Day
									</Text>
									<Text c="dimmed" size="sm">
										<strong>The Ritz Carlton</strong> • January 10, 2026
									</Text>
									<Text size="sm">
										The day we become husband and wife, surrounded by our
										closest family and friends. We can't wait to celebrate with
										all of you!
									</Text>
								</Stack>
							</Group>
						</Card>
					</Stack>
				</Card>

				{/* Fun Facts */}
				<Card shadow="lg" padding="xl" radius="lg" withBorder>
					<Title order={2} ta="center" mb="xl" c="#e91e63">
						Fun Facts About Us
					</Title>

					<Stack gap="md">
						<Group justify="space-between">
							<Text fw={500}>Our favorite date activity:</Text>
							<Text c="dimmed">
								Trying new restaurants and cooking together
							</Text>
						</Group>

						<Group justify="space-between">
							<Text fw={500}>How many countries we've visited together:</Text>
							<Text c="dimmed">8 countries and counting!</Text>
						</Group>

						<Group justify="space-between">
							<Text fw={500}>Our shared hobby:</Text>
							<Text c="dimmed">Photography and hiking</Text>
						</Group>

						<Group justify="space-between">
							<Text fw={500}>Our favorite movie to watch together:</Text>
							<Text c="dimmed">The Princess Bride</Text>
						</Group>

						<Group justify="space-between">
							<Text fw={500}>What we're most excited about marriage:</Text>
							<Text c="dimmed">
								Building our future together and starting a family
							</Text>
						</Group>
					</Stack>
				</Card>
			</Stack>
		</Container>
	);
}
