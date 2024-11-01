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
			url: "/2",
			name: "Show/hide elements",
		},
		{
			url: "/3",
			name: "Magic of Animation",
		},
		{
			url: "/4",
			name: "Dynamically trigger animations by viewport",
		},
		{
			url: "/5",
			name: "Reorder list items (Drag & Drop)",
		},
		{
			url: "/6",
			name: "Sticky Menu",
		},
	]

	return (
		<div>
			<ol
				style={{
					listStyleType: "auto",
					marginTop: "3rem",
					marginLeft: "5rem",
				}}
			>
				{items.map((el, i) => (
					<motion.li
						key={el.name}
						variants={listVariants}
						initial="hidden"
						animate="visible"
						custom={i}
						style={{
							marginBottom: "1rem",
						}}
					>
						<Link href={el.url}>{el.name}</Link>
					</motion.li>
				))}
			</ol>
		</div>
	)
}
