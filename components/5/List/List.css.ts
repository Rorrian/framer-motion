import { style } from "@vanilla-extract/css"

const list = style(
	{
		display: "flex",
		flexDirection: "column",
		rowGap: "10px",
	},
	"list"
)

const item = style(
	{
		display: "grid",
		gridTemplateColumns: "40px auto",
		columnGap: "5px",
		alignItems: "center",
		justifyItems: "center",

		minWidth: "200px",
		padding: 10,
		borderRadius: 15,
		border: "2px solid #ccc",
	},
	"item"
)

export const listStyles = {
	list,
	item,
}
