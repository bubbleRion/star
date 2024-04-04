const root = document.getElementById("root")
        const inRoot = document.getElementById("inRoot")
        let size = 8
        
        function star(starSize , rotate=""){
            const div = document.createElement("div")
            const div2 = document.createElement("div")
            div.style.width = `${starSize}px`
            div.style.height = `${starSize}px`
            div2.style.width = `${starSize}px`
            div2.style.height = `${starSize}px`
            let randomColor1 = (Math.random() + 1) * 128
            let randomColor2 = (Math.random() + 1) * 128
            let randomColor3 = (Math.random() + 1) * 128
            div.style.backgroundColor = `rgb(${randomColor1}, ${randomColor2}, ${randomColor3})`
            div2.style.backgroundColor = `rgb(${randomColor1}, ${randomColor2}, ${randomColor3})`
            let randomX = Math.random() * document.documentElement.scrollWidth
            let randomY = Math.random() * document.documentElement.scrollHeight
            div2.style.transform = `rotate(${rotate}deg)`
            
            div.style.position = "absolute"
            div.style.left = `${randomX}px`
            div.style.top = `${randomY}px`
            div2.style.position = "absolute"
            div2.style.left = `${randomX}px`
            div2.style.top = `${randomY}px`
            root.appendChild(div)
            root.appendChild(div2)
            setTimeout(()=>{
                div.remove()
                div2.remove()
            } , 20000)
        }
        const stop = setInterval(()=>{
            star(size , 45)
            root.addEventListener("click", ()=>{  
                    clearInterval(stop)
                    inRoot.innerText = 'star stop'
            })
        }, 500)

        