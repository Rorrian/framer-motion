import { motion, MotionValue, useTransform } from "framer-motion"

import { MTitle } from "@/components/UI/Title/Title"

import { headerStyles } from "./Header.css"

interface HeaderProps {
	offsetY: number[]
	scrollY: MotionValue<number>
}

export const Header = ({ offsetY, scrollY }: HeaderProps) => {
	const heigthSizes = [250, 50]
	const imageSizes = [100, 35]
	const fontSizes = ["40px", "20px"]

	// 1 массив - текущее значение скролла
	// 2 массив - массив границ значений скролла, в пределах которых будут происходить изменения
	// 3 массив - целевые значения для изменения высоты/ширины/итд элементов
	const height = useTransform(scrollY, offsetY, heigthSizes)
	const imgWidth = useTransform(scrollY, offsetY, imageSizes)
	const fontSize = useTransform(scrollY, offsetY, fontSizes)
	const pOpacity = useTransform(scrollY, [20, 150], [1, 0])
	const btnOpacity = useTransform(scrollY, [135, 300], [0, 1])

	return (
		<motion.header
			className={headerStyles.header}
			style={{
				height,
			}}
		>
			<div className={headerStyles.flex}>
				<motion.img
					src="/icons/sun.svg"
					alt=""
					style={{
						width: imgWidth,
					}}
				/>

				<MTitle
					headingType="h2"
					style={{
						fontSize,
					}}
				>
					Hello!
				</MTitle>

				<motion.button
					className={headerStyles.button}
					style={{
						marginLeft: "auto",
						opacity: btnOpacity,
					}}
				>
					Click me!
				</motion.button>
			</div>

			<motion.p
				style={{
					marginTop: "30px",
					opacity: pOpacity,
				}}
			>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad odit porro
				quasi iusto fuga blanditiis, eius amet ea ab omnis voluptatem
				perferendis.
				<button
					className={headerStyles.button}
					style={{
						display: "block",
						marginTop: "10px",
					}}
				>
					Click me!
				</button>
			</motion.p>
		</motion.header>
	)
}
