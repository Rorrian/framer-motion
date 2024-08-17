"use client"

import { Collapsible } from "@/components/second/Collapsible"
import { Filter } from "@/components/second/Filter/Filter"
import { Title } from "@/components/UI/Title/Title"

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
		category: "fruits",
		title: "Apple",
	},

	{
		category: "fruits",
		title: "Orange",
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

export default function BasePage() {
	return (
		<>
			<Title headingType="h2">Show/hide elements</Title>

			<Collapsible title="Toggle content">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque optio
				molestiae impedit voluptate. Veritatis delectus reprehenderit, quisquam
				non repellat repudiandae!
			</Collapsible>

			<Filter data={mockData} />
		</>
	)
}