# Lesson 1: Arrays, Objects, and Functions

## Objective

Students will practice working with JavaScript arrays, objects, and functions by creating a quote manager.  
This lesson focuses only on **JavaScript logic** (no HTML or DOM yet).

---

## Tasks

### 1. Define Data

- Create an array named `quotes`.
- Each quote should be an object with the following properties:
  - `id` (number)
  - `content` (string)
  - `author` (string)

### 2. Create Functions

#### `addQuote(content, author)`

- Creates a new quote object with a unique `id`.
- Adds it to the `quotes` array.
- Returns the new quote if successfully added.

#### `deleteQuote(id)`

- Removes the quote with the given `id` from the array.
- Returns the index of the deleted quote, or `-1` if not found.

#### `updateQuote(id, content, author)`

- Updates the `content` and/or `author` of the quote with the given `id`.
- Returns the updated quote object, or `undefined` if not found.

#### `getAllQuotes()`

- Returns the current list of quotes as a new array (so the original cannot be mutated directly).

---

### 3. Write Test Cases

- Add 3 sample quotes using `addQuote`.
- Delete 1 quote using `deleteQuote`.
- Update 1 quote using `updateQuote`.
- Log all quotes using `getAllQuotes`.

**Example test script:**

```js
// Add 3 quotes
console.log(addQuote('Stay hungry, stay foolish.', 'Steve Jobs'))
console.log(addQuote('Do or do not. There is no try.', 'Yoda'))
console.log(
  addQuote('Simplicity is the ultimate sophistication.', 'Leonardo da Vinci')
)

// Delete 1 quote
console.log(deleteQuote(2))

// Update 1 quote
console.log(updateQuote(1, 'Stay hungry. Stay foolish.', 'Jobs'))

// Print all quotes
console.log(getAllQuotes())
```
