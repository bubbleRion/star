const root = document.getElementById("root")
let plow = 10
let isClick = true
let stopTrigger

root.addEventListener("click", ()=>{
    if(isClick){
        stopTrigger = setInterval(moveSnow, 1000)
        root.innerHTML = 'stop snow'
        isClick = false
    }
    else{
        clearInterval(stopTrigger)
        root.innerHTML = 'start snow'
        console.log("helllo")
        isClick = true
    }
})
function createSnow(){
    const snow = document.createElement("span")
    snow.style.backgroundColor = '#fff'
    snow.style.width = '5px'
    snow.style.height = '12px'
    snow.style.borderRadius = '5px'
    snow.style.position = 'absolute'
    return snow
}
function moveSnow(){
    let snow = createSnow()
    let x = 10
    let randomP = Math.floor(Math.random()*(parseInt(window.innerWidth)- 20))
    let count = 0
    setInterval(()=>{
        snow.style.top = `${x}px`
        snow.style.left = `${randomP}px`
        root.append(snow)
        x += 10
        count += 1
        if(x > (parseInt(window.innerHeight- 20))){
            snow.remove()
        }
    }, 100)
    
}
