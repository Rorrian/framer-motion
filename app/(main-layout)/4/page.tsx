"use client"

import { Features } from "@/components/4/Features/Features"
import { Footer } from "@/components/4/Footer/Footer"
import { Hero } from "@/components/4/Hero/Hero"
import { Title } from "@/components/UI/Title/Title"

export default function FourthPage() {
	return (
		<>
			<Title headingType="h2">Magic of Animation</Title>

			<Hero />
			<br />

			<section
				style={{ padding: 20, borderRadius: 15, backgroundColor: "#ccc" }}
			>
				<Title headingType="h3">First block</Title>
				<br />
				<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum ut
					nostrum aut beatae, inventore illo molestiae temporibus ex soluta esse
					voluptates eum expedita rem nihil alias natus! Illo, cumque similique!
				</p>
				<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum ut
					nostrum aut beatae, inventore illo molestiae temporibus ex soluta esse
					voluptates eum expedita rem nihil alias natus! Illo, cumque
					similique!Lorem ipsum dolor, sit amet consectetur adipisicing elit.
					Illum ut nostrum aut beatae, inventore illo molestiae temporibus ex
					soluta esse voluptates eum expedita rem nihil alias natus! Illo,
					cumque similique!
				</p>
				<br />

				<p style={{ textAlign: "center" }}>Lorem ipsum!</p>
				<br />
			</section>

			<br />

			<Features />

			<br />

			<section
				style={{ padding: 20, borderRadius: 15, backgroundColor: "#f1f1f1" }}
			>
				<Title headingType="h3">Third block</Title>
				<br />
				<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum ut
					nostrum aut beatae, inventore illo molestiae temporibus ex soluta esse
					voluptates eum expedita rem nihil alias natus! Illo, cumque similique!
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum ut
					nostrum aut beatae, inventore illo molestiae temporibus ex soluta esse
					voluptates eum expedita rem nihil alias natus! Illo, cumque similique!
				</p>
				<br />
				<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum ut
					nostrum aut beatae, inventore illo molestiae temporibus ex soluta esse
					voluptates eum expedita rem nihil alias natus! Illo, cumque similique!
				</p>
			</section>

			<br />

			<Footer />
		</>
	)
}
