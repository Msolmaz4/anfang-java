

const colorDe=()=>{
    let ar = document.getElementById("colr")
    ar.style.backgroundColor="red"
}

const adana= ()=>{
    let das= document.querySelector('.son1')
    das.style.backgroundColor="red";
    das.innerText = "tiklayin";
}
//evet iki paramette alir ucde alir ama cok kullamilmaz
const huo=()=>{
    let yu= document.querySelector("#dfg")
    yu.addEventListener("click",()=>console.log("click"))
}

const div= document.querySelector(".son1")
//console.log(div)
//cift clik olinca sayagf adegisiypr mouse click
div.addEventListener("dblclick",()=>div.style.backgroundColor="yellow")
div.addEventListener("mousedown",()=>div.style.backgroundColor="orange")


const input = document.querySelector("#ipu")

const pot= ()=>{
    input.style.backgroundColor="green"
}

const potr= ()=>{
    input.style.backgroundColor="red"
}

input.addEventListener("keydown",pot)
input.addEventListener("keyup",potr)