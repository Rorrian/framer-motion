import { motion } from "framer-motion"

import { activeLineStyles } from "./ActiveLine.css"

export const ActiveLine = () => {
	return (
		<motion.div
			className={activeLineStyles.line}
			// нужно указать любую уникальную строку
			layoutId="activeItem"
		/>
	)
}
