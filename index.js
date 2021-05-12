/**
 * [Exercise 1] trimProperties copies an object trimming its properties
 * @param {object} obj - an object with properties that are strings
 * @returns {object} - a copy of the object with strings trimmed
 *
 * EXAMPLE
 * trimProperties({ name: '  jane  ' }) // returns a new object { name: 'jane' }
 */
let obj = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
function trimProperties(obj) {
  // ✨ implement
  let newObj = JSON.parse(JSON.stringify(obj)) //Creates a copy of the object passed as parameter
  Object.keys(newObj).forEach((key) => { newObj[key] = newObj[key].trim() })
  return newObj;
}

console.log("Trimmed Object:", trimProperties(obj))
console.log("Original Object:", obj)

/**
 * [Exercise 2] trimPropertiesMutation trims in place the properties of an object
 * @param {object} obj - an object with properties that are strings
 * @returns {object} - the same object with strings trimmed
 *
 * EXAMPLE
 * trimPropertiesMutation({ name: '  jane  ' }) // returns the object mutated in place { name: 'jane' }
 **/
function trimPropertiesMutation(obj) {
  // ✨ implement
  Object.keys(obj).forEach((key) => { obj[key] = obj[key].trim() })
  return obj
}

console.log("Trimmed Object:", trimPropertiesMutation(obj))
console.log("Original Object:", obj)

/**
 * [Exercise 3] findLargestInteger finds the largest integer in an array of objects { integer: 1 }
 * @param {object[]} integers - an array of objects
 * @returns {number} - the largest integer
 *
 * EXAMPLE
 * findLargestInteger([{ integer: 1 }, { integer: 3 }, { integer: 2 }]) // returns 3
 */
let intArray = [{ integer: 945 }, { integer: 54 }, { integer: 780 }, { integer: 1 }]

function findLargestInteger(integers) {
  // ✨ implement
  let maxNum = 0;

  integers.forEach((element) => {
    for (const [key, value] of Object.entries(element)) {
      if (value > maxNum) {
        maxNum = value;
      }
    }
  })
  return maxNum;
}

console.log(findLargestInteger(intArray))

class Counter {
  /**
   * [Exercise 4A] Counter creates a counter
   * @param {number} initialNumber - the initial state of the count
   */
  constructor(initialNumber) {
    // ✨ initialize whatever properties are needed
    this.count = initialNumber
  }

  /**
   * [Exercise 4B] Counter.prototype.countDown counts down to zero
   * @returns {number} - the next count, does not go below zero
   *
   * EXAMPLE
   * const counter = new Counter(3)
   * counter.countDown() // returns 3
   * counter.countDown() // returns 2
   * counter.countDown() // returns 1
   * counter.countDown() // returns 0
   * counter.countDown() // returns 0
   */
  countDown() {
    // ✨ implement
    if (this.count > 0) {
      return this.count--;
    }
    return this.count;
  }
}

const newCountObj = new Counter(2)
console.log(newCountObj.countDown())
console.log(newCountObj.countDown())
console.log(newCountObj.countDown())
console.log(newCountObj.countDown())
console.log(newCountObj.countDown())

class Seasons {
  /**
   * [Exercise 5A] Seasons creates a seasons object
   */
  constructor() {
    // ✨ initialize whatever properties are needed
    this.nextSeason = "spring"
  }

  /**
   * [Exercise 5B] Seasons.prototype.next returns the next season
   * @returns {string} - the next season starting with "summer"
   *
   * EXAMPLE
   * const seasons = new Seasons()
   * seasons.next() // returns "summer"
   * seasons.next() // returns "fall"
   * seasons.next() // returns "winter"
   * seasons.next() // returns "spring"
   * seasons.next() // returns "summer"
   */
  next() {
    // ✨ implement
    switch (this.nextSeason) {
      case 'winter':
        this.nextSeason = 'spring';
        break;
      case 'spring':
        this.nextSeason = 'summer';
        break;
      case 'summer':
        this.nextSeason = 'fall';
        break;
      case 'fall':
        this.nextSeason = 'winter';
        break;
    }
    return this.nextSeason;
  }
}

const seasons = new Seasons()
console.log(seasons.next()) // returns 'summer'
console.log(seasons.next()) // returns 'fall'
console.log(seasons.next()) // returns 'winter'
console.log(seasons.next()) // returns 'spring'
console.log(seasons.next()) // returns 'summer'
console.log(seasons.next()) // returns 'fall'
console.log(seasons.next()) // returns 'winter'
console.log(seasons.next()) // returns 'spring'

