import { style } from "@vanilla-extract/css"

const block = style(
	{
		padding: 20,
		borderRadius: 15,
		backgroundColor: "#ccc",

		// Чтобы анимация не перекрывала другие элементы
		overflow: "hidden",
	},
	"block"
)

const link = style(
	{
		textAlign: "center",
		color: "red",
		backgroundColor: "white",
		padding: 20,
		borderRadius: 15,
		display: "block",
		width: "fit-content",
		margin: "0 auto",
	},
	"link"
)

export const footerStyles = {
	block,
	link,
}
