"use client";

import { Group, Image as MantineImage } from "@mantine/core";
import { motion } from "framer-motion";
import SlideContent from "./SlideContent";

// --- reusable motion settings ---
const textMotion = {
	initial: { opacity: 0, y: 40 },
	animate: { opacity: 1, y: 0 },
	transition: { duration: 1.1 },
};

const imageMotion = {
	initial: { opacity: 0, y: 60, scale: 0.95 },
	animate: { opacity: 1, y: 0, scale: 1 },
	transition: { duration: 1.3 },
};

// --- slides ---
export const slides = [
	{
		id: 1,
		content: (
			<SlideContent>
				<motion.p
					className="slide-title"
					{...textMotion}
					transition={{ ...textMotion.transition, delay: 0.4 }}
				>
					CHANEL & NICHOLAS
				</motion.p>

				<motion.div
					className="slide-image-wrapper"
					{...imageMotion}
					transition={{ ...imageMotion.transition, delay: 0.6 }}
				>
					<MantineImage
						src="/couple-photo.jpg"
						alt="Chanel & Nicholas"
						width={400}
						height={300}
						radius="md"
						className="curly-lines-animation"
					/>
				</motion.div>

				<motion.p
					className="slide-subtitle"
					{...textMotion}
					transition={{ ...textMotion.transition, delay: 0.9 }}
				>
					We cordially invite you to our wedding celebration
					<br />
				</motion.p>
			</SlideContent>
		),
	},
	{
		id: 2,
		content: (
			<SlideContent>
				<motion.p
					className="slide-title"
					{...textMotion}
					transition={{ ...textMotion.transition, delay: 0.4 }}
				>
					THE DETAILS
				</motion.p>

				<Group className="slide-photo-group">
					{["/slide2_1.jpg", "/slide2_2.jpg", "/slide2_3.jpg"].map(
						(src, idx) => (
							<motion.div
								key={src}
								whileHover={{ scale: 1.05 }}
								transition={{ type: "spring", stiffness: 300 }}
							>
								<MantineImage
									src={src}
									alt={`Couple photo ${idx + 1}`}
									width={200}
									height={300}
									radius="md"
									className="curly-lines-animation"
								/>
							</motion.div>
						),
					)}
				</Group>
			</SlideContent>
		),
	},
];
