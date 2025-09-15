"use client";

import { Button } from "@mantine/core";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import ArrowButton from "./ArrowButton";
import { slides } from "./slides";

export default function Slideshow() {
	const [currentSlide, setCurrentSlide] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentSlide((prev) => (prev + 1) % slides.length);
		}, 8000);
		return () => clearInterval(interval);
	}, []);

	const prevSlide = () =>
		setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
	const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);

	return (
		<div
			style={{
				position: "relative",
				overflow: "hidden",
				background: "linear-gradient(to bottom, #fdf6f0, #fbe9e7)", // soft peach-orange gradient
				minHeight: "100vh",
			}}
		>
			<div className="slide-wrapper">
				<AnimatePresence mode="wait">
					<motion.div
						key={slides[currentSlide].id}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 1 }}
					>
						{slides[currentSlide].content}
					</motion.div>
				</AnimatePresence>
			</div>
			<ArrowButton direction="left" onClick={prevSlide} />
			<ArrowButton direction="right" onClick={nextSlide} />
			<div
				style={{
					position: "fixed",
					bottom: 100,
					left: "50%",
					transform: "translateX(-50%)",
					zIndex: 50,
					textAlign: "center",
				}}
			>
				<Button
					size="xl"
					radius="xl"
					variant="filled"
					style={{
						fontSize: "1.5rem",
						padding: "1rem 2rem",
						backgroundColor: "#1A1A40", // red background
						color: "#fff",
					}}
				>
					RVSP
				</Button>
				<p style={{ marginTop: "1rem", fontSize: "1.2rem", lineHeight: 1.5 }}>
					Jan. 10, 2026 · 12:00 PM <br />
					The Ritz-Carlton, Millenia Singapore
				</p>
			</div>
		</div>
	);
}
