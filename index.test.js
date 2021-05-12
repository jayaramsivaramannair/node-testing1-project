const utils = require('./index')

describe('[Exercise 1] trimProperties', () => {
  const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
  const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }

  test('[1] returns an object with the properties trimmed', () => {
    // EXAMPLE
    const actual = utils.trimProperties(input)
    expect(actual).toEqual(expected)
    expect({}).toEqual({})
  })

  test('[2] returns a copy, leaving the original object intact', () => {
    const actual = utils.trimProperties(input)
    expect(actual).not.toEqual(input)
    expect(actual).toEqual(expected)
  })
})

describe('[Exercise 2] trimPropertiesMutation', () => {
  const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
  const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }

  test('[3] returns an object with the properties trimmed', () => {
    const actual = utils.trimPropertiesMutation(input)
    expect(actual).toEqual(expected)
  })

  test('[4] the object returned is the exact same one we passed in', () => {
    const actual = utils.trimPropertiesMutation(input)
    expect(input).toEqual(expected)
    expect(actual).toBe(input)
  })
})

describe('[Exercise 3] findLargestInteger', () => {
  let arrayIntObj = [{ integer: 945 }, { integer: 54 }, { integer: 780 }, { integer: 1 }]

  test('[5] returns the largest number in an array of objects { integer: 2 }', () => {
    const result = utils.findLargestInteger(arrayIntObj)
    expect(result).toBe(945)
  })
})

describe('[Exercise 4] Counter', () => {
  let counter
  beforeEach(() => {
    counter = new utils.Counter(3) // each test must start with a fresh counter
  })
  test('[6] the FIRST CALL of counter.countDown returns the initial count', () => {
    expect(counter.countDown()).toBe(3)
  })
  test('[7] the SECOND CALL of counter.countDown returns the initial count minus one', () => {
    expect(counter.countDown()).toBe(3) //Since the counter is reset before each count, 3 is returned when the count.countDown() is called
    expect(counter.countDown()).toBe(2) // initial count is reduced by 1 so 2 will now be returned
  })
  test('[8] the count eventually reaches zero but does not go below zero', () => {
    expect(counter.countDown()).toBe(3)
    expect(counter.countDown()).toBe(2)
    expect(counter.countDown()).toBe(1)
    expect(counter.countDown()).toBe(0)
    expect(counter.countDown()).toBe(0)
  })
})

describe('[Exercise 5] Seasons', () => {
  let seasons
  beforeEach(() => {
    seasons = new utils.Seasons() // each test must start with fresh seasons
  })
  test('[9] the FIRST call of seasons.next returns "summer"', () => {
    expect(seasons.next()).toEqual('summer')
  })

  test('[10] the SECOND call of seasons.next returns "fall"', () => {
    let testCalls = 2 - 1
    while (testCalls > 0) {
      seasons.next()
      testCalls -= 1
    }
    expect(seasons.next()).toEqual('fall')
  })
  test('[11] the THIRD call of seasons.next returns "winter"', () => {
    let testCalls = 3 - 1
    while (testCalls > 0) {
      seasons.next()
      testCalls -= 1
    }
    expect(seasons.next()).toEqual('winter')
  })
  test('[12] the FOURTH call of seasons.next returns "spring"', () => {
    let testCalls = 4 - 1
    while (testCalls > 0) {
      seasons.next()
      testCalls -= 1
    }
    expect(seasons.next()).toEqual('spring')
  })

  test('[13] the FIFTH call of seasons.next returns again "summer"', () => {
    let testCalls = 5 - 1
    while (testCalls > 0) {
      seasons.next()
      testCalls -= 1
    }
    expect(seasons.next()).toEqual('summer')
  })

  test('[14] the 40th call of seasons.next returns "spring"', () => {
    let testCalls = 40 - 1
    while (testCalls > 0) {
      seasons.next()
      testCalls -= 1
    }

    expect(seasons.next()).toEqual('spring')
  })
})

describe('[Exercise 6] Car', () => {
  let focus
  beforeEach(() => {
    focus = new utils.Car('focus', 20, 30) // each test must start with a fresh car
  })
  test('[15] driving the car returns the updated odometer', () => {
    expect(focus.drive(400)).toBe(400)
    expect(focus.drive(250)).toBe(600)
  })


  test('[16] driving the car uses gas', () => {
    expect(focus.currentFuel).toBe(20)
    expect(focus.drive(480)).toBe(480)
    expect(focus.currentFuel).toBe(4)
  })


  test('[17] refueling allows to keep driving', () => {
    expect(focus.drive(600)).toBe(600)
    expect(focus.currentFuel).toBe(0)
    expect(focus.drive(100)).toBe(600) //Odometer will not budge as the tank is empty
    expect(focus.refuel(15)).toBe(450)
    expect(focus.drive(300)).toBe(900) //Refueling the tank enables us to drive
  })

  test('[18] adding fuel to a full tank has no effect', () => {
    expect(focus.currentFuel).toBe(20)
    expect(focus.refuel(10)).toBe(600) //As the car has not been driven, the fuel level has not changed and so possible distance
    expect(focus.currentFuel).toBe(20) //As the car has not been driven so tank is full capacity thus refueling has no effect on the fuel level 

  })
})

describe('[Exercise 7] isEvenNumberAsync', () => {
  test('[19] resolves true if passed an even number', async () => {
    const result = await utils.isEvenNumberAsync(4)
    expect(result).toBe(true)
  })

  test('[20] resolves false if passed an odd number', async () => {
    const result = await utils.isEvenNumberAsync(3)
    expect(result).toBe(false)
  })


  test('[21] rejects an error with the message "number must be a number" if passed a non-number type', async () => {
    await expect(utils.isEvenNumberAsync('foo')).rejects.toEqual(TypeError("number must be a number"))
  })

  test('[22] rejects an error with the message "number must be a number" if passed NaN', async () => {
    await expect(utils.isEvenNumberAsync(NaN)).rejects.toEqual(TypeError("number must be a number"))
  })
})
