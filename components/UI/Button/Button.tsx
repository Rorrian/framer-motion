import { HTMLMotionProps, motion } from "framer-motion"
import { ComponentPropsWithoutRef } from "react"

import { BgSelector } from "@/components/3/BgSelector/BgSelector"
import clsx from "clsx"
import { buttonStyles } from "./Button.css"

export type ButtonProps = {
	text: string
	isSelected?: boolean
	withSelection?: boolean
	handleClick: () => void
} & ComponentPropsWithoutRef<"button"> &
	HTMLMotionProps<"button">

export const Button = ({
	text,
	isSelected,
	withSelection,
	handleClick,
	...props
}: ButtonProps) => (
	<motion.button
		layout
		className={clsx(
			buttonStyles.button,
			withSelection && buttonStyles.btnTransparent
		)}
		{...props}
		whileHover={{
			backgroundColor: "#ddd",
		}}
		whileTap={{
			backgroundColor: "#ccc",
		}}
		onClick={handleClick}
	>
		{isSelected && <BgSelector />}
		<motion.span
			className={buttonStyles.text}
			animate={{
				color: isSelected ? "#fff" : "#000",
			}}
		>
			{text}
		</motion.span>
	</motion.button>
)
