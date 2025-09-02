import {
	Button,
	Card,
	Container,
	Group,
	Stack,
	Text,
	Title,
} from "@mantine/core";
import { IconCheck, IconHeart } from "@tabler/icons-react";
import Link from "next/link";

export default function ThankYou() {
	return (
		<Container size="sm" py="xl">
			<Card shadow="lg" padding="xl" radius="lg" withBorder>
				<Stack gap="lg" align="center">
					<Group gap="xs">
						<IconCheck size={48} color="#4caf50" />
						<IconHeart size={48} color="#e91e63" />
					</Group>

					<Title order={1} ta="center" c="#e91e63">
						Thank You!
					</Title>

					<Text size="lg" ta="center" c="dark">
						Your RSVP has been successfully submitted.
					</Text>

					<Text size="md" ta="center" c="dimmed">
						We're so excited to celebrate our special day with you! Keep an eye
						on your email for more details about the wedding.
					</Text>

					<Button
						component={Link}
						href="/"
						size="lg"
						gradient={{ from: "#e91e63", to: "#f06292" }}
						variant="gradient"
						radius="md"
						mt="md"
					>
						Back to Home
					</Button>

					<Text size="xs" ta="center" c="dimmed">
						Questions? Contact us at wedding@sarahandmichael.com
					</Text>
				</Stack>
			</Card>
		</Container>
	);
}
