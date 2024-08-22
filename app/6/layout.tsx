import type { Metadata } from "next"

import "../../styles/index.scss"

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
			<body>{children}</body>
		</html>
	)
}
