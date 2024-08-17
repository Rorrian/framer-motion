import { style } from "@vanilla-extract/css"

const button = style(
	{
		border: "none",
		outline: "none",
		padding: "12px 16px",
		backgroundColor: "#f1f1f1",
		cursor: "pointer",
	},
	"button"
)

export const buttonStyles = {
	button,
}
