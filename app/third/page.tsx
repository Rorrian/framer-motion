"use client"

import { Filter2 } from "@/components/third/Filter2/Filter2"
import { Menu } from "@/components/third/Menu/Menu"
import { Title } from "@/components/UI/Title/Title"

const menuData = ["Short", "Very Looooooooong item", "Normal item"]

const mockData = [
	{
		category: "cars",
		title: "Audi",
	},
	{
		category: "cars",
		title: "Volvo",
	},
	{
		category: "cars",
		title: "Ford",
	},
	{
		category: "cars",
		title: "Lada",
	},

	{
		category: "fruits",
		title: "Apple",
	},
	{
		category: "fruits",
		title: "Orange",
	},
	{
		category: "fruits",
		title: "Banana",
	},

	{
		category: "animals",
		title: "Cats",
	},
	{
		category: "animals",
		title: "Dogs",
	},
]

export default function ThirdPage() {
	return (
		<>
			<Title headingType="h2">Magic of Animation</Title>

			<Menu data={menuData} />

			<Filter2 data={mockData} />
		</>
	)
}
