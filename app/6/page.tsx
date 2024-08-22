"use client"

import { motion, useScroll, useTransform } from "framer-motion"

import { Header } from "@/components/6/Header/Header"
import { Title } from "@/components/UI/Title/Title"

import { pageStyles } from "./Page.css"

export default function SixthPage() {
	// MotionValue - вычисляемое значение. В данном случае его не создаем через хук useMotionValue(), а получаем из хука useScroll()(ранее useViewportScroll())
	const { scrollY } = useScroll()

	const offsetY = [0, 300]
	const marginTop = useTransform(scrollY, offsetY, offsetY)

	return (
		<div
			style={{
				position: "relative",
			}}
		>
			<Header offsetY={offsetY} scrollY={scrollY} />

			<motion.div
				className={pageStyles.section}
				style={{
					backgroundColor: "maroon",
					marginTop,
				}}
			>
				<Title headingType="h3" titleClassName={pageStyles.title}>
					Hey! It's Sticky Menu
				</Title>
				<br />
				<p>Start editing to see some magic happen :)</p>
			</motion.div>

			<div
				className={pageStyles.section}
				style={{
					backgroundColor: "peru",
				}}
			>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit quas
				dolorem aliquam obcaecati quasi, explicabo consectetur. Laudantium at
				unde itaque, enim ullam doloribus odio, odit hic temporibus fuga
				inventore. Facere?
			</div>
		</div>
	)
}
