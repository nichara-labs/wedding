"use client";

import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import { motion } from "framer-motion";

type ArrowButtonProps = {
	direction: "left" | "right";
	onClick: () => void;
};

export default function ArrowButton({ direction, onClick }: ArrowButtonProps) {
	return (
		<motion.div
			onClick={onClick}
			whileHover={{ scale: 1.2 }}
			className={`arrow-button ${direction}`}
		>
			{direction === "left" ? (
				<IconChevronLeft size={30} />
			) : (
				<IconChevronRight size={30} />
			)}
		</motion.div>
	);
}
