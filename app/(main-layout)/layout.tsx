import type { Metadata } from "next"
import { Inter } from "next/font/google"

import Main from "@/components/UI/Main/Main"

import "../../styles/index.scss"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
	title: "Framer Motion Examples",
	description: "App learning Framer Motion",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Main>{children}</Main>
			</body>
		</html>
	)
}
