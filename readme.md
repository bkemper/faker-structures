## Faker Structures

Compose data structures with fake data from [faker.js](https://github.com/marak/Faker.js/).  Similar to [custom generators](https://github.com/boo1ean/casual#define-custom-generators) from  [boo1ean/casual](https://github.com/boo1ean/casual).

```
$ npm install --save-dev faker faker-structures
```

### `.collection(shape)(length)`

Generate an array of objects.

```
import faker from 'faker'
import { collection } from 'faker-structures'

// define the structure
const userCollection = collection({
  id: faker.random.number,
  name: () => `${faker.name.firstName()} ${faker.name.lastName()}`
})

// generate a collection with three users
userCollection(3)
```

### `.record(key, structure)(length)`

Generates an object of objects.

```
import faker from 'faker'
import { record } from 'faker-structures'

// define the structure
const userRecord = record(faker.random.number, {
  firstName: faker.name.firstName,
  lastName: faker.name.lastName
})

// generate a record object with three users
userRecord(3)
```
