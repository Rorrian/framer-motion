import { motion } from "framer-motion"
import { MouseEventHandler, useState } from "react"

import { ActiveLine } from "../ActiveLine/ActiveLine"
import { menuStyles } from "./Menu.css"

interface MenuItemProps {
	item: string
	isSelected: boolean
	handleClick: MouseEventHandler<HTMLDivElement>
}

interface MenuProps {
	data: string[]
}

const MenuItem = ({ item, isSelected, handleClick }: MenuItemProps) => {
	return (
		<motion.div
			className={menuStyles.menuItem}
			initial={{
				color: "#000",
			}}
			animate={{
				color: isSelected ? "rgb(255, 0, 0)" : "#000",
			}}
			onClick={handleClick}
		>
			{isSelected && <ActiveLine />}
			{item}
		</motion.div>
	)
}

export const Menu = ({ data }: MenuProps) => {
	const [activeIndex, setActiveIndex] = useState(0)

	return (
		<div className={menuStyles.menu}>
			{data.map((item, i) => (
				<MenuItem
					key={item}
					item={item}
					isSelected={activeIndex === i}
					handleClick={() => setActiveIndex(i)}
				/>
			))}
		</div>
	)
}
