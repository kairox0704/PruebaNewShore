export interface Member {
	name: string
	lastName: string
	species: string
	gender: string
	house: string
	dateOfBirth: string
	yearOfBirth: number
	ancestry: string
	eyeColour: string
	hairColour: string
	wand: {
		wood: string
		core: string
		length: number
	}
	patronus: string
	hogwartsstudent: boolean
	hogwartsstaff: boolean
	actor: string
	alive: boolean
	image: string
}