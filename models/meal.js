// abstract class in case we wanted to add brunch
class Meal {
	constructor(main, side, drink, dessert = 0) {
		if (this.constructor == Meal) {
			console.log('Abstract classes can not be instantiated.')
		}
		this.main = main
		this.side = side
		this.drink = drink
		this.water = 0
		this.dessert = dessert
	}

	evaluate() {
		console.log('Method evaluate() must be implemented.')
	}
}

module.exports = Meal
