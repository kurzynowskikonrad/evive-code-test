const Meal = require('./meal')

class Breakfast extends Meal {
	constructor(eggs, toast, coffee) {
		super(eggs, toast, coffee)
		if (coffee == 0) {
			this.water = 1
		}
		// report on object upon creation
		this.evaluate()
	}

	evaluate() {
		if (this.main > 1 || this.side > 1) {
			console.log('Unable to process: Can only have multiple drinks')
		} else if (this.drink > 1) {
			console.log(`Eggs, Toast, Coffee (${this.drink})`)
		} else if (this.drink == 1) {
			console.log(`Eggs, Toast, Coffee`)
		} else {
			console.log(`Eggs, Toast, Water`)
		}
	}
}

module.exports = Breakfast
