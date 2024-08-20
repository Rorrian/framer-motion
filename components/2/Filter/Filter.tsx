import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"

import { Button } from "../../UI/Button/Button"
import { filterStyles } from "./Filter.css"

type FilterItem = {
	category: string
	title: string
}

interface FilterProps {
	data: FilterItem[]
}

export const Filter = ({ data }: FilterProps) => {
	const [cards, setCards] = useState<FilterItem[]>(
		data.filter(el => el.category === "cars")
	)

	const buttons = data.reduce<string[]>((acc, el) => {
		if (acc.includes(el.category)) return acc

		return [...acc, el.category]
	}, [])

	const handleFilter = (selector: string) => {
		setCards(data.filter(el => el.category === selector))
	}

	return (
		<div>
			<div>
				{buttons.map(btn => (
					<Button key={btn} text={btn} handleClick={() => handleFilter(btn)} />
				))}
			</div>

			<div className={filterStyles.cardsWrapper}>
				<AnimatePresence
					initial={false}
					// Сначала пропадут элементы кот. должны, только затем появятся другие
					mode="wait"
				>
					{cards.map(el => (
						<motion.div
							key={el.title}
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
			</div>
		</div>
	)
}
