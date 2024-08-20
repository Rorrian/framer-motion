import clsx from "clsx"
import { motion } from "framer-motion"
import React, { forwardRef } from "react"

import { titleStyles } from "./Title.css"

export type TitleHeadingType = "h1" | "h2" | "h3" | "h4"

interface TitleProps {
	titleClassName?: string
	headingType?: TitleHeadingType
	style?: React.CSSProperties
	children: string | React.ReactNode
	// ref?
}

// Для использование motion с кастомными компонентами, нужно добавить forwardRef и атрибут ref
export const Title: React.FC<TitleProps> = forwardRef(
	(
		{ children, titleClassName, headingType = "h3", ...props },
		ref: React.LegacyRef<HTMLHeadingElement> | undefined
	) => {
		const TitleComponent = headingType

		return (
			<TitleComponent
				ref={ref}
				className={clsx(
					titleStyles.title({ type: headingType }),
					titleClassName
				)}
				{...props}
			>
				{children}
			</TitleComponent>
		)
	}
)

// Использование motion с кастомными компонентами
export const MTitle = motion(Title)
