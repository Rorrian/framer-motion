import { style } from "@vanilla-extract/css"

const flex = style(
	{
		display: "flex",
		flexDirection: "row",
		gap: "1rem",
		alignItems: "center",
	},
	"flex"
)

const header = style(
	{
		position: "sticky",
		top: 0,

		backgroundColor: "#ccc",
		color: "white",
		padding: "0.25rem 1rem",
		width: "100%",
		overflow: "hidden",
	},
	"header"
)

const button = style(
	{
		backgroundColor: "rosybrown",
		outline: "none",
		border: "1px solid #ddd",
		borderRadius: "5px",
		padding: "5px 10px",
		color: "white",
		cursor: "pointer",
	},
	"button"
)

export const headerStyles = {
	flex,
	header,
	button,
}
