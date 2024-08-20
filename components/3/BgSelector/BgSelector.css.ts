import { style } from "@vanilla-extract/css"

const block = style(
	{
		position: "absolute",
		top: "0",
		left: "0",

		width: "100%",
		height: "100%",
		backgroundColor: "rgb(255, 0, 0)",
		zIndex: 0,
	},
	"line"
)

export const bgSelectorStyles = {
	block,
}
