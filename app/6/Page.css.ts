import { style } from "@vanilla-extract/css"

const section = style(
	{
		height: "100vh",
		padding: "3rem 1rem",
		color: "white",
	},
	"block"
)

const title = style(
	{
		color: "white",
	},
	"title"
)

export const pageStyles = {
	section,
	title,
}
