export const enum ItemType {
	Pros = "pros",
	Cons = "cons",
}

export interface Item {
	id: string
	name: string
	weight: number
	type: ItemType
}
