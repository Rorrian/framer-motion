import { style } from "@vanilla-extract/css"

const cardsWrapper = style(
	{
		overflow: "hidden",
		maxWidth: 400,
	},
	"cardsWrapper"
)

const card = style(
	{
		float: "left",
		backgroundColor: "#2196f3",
		color: "#fff",
		width: "100px",
		lineHeight: "100px",
		textAlign: "center",
		margin: "2px",
	},
	"card"
)

export const filterStyles = {
	cardsWrapper,
	card,
}
