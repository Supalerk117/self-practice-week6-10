const inp = document.getElementById("keyInput")
const display = document.getElementById("keyLog")

inp.addEventListener('keydown',(e) => {
    const p = document.createElement('p')
    if (e.key === 'Enter') {
            p.style.color = 'blue'
        }
    p.innerText = `You pressed: ${e.key}`
    display.appendChild(p)
})