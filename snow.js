const root = document.getElementById("root")

function createSnow(){
    let randomX = Math.random() * document.body.clientWidth
    let snow = 40
    const div = document.createElement("div")
    div.style.width = '5px'
    div.style.height = '20px'
    div.style.borderRadius = '2px'
    div.style.backgroundColor = '#fff'
    div.style.position = 'absolute'     
    div.style.left = `${randomX}px`
    root.appendChild(div)
    setInterval(()=>{
        snow += 20
        div.style.top = `${snow}px`
    }, 100)
    setTimeout(()=>{
        div.remove()
    }, 3500)
}

setInterval(()=>{
    createSnow()
}, 1000)

