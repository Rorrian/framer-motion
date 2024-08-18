import { style } from "@vanilla-extract/css"

const line = style(
	{
		position: "absolute",
		bottom: "-6px",
		left: "5px",

		width: "calc(100% - 10px)",
		height: "4px",
		backgroundColor: "rgb(255, 0, 0)",
	},
	"line"
)

export const activeLineStyles = {
	line,
}
