import {
	AspectRatio,
	Box,
	Card,
	Container,
	SimpleGrid,
	Stack,
	Text,
	Title,
} from "@mantine/core";

export default function Gallery() {
	// Placeholder for future photos
	const photoCount = 8;

	return (
		<Container size="lg" py="xl">
			<Stack gap="xl">
				{/* Header */}
				<Box ta="center">
					<Title order={1} c="#e91e63" mb="md">
						Our Gallery
					</Title>
					<Text size="lg" c="dimmed" maw={600} mx="auto">
						A collection of our favorite moments together
					</Text>
				</Box>

				{/* Engagement Photos Section */}
				<Card shadow="lg" padding="xl" radius="lg" withBorder>
					<Title order={2} ta="center" mb="xl" c="#e91e63">
						Engagement Photos
					</Title>

					<SimpleGrid cols={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing="md">
						{Array.from({ length: photoCount }, (_, index) => (
							<Card
								key={`photo-${index + 1}`}
								padding="xs"
								radius="md"
								withBorder
							>
								<AspectRatio ratio={1}>
									<div
										style={{
											background: "linear-gradient(135deg, #fce4ec, #f3e5f5)",
											display: "flex",
											alignItems: "center",
											justifyContent: "center",
											borderRadius: "8px",
											color: "#e91e63",
											fontSize: "14px",
											fontWeight: 500,
										}}
									>
										Photo {index + 1}
									</div>
								</AspectRatio>
							</Card>
						))}
					</SimpleGrid>

					<Text ta="center" mt="xl" c="dimmed">
						Photos by{" "}
						<Text component="span" c="pink" fw={500}>
							Amazing Wedding Photography
						</Text>
					</Text>
				</Card>

				{/* Coming Soon Section */}
				<Card
					shadow="lg"
					padding="xl"
					radius="lg"
					withBorder
					style={{ textAlign: "center" }}
				>
					<Title order={2} mb="md" c="#e91e63">
						Wedding Photos Coming Soon!
					</Title>
					<Text size="lg" c="dimmed">
						We can't wait to share beautiful photos from our special day with
						you. Check back after January 10, 2026 to see all the magical
						moments!
					</Text>
				</Card>

				{/* Note about photo sharing */}
				<Box ta="center">
					<Text size="sm" c="dimmed">
						Want to share your photos from our wedding? Tag us on social media
						or email them to{" "}
						<Text component="span" c="pink">
							photos@chanelandnicholas.com
						</Text>
					</Text>
				</Box>
			</Stack>
		</Container>
	);
}
