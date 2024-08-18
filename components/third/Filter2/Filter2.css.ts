import { style } from "@vanilla-extract/css"
const wrapper = style(
	{
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	},
	"wrapper"
)

const buttonsWrapper = style(
	{
		backgroundColor: "#f1f1f1",
	},
	"buttonsWrapper"
)

const cardsWrapper = style(
	{
		overflow: "hidden",
		maxWidth: 314,
		border: "1px solid #ccc",
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
	wrapper,
	buttonsWrapper,
	cardsWrapper,
	card,
}
