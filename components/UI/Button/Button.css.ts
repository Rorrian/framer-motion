import { style } from "@vanilla-extract/css"

const button = style(
	{
		position: "relative",

		border: "none",
		outline: "none",
		padding: "12px 16px",
		backgroundColor: "#f1f1f1",
		cursor: "pointer",
	},
	"button"
)

const btnTransparent = style(
	{
		backgroundColor: "transparent",
	},
	"btnTransparent"
)

const text = style(
	{
		position: "relative",
	},
	"text"
)

export const buttonStyles = {
	button,
	btnTransparent,
	text,
}
