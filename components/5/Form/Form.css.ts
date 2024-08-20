import { style } from "@vanilla-extract/css"

const form = style(
	{
		display: "flex",
		alignItems: "center",
		justifyItems: "center",
		columnGap: "10px",
	},
	"form"
)

const input = style(
	{
		width: "200px",
		padding: 10,
		borderRadius: 15,
		border: "2px solid #ccc",

		backgroundColor: "#fff",
	},
	"input"
)

const button = style(
	{
		display: "flex",
		alignItems: "center",
		justifyItems: "center",
		columnGap: "5px",

		padding: 10,
		borderRadius: 15,
		backgroundColor: "#ccc",

		cursor: "pointer",
	},
	"button"
)

export const formStyles = {
	form,
	input,
	button,
}
