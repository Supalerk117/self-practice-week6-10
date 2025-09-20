function changeText(){
    let text = document.getElementById("div1-input").value
    document.getElementById("title").innerText = text[0].toUpperCase() + text.slice(1)
}


function changeTextColor(){
    document.getElementById("text-colored").style.color = document.getElementById("div2-input").value
}

const form = document.getElementById("div3-form")
form.addEventListener("submit", function(e) {
    e.preventDefault();
    lottery();
});
function lottery(){
    let randomNum = Math.floor(Math.random()*10)+1
    let inputNum = Number(document.getElementById("div3-input").value)
    let msg = ""
    let color = ""
    if (inputNum === randomNum) {
        msg = "Congratulations you win the lottery !"
        color = "green"
    }
    else{
        msg = `You lose the lottery , the number is ${randomNum}`
        color = "red"
    }
    const result = document.getElementById("result")
    result.innerHTML = msg
    result.style.background = color
    result.style.padding = "16px"
}


function changeTheme(){
    let themeNow = document.body.style.background
    if (themeNow === 'rgb(34, 34, 34)') {
        document.body.style.background = "white"
    }
    else{
        document.body.style.background = "rgb(34, 34, 34)"
    }
}