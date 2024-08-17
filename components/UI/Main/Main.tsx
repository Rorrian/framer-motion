"use client"

import clsx from "clsx"

import { homeStyles } from "@/app/Home.css"
import { Title } from "@/components/UI/Title/Title"
import MoonIcon from "@/public/icons/moon.svg"
import SunIcon from "@/public/icons/sun.svg"
import { useThemeStore } from "@/store/useThemeStore"
import { darkTheme, lightTheme } from "@/theme/theme.css"

export default function Main({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	const { isDarkMode, toggleTheme } = useThemeStore()

	return (
		<main
			className={clsx(homeStyles.main, isDarkMode ? darkTheme : lightTheme)}
		>
			<header className={homeStyles.header}>
				<Title headingType="h1">Framer Motion</Title>

				<button
					aria-label="Toggle theme"
					className={homeStyles.button}
					onClick={toggleTheme}
				>
					<MoonIcon className={homeStyles.icon({ isShow: isDarkMode })} />
					<SunIcon className={homeStyles.icon({ isShow: !isDarkMode })} />
				</button>
			</header>

			{children}
		</main>
	)
}
