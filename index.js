const Breakfast = require('./models/breakfast')
const Lunch = require('./models/lunch')
const Dinner = require('./models/dinner')

// get control of terminal
const readline = require('readline')
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
})

// give instructions to user
rl.setPrompt(
	`\n\nWelcome to your favorite food ordering system!
Type 'exit' or 'quit' to close the terminal prompt. Ctl+C also works.
Breakfast 1,2,3 (allows ONLY multiple coffees (1,2,3,3,3))
Lunch 1,2,3 (allows ONLY multiple sides (1,2,2,2,3))
Dinner 1,2,3,4 (dessert (4) is necessary along with main (1) and side (2) - no multiples allowed)
For complete usage instructions please refer to the instructions document. \n\n`
)
// prompt for input
rl.prompt()
rl.on('line', (ui) => {
	// disect user input
	let trimmedUI = ui.trim()
	let uiArr = trimmedUI.split(' ')
	let len = uiArr.length
	// check if user wants to exit
	if (uiArr[0] == 'exit' || uiArr[0] == 'quit') {
		rl.close()
	}
	// check if breakfast or lunch passed
	else if (
		uiArr[0].toLowerCase() == 'breakfast' ||
		uiArr[0].toLowerCase() == 'lunch'
	) {
		// check for secondary argument
		if (len == 2) {
			// check if secondary argument can be split
			if (uiArr[1].includes(',')) {
				let choices = uiArr[1].split(',')
				if (choices.includes('1') && choices.includes('2')) {
					// sort user's choices and sum them to create object
					let numArr = choices.map(Number)
					numArr.sort((a, b) => a - b)
					let main = numArr.filter((x) => x == 1).length
					let side = numArr.filter((x) => x == 2).length
					let drink = numArr.filter((x) => x == 3).length
					if (uiArr[0].toLowerCase() == 'breakfast') {
						const breakfast = new Breakfast(main, side, drink)
					} else {
						const lunch = new Lunch(main, side, drink)
					}
				} else if (!choices.includes('1') && !choices.includes('2')) {
					console.log('Unable to process: Main and Side are missing')
				} else if (!choices.includes('1')) {
					console.log('Unable to process: Main is missing')
				} else if (!choices.includes('2')) {
					console.log('Unable to process: Side is missing')
				}
			}
			// secondary argument single digit
			else if (!uiArr[1].includes(',')) {
				if (uiArr[1] == '1') {
					console.log('Unable to process: Side is missing')
				} else if (uiArr[1] == '2') {
					console.log('Unable to process: Main is missing')
				} else {
					console.log('Unable to process: Main and Side are missing')
				}
			}
		}
		// no secondary argument
		else {
			console.log('Unable to process: Main and Side are missing')
		}
	}
	// check if dinner passed
	else if (uiArr[0].toLowerCase() == 'dinner') {
		// check for secondary argument
		if (len == 2) {
			// check if secondary argument can be split
			if (uiArr[1].includes(',')) {
				let choices = uiArr[1].split(',')
				if (
					choices.includes('1') &&
					choices.includes('2') &&
					choices.includes('4')
				) {
					// sort user's choices and sum them to create object
					let numArr = choices.map(Number)
					numArr.sort((a, b) => a - b)
					let main = numArr.filter((x) => x == 1).length
					let side = numArr.filter((x) => x == 2).length
					let drink = numArr.filter((x) => x == 3).length
					let dessert = numArr.filter((x) => x == 4).length
					const dinner = new Dinner(main, side, drink, dessert)
				} else if (
					!choices.includes('1') &&
					!choices.includes('2') &&
					!choices.includes('4')
				) {
					console.log('Unable to process: Main, Side, and Dessert are missing')
				} else if (!choices.includes('1') && !choices.includes('2')) {
					console.log('Unable to process: Main and Side are missing')
				} else if (!choices.includes('1') && !choices.includes('4')) {
					console.log('Unable to process: Main and Dessert are missing')
				} else if (!choices.includes('2') && !choices.includes('4')) {
					console.log('Unable to process: Side and Dessert are missing')
				} else if (!choices.includes('1')) {
					console.log('Unable to process: Main is missing')
				} else if (!choices.includes('2')) {
					console.log('Unable to process: Side is missing')
				} else if (!choices.includes('4')) {
					console.log('Unable to process: Dessert is missing')
				}
			}
			// secondary argument single digit
			else if (!uiArr[1].includes(',')) {
				if (uiArr[1] == '1') {
					console.log('Unable to process: Side and Dessert are missing')
				} else if (uiArr[1] == '2') {
					console.log('Unable to process: Main and Dessert missing')
				} else if (uiArr[1] == '4') {
					console.log('Unable to process: Main and Side are missing')
				} else {
					console.log('Unable to process: Main, Side, and Dessert are missing')
				}
			}
		}
		// no secondary argument
		else {
			console.log('Unable to process: Main, Side, and Dessert are missing')
		}
	} else {
		rl.setPrompt('')
		rl.prompt()
	}
})
