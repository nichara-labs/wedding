"use client";

import {
	Alert,
	Box,
	Button,
	Card,
	Container,
	Group,
	Select,
	Stack,
	Text,
	Textarea,
	TextInput,
	Title,
} from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { IconCheck, IconHeart, IconX } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface RSVPFormData {
	fullName: string;
	email: string;
	side: string;
	notes: string;
}

export default function RSVPForm() {
	const router = useRouter();
	const [formData, setFormData] = useState<RSVPFormData>({
		fullName: "",
		email: "",
		side: "",
		notes: "",
	});
	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleInputChange = (field: keyof RSVPFormData, value: string) => {
		setFormData((prev) => ({
			...prev,
			[field]: value,
		}));
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		// Basic validation
		if (!formData.fullName || !formData.email || !formData.side) {
			notifications.show({
				title: "Missing Information",
				message: "Please fill in all required fields",
				color: "red",
				icon: <IconX size={16} />,
			});
			return;
		}

		// Email validation
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(formData.email)) {
			notifications.show({
				title: "Invalid Email",
				message: "Please enter a valid email address",
				color: "red",
				icon: <IconX size={16} />,
			});
			return;
		}

		setIsSubmitting(true);

		try {
			// Call the backend API
			const response = await fetch("/api/rsvp", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			});

			const result = await response.json();

			if (!response.ok) {
				throw new Error(result.error || "Failed to submit RSVP");
			}

			notifications.show({
				title: "RSVP Submitted!",
				message:
					"Thank you for your response. We can't wait to celebrate with you!",
				color: "green",
				icon: <IconCheck size={16} />,
			});

			// Reset form
			setFormData({
				fullName: "",
				email: "",
				side: "",
				notes: "",
			});

			// Redirect to thank you page after a short delay
			setTimeout(() => {
				router.push("/thank-you");
			}, 2000);
		} catch {
			notifications.show({
				title: "Submission Failed",
				message: "There was an error submitting your RSVP. Please try again.",
				color: "red",
				icon: <IconX size={16} />,
			});
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<Container size="sm" py="xl">
			<Card shadow="lg" padding="xl" radius="lg" withBorder>
				<Stack gap="lg">
					<Box ta="center">
						<Group justify="center" gap="xs" mb="xs">
							<IconHeart size={32} color="#e91e63" />
							<Title order={1} size="h2" c="#e91e63">
								Wedding RSVP
							</Title>
							<IconHeart size={32} color="#e91e63" />
						</Group>
						<Text size="lg" c="dimmed" mb="xl">
							We're excited to celebrate our special day with you!
						</Text>
					</Box>

					<Alert color="blue" variant="light" radius="md">
						<Text size="sm">
							Please fill out this form to let us know if you'll be joining us.
							Your response helps us plan the perfect celebration!
						</Text>
					</Alert>

					<form onSubmit={handleSubmit}>
						<Stack gap="md">
							<TextInput
								label="Full Name"
								placeholder="Enter your full name"
								value={formData.fullName}
								onChange={(e) => handleInputChange("fullName", e.target.value)}
								required
								size="md"
								withAsterisk
							/>

							<TextInput
								label="Email Address"
								placeholder="your.email@example.com"
								type="email"
								value={formData.email}
								onChange={(e) => handleInputChange("email", e.target.value)}
								required
								size="md"
								withAsterisk
							/>

							<Select
								label="Which side brings you to our celebration?"
								placeholder="Select bride or groom's side"
								value={formData.side}
								onChange={(value) => handleInputChange("side", value || "")}
								data={[
									{ value: "bride", label: "Bride's Side" },
									{ value: "groom", label: "Groom's Side" },
								]}
								required
								size="md"
								withAsterisk
							/>

							<Textarea
								label="Additional Notes"
								placeholder="Food allergies, dietary restrictions, well wishes, or anything else you'd like us to know..."
								value={formData.notes}
								onChange={(e) => handleInputChange("notes", e.target.value)}
								minRows={4}
								size="md"
								description="Optional: Let us know about any dietary restrictions, accessibility needs, or share your excitement!"
							/>

							<Button
								type="submit"
								size="lg"
								loading={isSubmitting}
								fullWidth
								gradient={{ from: "#e91e63", to: "#f06292" }}
								variant="gradient"
								radius="md"
								mt="md"
							>
								{isSubmitting ? "Submitting..." : "Submit RSVP"}
							</Button>
						</Stack>
					</form>

					<Text size="xs" ta="center" c="dimmed" mt="md">
						Questions? Contact us at wedding@example.com
					</Text>
				</Stack>
			</Card>
		</Container>
	);
}
