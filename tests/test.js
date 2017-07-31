const assert = require('chai').assert;
const myApp = require('../src/main.js');

describe('Aritmetic or Geometric or Neither', () => {
	
	describe('Aritmetic', () => {
		it('should return Aritmetic for [5, 10, 15, 20]', () => {
			assert.equal(myApp.aritGeo([5, 10, 15, 20]), 'Aritmetic')
		});

		it('should return Aritmetic for [-2, -3, -4, -5]', () => {
			assert.equal(myApp.aritGeo([-2, -3, -4, -5]), 'Aritmetic')
		});

		it('should return Aritmetic for [0.5, 1, 1.5, 2, 2.5]', () => {
			assert.equal(myApp.aritGeo([0.5, 1, 1.5, 2, 2.5]), 'Aritmetic')
		});

		it('should return Aritmetic for [-0.3, -0.6, -0.9, -1.2]', () => {
			assert.equal(myApp.aritGeo([15, 10, 5, 0, -5, -10]), 'Aritmetic')
		});
	})

	describe('Geometric', () => {
		it('should return Geometric for [3, 6, 12, 24]', () => {
			assert.equal(myApp.aritGeo([3, 6, 12, 24]), 'Geometric')
		});

		it('should return Geometric for [-4, -8, -16, -32]', () => {
			assert.equal(myApp.aritGeo([-4, -8, -16, -32]), 'Geometric')
		});

		it('should return Geometric for [-128, 64, -32, 16, -8]', () => {
			assert.equal(myApp.aritGeo([-128, 64, -32, 16, -8]), 'Geometric')
		});

		it('should return Geometric for [2, 6, 18, 54]', () => {
			assert.equal(myApp.aritGeo([2, 6, 18, 54]), 'Geometric')
		});
	})

	describe('Neither Geometric or Aritmetic', () => {
		it('should return -1 for [3, 7, 8 ,10]', () => {
			assert.equal(myApp.aritGeo([3, 7, 8, 10]), -1)
		});

	})

	describe('Empty Array', () => {
		it('should return 0 for []', () => {
			assert.equal(myApp.aritGeo([]), 0)
		});

	})
})