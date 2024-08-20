import { motion } from "framer-motion"

import { MTitle } from "@/components/UI/Title/Title"

import { MFeatureItem } from "./FeatureItem"
import { featuresStyles } from "./Features.css"

const items = [
	{
		title: "Title 1",
		text: "Lorem ipsum dolor, sit amet consectetur dipisicing elit. Illum ut nostrum aut beatae!",
	},
	{
		title: "Title 2",
		text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum ut nostrum aut beatae, inventore illo molestiae temporibus ex soluta esse voluptates eum expedita!",
	},
	{
		title: "Title 3",
		text: "Lorem ipsum dolor!",
		extraText:
			"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum ut nostrum aut beatae, inventore!",
	},
]

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

const featureAnimation = {
	// Нужно использовать те же ключи, т.к. их я указала в параметрах для motion.section
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

export const Features = () => {
	return (
		<motion.section
			initial="hidden"
			whileInView="visible"
			// Аналогично Thresholds у IntersectionObserver
			// Как только блок на n-пикселей проскроллит данный блок - начнется анимация
			viewport={{
				amount: 0.2,
				// Анимация срабатывает только 1 раз
				once: true,
			}}
		>
			<MTitle custom={1} variants={textAnimation} headingType="h3">
				Second block
			</MTitle>
			<br />
			<motion.p custom={2} variants={textAnimation}>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi porro
				odio repellat iste quasi.
			</motion.p>

			<br />
			<br />
			<br />

			{/* Выносим(дублируем) сюда настройки анимации для фичей, чтобы их анимация начиналась в момент прокрутки страницы до них, а не до начала всего блока  */}
			<motion.ul
				className={featuresStyles.list}
				initial="hidden"
				whileInView="visible"
				viewport={{
					amount: 0.2,
				}}
			>
				{items.map((item, i) => (
					<MFeatureItem
						key={item.title}
						title={item.title}
						text={item.text}
						extraText={item.extraText}
						custom={i + 1}
						variants={featureAnimation}
					/>
				))}
			</motion.ul>
		</motion.section>
	)
}
