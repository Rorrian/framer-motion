import { useState } from "react"

import { Form } from "./Form/Form"
import { List } from "./List/List"

export type ListItemType = {
	icon: JSX.Element
	text: string
}

interface ListProps {
	initialItems: ListItemType[]
}

export const InteractiveList = ({ initialItems }: ListProps) => {
	const [items, setItems] = useState(initialItems)

	return (
		<>
			<Form setItems={setItems} />

			<List items={items} setItems={setItems} />

			<i>P.S. try double-clicking to delete items</i>
		</>
	)
}
