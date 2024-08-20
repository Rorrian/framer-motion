import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"

import { Button } from "../../UI/Button/Button"
import { filterStyles } from "./Filter2.css"

type FilterItem = {
	category: string
	title: string
}

interface FilterProps {
	data: FilterItem[]
}

export const Filter2 = ({ data }: FilterProps) => {
	const [selected, setSelected] = useState<number>(0)
	const [cards, setCards] = useState<FilterItem[]>(data)

	const buttons = data.reduce<string[]>(
		(acc, el) => {
			if (acc.includes(el.category)) return acc

			return [...acc, el.category]
		},
		["all"]
	)

	const handleFilter = (selector: string) => {
		if (selector === "all") return setCards(data)

		setCards(data.filter(el => el.category === selector))
	}

	return (
		<motion.div layout className={filterStyles.wrapper}>
			<motion.div className={filterStyles.buttonsWrapper}>
				{buttons.map((btn, i) => (
					<Button
						key={btn}
						isSelected={selected === i}
						text={btn}
						withSelection
						handleClick={() => {
							handleFilter(btn)
							setSelected(i)
						}}
					/>
				))}
			</motion.div>

			<motion.div
				// Появится динамическое изменение размеров контейнера
				layout
				className={filterStyles.cardsWrapper}
			>
				<AnimatePresence
					initial={false}
					// Сначала пропадут элементы кот. должны, только затем появятся другие
					mode="wait"
				>
					{cards.map(el => (
						<motion.div
							key={el.title}
							// Уберет деформацию карточек и изменит анимацию
							layout
							className={filterStyles.card}
							initial={{
								opacity: 0,
							}}
							animate={{
								opacity: 1,
							}}
							exit={{
								opacity: 0,
							}}
							transition={{
								duration: 1,
							}}
						>
							{el.title}
						</motion.div>
					))}
				</AnimatePresence>
			</motion.div>
		</motion.div>
	)
}
