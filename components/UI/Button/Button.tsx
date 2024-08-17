import { HTMLMotionProps, motion } from "framer-motion"
import { ComponentPropsWithoutRef } from "react"

import { buttonStyles } from "./Button.css"

export type ButtonProps = {
	text: string
	handleClick: () => void
} & ComponentPropsWithoutRef<"button"> &
	HTMLMotionProps<"button">

export const Button = ({ text, handleClick, ...props }: ButtonProps) => (
	<motion.button
		className={buttonStyles.button}
		{...props}
		whileHover={{
			backgroundColor: "#ddd",
		}}
		whileTap={{
			backgroundColor: "#ccc",
		}}
		onClick={handleClick}
	>
		{text}
	</motion.button>
)
