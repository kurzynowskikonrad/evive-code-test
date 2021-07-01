const Meal = require('./meal')

class Dinner extends Meal {
	constructor(steak, potatoes, wine, cake) {
		super(steak, potatoes, wine, cake)
		this.water = 1
		// report on object upon creation
		this.evaluate()
	}

	evaluate() {
		if (this.main > 1 || this.side > 1 || this.drink > 1 || this.dessert > 1) {
			console.log('Unable to process: Can not have multiples of anything')
		} else if (this.drink == 1) {
			console.log(`Steak, Potatoes, Wine, Water, Cake`)
		} else {
			console.log(`Steak, Potatoes, Water, Cake`)
		}
	}
}

module.exports = Dinner
