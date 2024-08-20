import { motion } from "framer-motion"

import { bgSelectorStyles } from "./BgSelector.css"

export const BgSelector = () => (
	<motion.div layoutId="activeMenuItem" className={bgSelectorStyles.block} />
)
