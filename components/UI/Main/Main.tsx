"use client"

import clsx from "clsx"

import { Title } from "@/components/UI/Title/Title"
import MoonIcon from "@/public/icons/moon.svg"
import SunIcon from "@/public/icons/sun.svg"
import { useThemeStore } from "@/store/useThemeStore"
import { darkTheme, lightTheme } from "@/theme/theme.css"

import { mainStyles } from "./Main.css"

export default function Main({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	const { isDarkMode, toggleTheme } = useThemeStore()

	return (
		<main
			className={clsx(mainStyles.main, isDarkMode ? darkTheme : lightTheme)}
		>
			<header className={mainStyles.header}>
				<Title headingType="h1">Framer Motion</Title>

				<button
					aria-label="Toggle theme"
					className={mainStyles.button}
					onClick={toggleTheme}
				>
					<MoonIcon className={mainStyles.icon({ isShow: isDarkMode })} />
					<SunIcon className={mainStyles.icon({ isShow: !isDarkMode })} />
				</button>
			</header>

			{children}
		</main>
	)
}
