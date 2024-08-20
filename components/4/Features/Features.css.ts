import { style } from "@vanilla-extract/css"

const list = style(
	{
		display: "flex",
		columnGap: 30,
	},
	"list"
)

const item = style(
	{
		padding: 20,
		borderRadius: 15,
		height: "min-content",

		selectors: {
			"&&:first-child": {
				border: "1px solid #cc0",
			},
			"&&:nth-child(2)": {
				border: "1px solid #c0c",
				marginTop: "30px",
			},
			"&&:last-child": {
				border: "1px solid #0cc",
				marginTop: "60px",
			},
		},
	},
	"item"
)

export const featuresStyles = {
	list,
	item,
}
