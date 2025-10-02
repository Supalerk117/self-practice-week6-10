const quotes = []
let nextId = 1
function addQuote(content, author) {
  const prevLength = quotes.length
  const newQuote = { id: nextId++, content, author }
  if (quotes.push(newQuote) === prevLength + 1) return newQuote
  return undefined
}

function updateQuote(id, content, author) {
  const quote = quotes.find((q) => q.id === id)
  if (quote) {
    quote.content = content
    quote.author = author
  }
  return quote
}

function deleteQuote(id) {
  const index = quotes.findIndex((q) => q.id === id)
  if (index !== -1) {
    quotes.splice(index, 1)
  }
  return index
}

function getAllQuotes() {
  const currentQuotes = [...quotes]
  return currentQuotes
}

// 6. Test your functions below

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
