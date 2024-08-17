"use client"

import { motion } from "framer-motion"

import Link from "next/link"

export default function Home() {
	const listVariants = {
		hidden: (i: number) => ({
			opacity: 0,
			y: 100,
		}),
		visible: (i: number) => ({
			opacity: 1,
			y: 0,
			transition: {
				delay: i * 0.5,
			},
		}),
	}

	const items = [
		{
			url: "base",
			name: "Base",
		},
		{
			url: "/second",
			name: "Show/hide elements",
		},
		{
			url: "/third",
			name: "Magic of Animation",
		},
	]

	return (
		<div>
			<ul>
				{items.map((el, i) => (
					<motion.li
						key={el.name}
						variants={listVariants}
						initial="hidden"
						animate="visible"
						custom={i}
					>
						<Link href={el.url}>{el.name}</Link>
					</motion.li>
				))}
			</ul>
		</div>
	)
}
