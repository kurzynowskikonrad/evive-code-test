const { describe, it } = require('mocha')
const { expect } = require('chai')
const sinon = require('sinon')
const Meal = require('../models/meal')
const Breakfast = require('../models/breakfast')
const Lunch = require('../models/lunch')
const Dinner = require('../models/dinner')

let cls = sinon.spy(console, 'log')

describe('Test 0', () => {
	it('log should be: Abstract classes can not be instantiated.', () => {
		let meal = new Meal(1, 2, 3)
		meal.evaluate()
		expect(cls.calledWith('Abstract classes can not be instantiated.')).to.be
			.true
		expect(cls.calledWith('Method evaluate() must be implemented.')).to.be.true
	})
})

describe('Test 1', () => {
	it('log should be: Unable to process: Can only have multiple drinks', () => {
		let bf = new Breakfast(1, 2, 3)
		expect(cls.calledWith('Unable to process: Can only have multiple drinks'))
			.to.be.true
	})
})

describe('Test 2', () => {
	it('log should be: Eggs, Toast, Coffee (2)', () => {
		let bf = new Breakfast(1, 1, 2)
		expect(cls.calledWith('Eggs, Toast, Coffee (2)')).to.be.true
	})
})

describe('Test 3', () => {
	it('log should be: Eggs, Toast, Coffee', () => {
		let bf = new Breakfast(1, 1, 1)
		expect(cls.calledWith('Eggs, Toast, Coffee')).to.be.true
	})
})

describe('Test 4', () => {
	it('log should be: Eggs, Toast, Water', () => {
		let bf = new Breakfast(1, 1, 0)
		expect(cls.calledWith('Eggs, Toast, Water')).to.be.true
	})
})

describe('Test 5', () => {
	it('log should be: Unable to process: Can only have multiple Sides', () => {
		let bf = new Lunch(1, 1, 2)
		expect(cls.calledWith('Unable to process: Can only have multiple Sides')).to
			.be.true
	})
})

describe('Test 6', () => {
	it('log should be: Sandwich, Chips (2), Soda', () => {
		let bf = new Lunch(1, 2, 1)
		expect(cls.calledWith('Sandwich, Chips (2), Soda')).to.be.true
	})
})

describe('Test 7', () => {
	it('log should be: Sandwich, Chips (2), Water', () => {
		let bf = new Lunch(1, 2, 0)
		expect(cls.calledWith('Sandwich, Chips (2), Water')).to.be.true
	})
})

describe('Test 8', () => {
	it('log should be: Sandwich, Chips, Soda', () => {
		let bf = new Lunch(1, 1, 1)
		expect(cls.calledWith('Sandwich, Chips, Soda')).to.be.true
	})
})

describe('Test 9', () => {
	it('log should be: Sandwich, Chips, Water', () => {
		let bf = new Lunch(1, 1, 0)
		expect(cls.calledWith('Sandwich, Chips, Water')).to.be.true
	})
})

describe('Test 10', () => {
	it('log should be: Unable to process: Can not have multiples of anything', () => {
		let bf = new Dinner(1, 2, 1, 1)
		expect(
			cls.calledWith('Unable to process: Can not have multiples of anything')
		).to.be.true
	})
})

describe('Test 11', () => {
	it('log should be: Steak, Potatoes, Wine, Water, Cake', () => {
		let bf = new Dinner(1, 1, 1, 1)
		expect(cls.calledWith('Steak, Potatoes, Wine, Water, Cake')).to.be.true
	})
})

describe('Test 12', () => {
	it('log should be: Steak, Potatoes, Water, Cake', () => {
		let bf = new Dinner(1, 1, 0, 1)
		expect(cls.calledWith('Steak, Potatoes, Water, Cake')).to.be.true
	})
})
