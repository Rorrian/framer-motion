import { style } from "@vanilla-extract/css"
import { recipe } from "@vanilla-extract/recipes"

import {
	flexCentered,
	flexColumn,
	flexRow,
	responsiveStyle,
} from "@/styles/shared.css"
import { vars } from "@/theme/theme.css"

const main = style(
	[
		flexColumn,
		{
			alignItems: "center",

			position: "relative",
			minHeight: "100vh",
			width: "100%",
			rowGap: "50px",
			padding: "32px 48px 0px",
			transition: "background-image 0.3s ease-in-out",

			selectors: {
				"&&:before": {
					content: "",
					position: "absolute",
					inset: 0,

					backgroundImage: vars.themeVariables.pageBackground,
					backgroundSize: "cover",
					backgroundPosition: "center",
					backgroundRepeat: "no-repeat",
					zIndex: "-1",
				},
			},
		},
		responsiveStyle({
			tablet: {
				rowGap: "32px",
				padding: "32px 40px 32px",
			},
			mobile: {
				rowGap: "16px",
				padding: "24px 40px 28px 24px",
			},
		}),
	],
	"main"
)

const header = style([flexRow, flexCentered], "header")

const button = style(
	{
		background: "transparent",
		cursor: "pointer",
	},
	"button"
)

const icon = recipe(
	{
		base: {
			position: "absolute",
			top: "10px",
			right: "10px",

			opacity: 0,
			transition: "opacity 0.3s ease-in-out",
		},
		variants: {
			isShow: {
				true: {
					opacity: 1,
				},
			},
		},
		defaultVariants: {
			isShow: true,
		},
	},
	"icon"
)

export const homeStyles = {
	main,
	header,
	button,
	icon,
}