class Car {
  /**
   * [Exercise 6A] Car creates a car object
   * @param {string} name - the name of the car
   * @param {number} tankSize - capacity of the gas tank in gallons
   * @param {number} mpg - miles the car can drive per gallon of gas
   */
  constructor(name, tankSize, mpg) {
    this.odometer = 0 // car initilizes with zero miles
    this.tank = tankSize // car initiazes full of gas
    // ✨ initialize whatever other properties are needed
    this.name = name
    this.mpg = mpg
    this.currentFuel = this.tank
  }

  /**
   * [Exercise 6B] Car.prototype.drive adds miles to the odometer and consumes fuel according to mpg
   * @param {string} distance - the distance we want the car to drive
   * @returns {number} - the updated odometer value
   *
   * EXAMPLE
   * const focus = new Car('focus', 20, 30)
   * focus.drive(100) // returns 100
   * focus.drive(100) // returns 200
   * focus.drive(100) // returns 300
   * focus.drive(200) // returns 500
   * focus.drive(200) // returns 600 (ran out of gas after 100 miles)
   */
  drive(distance) {
    // ✨ implement
    let possibleDistance = this.currentFuel * this.mpg

    if (distance <= possibleDistance) {

      this.odometer += distance // Increases odometer reading
      this.currentFuel -= distance / this.mpg // Reduces fuel level

    } else {

      this.odometer += possibleDistance
      this.currentFuel -= possibleDistance / this.mpg
    }

    return this.odometer
  }

  /**
   * [Exercise 6C] Adds gallons to the tank
   * @param {number} gallons - the gallons of fuel we want to put in the tank
   * @returns {number} - the miles that can be driven after refueling
   *
   * EXAMPLE
   * const focus = new Car('focus', 20, 30)
   * focus.drive(600) // returns 600
   * focus.drive(1) // returns 600 (no distance driven as tank is empty)
   * focus.refuel(99) // returns 600 (tank only holds 20)
   **/
  refuel(gallons) {
    // ✨ implement
    let fuelSpace = (this.tank === this.currentFuel) ? 0 : (this.tank - this.currentFuel) //Checks if there is any space for refuelling

    if (gallons > fuelSpace) { //Refueling is higher than tank capacity
      this.currentFuel = this.tank //Fills the tank to full capacity

    } else if (gallons <= fuelSpace) {
      this.currentFuel += gallons //Replenish the current tank level with gallons filled
    }

    return this.currentFuel * this.mpg
  }
}

/* Test for drive method in Car
const focus = new Car('focus', 20, 30)
console.log(focus.drive(100))
console.log(focus.drive(100))
console.log(focus.drive(100))
console.log(focus.drive(200))
console.log(focus.drive(200)) //Stops updating after 100 miles as the tank is empty
console.log(focus.drive(200)) // Empty tank. Car cannot be driven
*/

const focus = new Car('focus', 20, 30)
console.log(focus.drive(600)) // returns 600
console.log(focus.drive(1)) // returns 600 (no distance driven as tank is empty)

/**
 * [Exercise 7] Asynchronously resolves whether a number is even
 * @param {number} number - the number to test for evenness
 * @returns {promise} - resolves true if number even, false otherwise
 *
 * EXAMPLE
 * isEvenNumberAsync(2).then(result => {
 *    // result is true
 * })
 * isEvenNumberAsync(3).then(result => {
 *    // result is false
 * })
 * isEvenNumberAsync('foo').catch(error => {
 *    // error.message is "number must be a number"
 * })
 * isEvenNumberAsync(NaN).catch(error => {
 *    // error.message is "number must be a number"
 * })
 */

async function isEvenNumberAsync(number) {
  // ✨ implement
  if (Number.isNaN(number) || typeof (number) !== 'number') {
    throw TypeError("number must be a number")
  }

  const result = (number % 2 === 0) ? true : false
  return result
}

isEvenNumberAsync('foo').then((res) => { console.log("Response = ", res) }).catch((err) => console.log(err.message))

module.exports = {
  trimProperties,
  trimPropertiesMutation,
  findLargestInteger,
  isEvenNumberAsync,
  Counter,
  Seasons,
  Car,
}
