// helper function
async function fetchJSON(url) {
  const res = await fetch(url)
  return res.json()
}
function ById(variable){
  return document.getElementById(variable)
}



// Random Products Name
const result = ById("result")
function randomNum(amount) {
  return Math.floor(Math.random() * amount);
}

async function randomProductsName() {
  const data = await fetchJSON("https://dummyjson.com/products")
  const index = randomNum(data.products.length)
  result.innerHTML = `ID:<b> ${data.products[index].id} </b> Name:<b> ${data.products[index].title} </b>`;
}




// Get All Products
const products = ById("products");
async function getAllProducts() {
  const data = await fetchJSON("https://jsonplaceholder.typicode.com/posts")
  products.innerText = JSON.stringify(data, null, 2);
}




// Get One Product
const getProductForm = ById("getProductForm")
const product = ById("product")
getProductForm.addEventListener("submit", function (e) {
  e.preventDefault();
  getOneProduct();
});

function getOneProduct() {
  const input = ById("productInput").value;
  if (!input || isNaN(input)) {
    product.innerText = "Please enter only Number"
    return;
  }
  try {
  fetch(`https://jsonplaceholder.typicode.com/posts/${input}`)
  .then((res) => res.json())
  .then((data) => (product.innerText = JSON.stringify(data, null, 2)));
  } 
  catch (err){
    console.error(`error massge. : ${err}`);
  }
}




// Post Product
const postProductForm = ById("postProductForm")
const postRes = ById("postRes")
postProductForm.addEventListener("submit", function (e) {
  e.preventDefault();
  postProductByTitle();
});

async function postProductByTitle(){
const postUserId = ById("postUserId").value
const postTitle = ById("postTitle").value
const postBody = ById("postBody").value
  if (!postUserId || !postTitle || !postBody){
    alert("Please fill all fields"); return;
  }
  if (isNaN(parseInt(postUserId))){
    alert("Please enter only number in UserId field");return;
  }
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts" ,
      {
        method: "POST",
        headers: {"Content-Type": "application/json"} ,
        body: JSON.stringify({
          userId: postUserId,
          title: postTitle,
          body: postBody,
        })
      }
    )
    const data = await res.json()
    postRes.innerHTML = `<b>Post successfully !!!</b> ✅<br>
     userId: <b>${data.userId}</b><br>
     id: <b>${data.id}</b><br>
     title: <b>${data.title}</b><br>
     body: <b>${data.body}</b>`
  }
  catch (err){
    console.error(`error massge. : ${err}`);
    postRes.innerHTML = `<b>Error posting product !!!</b> ❤️‍🩹`
  }
}