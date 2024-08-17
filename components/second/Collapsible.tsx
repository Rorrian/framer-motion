import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"

interface CollapsibleProps {
	title: string
	children: React.ReactNode
}

export const Collapsible = ({
	title = "click me",
	children,
}: CollapsibleProps) => {
	const [isVisible, setVisible] = useState(true)

	const handlerVisibility = () => setVisible(!isVisible)

	return (
		<div>
			<div
				onClick={handlerVisibility}
				style={{
					backgroundColor: "#ddd",
					width: 300,
					padding: "0.8rem 1.2rem",
				}}
			>
				{title}
			</div>

			<AnimatePresence
				// При загрузке страницы анимация отрабатывать не будет
				initial={false}
			>
				{isVisible && (
					<motion.div
						initial={{
							height: 0,
						}}
						animate={{
							height: "auto",
						}}
						exit={{
							height: 0,
						}}
						style={{
							overflow: "hidden",
							border: "1px solid #ddd",
						}}
						transition={{
							duration: 1.5,
						}}
					>
						<div
							style={{
								padding: "0.8rem 1.2rem",
								width: 300,
							}}
						>
							{children}
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	)
}
