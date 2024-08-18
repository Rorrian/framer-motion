import { style } from "@vanilla-extract/css"

const menu = style(
	{
		display: "flex",
		backgroundColor: "#eee",
		padding: "1rem",
		borderRadius: "25px",
	},
	"menu"
)

const menuItem = style(
	{
		position: "relative",

		margin: "0 0.5rem",
		fontWeight: 900,

		cursor: "pointer",
	},
	"menuItem"
)

export const menuStyles = {
	menu,
	menuItem,
}
