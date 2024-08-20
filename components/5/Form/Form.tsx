import { motion } from "framer-motion"
import { Dispatch, SetStateAction, useState } from "react"

import { TextField } from "@/components/UI/InputBoxes/TextField"
import PlusIcon from "@/public/icons/plus.svg"

import { ListItemType } from "../InteractiveList"
import { formStyles } from "./Form.css"

interface FormProps {
	setItems: Dispatch<SetStateAction<ListItemType[]>>
}

export const Form = ({ setItems }: FormProps) => {
	const [inputValue, setInputValue] = useState("")

	const handleAddItem = (e: React.FormEvent) => {
		e.preventDefault()

		if (inputValue.trim()) {
			setItems(prevItems => [
				...prevItems,
				{
					icon: <PlusIcon />,
					text: inputValue,
				},
			])

			setInputValue("")
		}
	}
	return (
		<form onSubmit={handleAddItem} className={formStyles.form}>
			<TextField
				value={inputValue}
				onChange={e => setInputValue(e.target.value)}
				className={formStyles.input}
			/>
			<motion.button
				whileHover={{
					scale: 1.1,
				}}
				className={formStyles.button}
				type="submit"
			>
				<PlusIcon />
				<span>Add</span>
			</motion.button>
		</form>
	)
}
