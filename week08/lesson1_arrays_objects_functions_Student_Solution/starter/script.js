const quotes = [];
let nextId = 1;
function addQuote(content, author) {
  quotes.push({
    id: nextId,
    content: content,
    author: author,
  });
  nextId++;
  console.log("Add quote successfully !");
}

function deleteQuote(id) {
  if (!id) {
    console.log("Please specify id that you need to delete");
    return "";
  }
  let numid = parseInt(id);
  if (isNaN(numid)) {
    console.log("Please enter only number");
    return "";
  }
  if (!quotes.find((q) => q.id === numid)) {
    console.log(`id:${numid} does not exist`);
    return "";
  }
  const indexID = quotes.findIndex((q) => q.id === numid);
  quotes.splice(indexID, 1);
  console.log(`id:${id} Deleted successfully !`);
}

function updateQuote(id, content, author) {
  if (!id) {
    console.log("Please specify id that you need to update")
    return ''
  };
  if (!content || !author) {
    console.log("Please fill in all required fields");
    return ''
  }
  const numid = parseInt(id)
  if (isNaN(numid)) {
    console.log("Please enter only number");
    return ''
  }
  if (!quotes.find(q => q.id === numid)){
    console.log(`id:${numid} does not exist`);
    return '';
  }
  const indexID = quotes.findIndex(q => q.id === numid)
  quotes[indexID].content = content
  quotes[indexID].author = author
  console.log(`id:${id} Updated successfully !`);
}

function getAllQuotes() {
  return quotes;
}

// Test your functions below
// TODO: Add 3 quotes using addQuote()
addQuote("Come as you are", "Nirvana");
addQuote("Creep", "Radiohead");
addQuote("Plastic Beach", "Gorillaz");
// TODO: Delete 1 quote using deleteQuote()
deleteQuote(3);
// TODO: Update 1 quote using updateQuote()
updateQuote(1,"Faint","Linkin Park");
// TODO: Print all quotes using getAllQuotes()
console.log(getAllQuotes());

document.getElementById("quote-list").innerText = JSON.stringify(getAllQuotes())