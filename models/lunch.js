const Meal = require('./meal')

class Lunch extends Meal {
	constructor(sandwich, chips, soda) {
		super(sandwich, chips, soda)
		if (soda == 0) {
			this.water = 1
		}
		// report on object upon creation
		this.evaluate()
	}

	evaluate() {
		if (this.main > 1 || this.drink > 1) {
			console.log('Unable to process: Can only have multiple Sides')
		} else if (this.side > 1 && this.drink) {
			console.log(`Sandwich, Chips (${this.side}), Soda`)
		} else if (this.side > 1 && !this.drink) {
			console.log(`Sandwich, Chips (${this.side}), Water`)
		} else if (this.side == 1 && this.drink) {
			console.log(`Sandwich, Chips, Soda`)
		} else {
			console.log(`Sandwich, Chips, Water`)
		}
	}
}

module.exports = Lunch
