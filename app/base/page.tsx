"use client"

import { motion } from "framer-motion"

import { Title } from "@/components/UI/Title/Title"

export default function BasePage() {
	const pVariants = {
		hidden: {
			x: -1000,
			opacity: 0,
		},
		visible: {
			x: 0,
			opacity: 1,
		},
	}
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

	const items = ["Text 1", "Text 2", "Text 3"]

	return (
		<>
			<Title headingType="h2">Base</Title>

			<motion.img
				src="/icons/sun.svg"
				style={{ width: "150px", height: "150px" }}
				// initial={{  }}
				animate={{ rotate: 360 }}
				transition={{
					delay: 3,
					duration: 2,
					repeat: Infinity,
					repeatDelay: 1,
					repeatType: "reverse",
					type: "tween",
					ease: "easeInOut",
				}}
			/>

			<motion.p
				initial={"hidden"}
				animate={"visible"}
				transition={{
					delay: 1,
				}}
				variants={pVariants}
			>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed, iusto
				molestias. Dolorem molestiae est illum quidem non nobis amet cupiditate
				sunt laboriosam consectetur laudantium corrupti, odit nostrum, commodi
				totam obcaecati?
			</motion.p>

			<motion.a
				href="google.com"
				target="_blank"
				rel="noopener noreferrer"
				whileHover={{
					scale: 1.3,
					color: "red",
				}}
			>
				Let's google something!
			</motion.a>

			<ul>
				{items.map((el, i) => (
					<motion.li
						key={el}
						variants={listVariants}
						initial="hidden"
						animate="visible"
						custom={i}
					>
						{el}
					</motion.li>
				))}
			</ul>
		</>
	)
}
