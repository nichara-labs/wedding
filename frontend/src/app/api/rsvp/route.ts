import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function POST(request: NextRequest) {
	try {
		const body = await request.json();

		// Validate required fields
		const { fullName, email, side } = body;

		if (!fullName || !email || !side) {
			return NextResponse.json(
				{
					error:
						"Missing required fields: fullName, email, and side are required",
				},
				{ status: 400 },
			);
		}

		// Email validation
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(email)) {
			return NextResponse.json(
				{ error: "Invalid email address" },
				{ status: 400 },
			);
		}

		// TODO: Replace this placeholder with actual database/backend logic
		// Examples of what you might want to do:
		// 1. Save to database (PostgreSQL, MongoDB, etc.)
		// 2. Send confirmation email to guest
		// 3. Send notification email to wedding couple
		// 4. Log analytics/tracking

		console.log("RSVP Submission:", {
			fullName,
			email,
			side,
			notes: body.notes || "",
			timestamp: new Date().toISOString(),
		});

		// Simulate processing time
		await new Promise((resolve) => setTimeout(resolve, 500));

		// For now, just return success
		return NextResponse.json({
			success: true,
			message: "RSVP submitted successfully",
			data: {
				fullName,
				email,
				side,
				submittedAt: new Date().toISOString(),
			},
		});
	} catch (error) {
		console.error("RSVP submission error:", error);
		return NextResponse.json(
			{ error: "Internal server error" },
			{ status: 500 },
		);
	}
}
