import { style } from "@vanilla-extract/css"

const block = style(
	{
		padding: 20,
		borderRadius: 15,
		backgroundColor: "#f1f1f1",
	},
	"block"
)

const img = style(
	{
		float: "right",
	},
	"img"
)

const text = style(
	{
		color: "#a59999",
	},
	"text"
)

export const heroStyles = {
	block,
	img,
	text,
}
