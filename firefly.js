const root = document.getElementById("root")
root.style.cursor = 'none'
window.addEventListener("mousemove" , (e)=>{
    let circle = Math.floor(Math.random() * 100) + 20
    
    // console.log(e.screenX , e.screenY)
    const span = document.createElement("span")
    span.style.backgroundColor = 'yellow'
    span.style.width = `${circle}px`
    span.style.height = `${circle}px`
    span.style.borderRadius = `${circle / 2}px`
    span.style.position = 'absolute'
    span.style.top = `${e.screenY * 0.7}px`
    span.style.left = `${e.screenX * 0.7}px`
    root.append(span)
    setTimeout(()=>{
        span.remove()
    }, 1000)
})