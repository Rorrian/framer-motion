import { motion } from "framer-motion"
import Image from "next/image"

import { MTitle } from "@/components/UI/Title/Title"

import { heroStyles } from "./Hero.css"

const textAnimation = {
	hidden: {
		x: -100,
		opacity: 0,
	},
	visible: (custom: number) => ({
		x: 0,
		opacity: 1,
		transition: {
			delay: custom * 0.2,
		},
	}),
}

export const Hero = () => {
	return (
		// Одинаковый пул настроек анимаций блока передаем главному блоку
		// И указываем момент срабатывания анимации - whileInView(когда появляется в области видимости(+ при перезагрузке/открытии страницы))
		<motion.section
			className={heroStyles.block}
			initial="hidden"
			whileInView="visible"
		>
			<Image
				src={"/img.jpg"}
				alt=""
				width={200}
				height={300}
				className={heroStyles.img}
			/>

			<MTitle custom={1} variants={textAnimation} headingType="h2">
				Lorem ipsum dolor sit amet!
			</MTitle>

			<br />

			{/* Тут просто делаем компоненты motion и указываем варианты */}
			<motion.p custom={2} variants={textAnimation} className={heroStyles.text}>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi provident
				ipsam doloribus recusandae. Blanditiis deserunt quod labore neque unde
				soluta ducimus, ut, debitis numquam omnis iure, quo sint impedit
				commodi! Blanditiis deserunt!
			</motion.p>
			<br />
			<motion.p custom={3} variants={textAnimation} className={heroStyles.text}>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi provident
				ipsam doloribus recusandae. Blanditiis deserunt quod labore neque unde
				soluta ducimus, ut, debitis numquam omnis iure, quo sint impedit
				commodi!
			</motion.p>
		</motion.section>
	)
}
