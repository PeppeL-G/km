function generateAges(){
	
	const names = `Alice Bob Charlie David Emma Frank Grace Hannah Ian Jack Kate Liam Mia Noah Olivia Paul Quinn Ruby Sam Tom Uma Victor Wendy Xavier Yara Zoe Aaron Bella Chris Daniel Eva Finn George Hazel Isaac Julia Kevin Leo Maya Nathan Oscar Piper Quinn Riley Sophia Theo Ursula Violet William Xander Yasmine Zara Adam Brooke Clara Dylan Ella Felix Gavin Holly Ivan Jade Kyle Lily Mason Nora Owen Paige Quentin Rose Stella Tyler Ulrich Vanessa Wyatt Ximena Yolanda Zane Amber Blake Chloe Derek Elise Fabian Gianna Henry Isla Jonah Kira Lucas Mila Nolan Opal Peter Quinn Raina Sean Tessa Uriel Valeria Walter Xavier Yvonne Zander Aiden Brianna Caleb Diana Ethan Faith Gabriel Harper Isaiah Jasmine Kylee Logan Madison Naomi Orion Penelope Quentin Rowan Savannah Trevor Unity Valentina Wesley Xenia Yvette Zuri`.split(` `)
	
	const ages = names.map(n => {
		
		const age = Math.floor(Math.random()*90)
		const type = age < 18 ? `barn` : (age < 67 ? `vuxen` : `pensionar`)
		
		return {
			name: n,
			age,
			type,
		}
		
	})
	
	console.log(JSON.stringify(ages))
	
}