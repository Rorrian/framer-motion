import { AnimatePresence, Reorder } from "framer-motion"
import { Dispatch, SetStateAction } from "react"

import { listStyles } from "./List.css"

type ListItemType = {
	icon: JSX.Element
	text: string
}

interface ListItemProps {
	item: ListItemType
	onDoubleClick: () => void
}

interface ListProps {
	items: ListItemType[]
	setItems: Dispatch<SetStateAction<ListItemType[]>>
}

const variants = {
	initial: {
		opacity: 0,
		y: 20,
	},
	animate: {
		opacity: 1,
		y: 0,
	},
	exit: {
		opacity: 0,
		y: -20,
	},
}

const ListItem = ({ item, onDoubleClick }: ListItemProps) => {
	return (
		<Reorder.Item
			value={item}
			whileDrag={{
				scale: 1.1,
				boxShadow:
					"rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
			}}
			className={listStyles.item}
			{...variants}
			onDoubleClick={onDoubleClick}
		>
			{item.icon}
			<span>{item.text}</span>
		</Reorder.Item>
	)
}

export const List = ({ items, setItems }: ListProps) => {
	return (
		<Reorder.Group
			// Может быть ul, ol или другими дефолтными элементами
			as="ol"
			axis="y"
			values={items}
			onReorder={setItems}
			className={listStyles.list}
		>
			<AnimatePresence initial={false}>
				{items.map((item, i) => (
					<ListItem
						key={item.text}
						item={item}
						onDoubleClick={() => setItems(items.filter(el => item !== el))}
					/>
				))}
			</AnimatePresence>
		</Reorder.Group>
	)
}
