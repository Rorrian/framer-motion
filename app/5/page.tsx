"use client"

import CloseIcon from "@/public/icons/close.svg"
import CrossIcon from "@/public/icons/cross.svg"
import DeleteIcon from "@/public/icons/delete.svg"
import MoonIcon from "@/public/icons/moon.svg"
import SunIcon from "@/public/icons/sun.svg"

import { InteractiveList } from "@/components/5/InteractiveList"
import { Title } from "@/components/UI/Title/Title"

const items = [
	{
		icon: <CloseIcon />,
		text: "Text 1",
	},
	{
		icon: <DeleteIcon />,
		text: "Text 2",
	},
	{
		icon: <MoonIcon />,
		text: "Text 3",
	},
	{
		icon: <CrossIcon />,
		text: "Text4",
	},
	{
		icon: <SunIcon />,
		text: "Text 5",
	},
]

export default function FifthPage() {
	return (
		<>
			<Title headingType="h2">Reorder list items (Drag & Drop)</Title>

			<InteractiveList initialItems={items} />
		</>
	)
}
