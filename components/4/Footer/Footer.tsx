import { motion } from "framer-motion"

import { MTitle } from "@/components/UI/Title/Title"

import { footerStyles } from "./Footer.css"

const textAnimation = {
	hidden: {
		y: -100,
		opacity: 0,
	},
	visible: (custom: number) => ({
		y: 0,
		opacity: 1,
		transition: {
			delay: custom * 0.2,
		},
	}),
}

const btnAnimation = {
	hidden: {
		y: 100,
		opacity: 0,
	},
	visible: {
		y: 0,
		opacity: 1,
	},
}

export const Footer = () => {
	return (
		<motion.section
			initial="hidden"
			whileInView="visible"
			viewport={{
				amount: 0.2,
			}}
			className={footerStyles.block}
		>
			<MTitle custom={1} variants={textAnimation} headingType="h3">
				Fourth block
			</MTitle>

			<br />

			<motion.p custom={2} variants={textAnimation}>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum ut
				nostrum aut beatae, inventore illo molestiae temporibus ex soluta esse
				voluptates eum expedita rem nihil alias natus! Illo, cumque similique!
			</motion.p>

			<br />

			<motion.a href="#" className={footerStyles.link} variants={btnAnimation}>
				Click this link!
			</motion.a>
		</motion.section>
	)
}
