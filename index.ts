import faker from 'faker'

const fake = (shape: object): object => (
  Object.keys(shape).reduce(
    (accumulator, key) => ({ ...accumulator, [key]: shape[key]() }),
    {}
  )
)

export const collection = (shape: object) => (
  (length: number = faker.random.number()): object[] => (
    Array.from(
      Array(length),
      () => fake(shape)
    )
  )
)

export const record = (keyFn, shape: object) => (
  (length: number = faker.random.number()): object => (
    Array.from(Array(length)).reduce(
      (accumulator) => ({ ...accumulator, [`${keyFn()}`]: fake(shape) }),
      {}
    )
  )
)
