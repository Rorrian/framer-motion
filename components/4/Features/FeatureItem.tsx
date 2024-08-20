import { motion } from "framer-motion"
import { forwardRef, LegacyRef } from "react"

import { MTitle } from "@/components/UI/Title/Title"

import { featuresStyles } from "./Features.css"

interface FeatureItemProps {
	title: string
	text: string
	extraText?: string
}

export const FeatureItem = forwardRef(
	(
		{ title, text, extraText }: FeatureItemProps,
		ref: LegacyRef<HTMLLIElement> | undefined
	) => {
		return (
			<motion.li key={title} ref={ref} className={featuresStyles.item}>
				<MTitle headingType="h4">{title}</MTitle>
				<br />
				<p>{text}</p>
				{extraText && <p>{extraText}</p>}
			</motion.li>
		)
	}
)

export const MFeatureItem = motion(FeatureItem)
