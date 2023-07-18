const addButton = document.querySelector("#add-button")
const inpt= document.querySelector("#input")


const ul = document.querySelector("ul")


const addListe= ()=>{
    const val = inpt.value
    console.log(val)


    const listeEle= document.createElement("li")

    const deleteButton = document.createElement("span")
    deleteButton.setAttribute("class","delete-button")
    deleteButton.style.background="red"
    deleteButton.textContent= "delete"

    const content = document.createElement("span")
    content.setAttribute("class","list-element")
    content.textContent = val
   // console.log(content.textContent,"textconte")

   listeEle.appendChild(content)
   listeEle.appendChild(deleteButton)


   ul.appendChild(listeEle)
   //burada syukleme yapdiktan sonra delete butonlnnlarini cagiririz
   const deleteButtons= document.querySelectorAll(".delete-button")
   Array.from(deleteButtons).forEach(function(btn){
    btn.addEventListener("click",function(e){
        console.log(e) //e deki verileri baktim
        const li = e.target.parentElement
        li.remove()

    })

   })





   inpt.value= ""

}


addButton.addEventListener("click",addListe)
//azrica wnrwet tususyla calistirma keycode.info bakatim enter kodunu bildum
inpt.addEventListener("keyup",function(e){
    if(e.keyCode === 13){
        addListe()
        inpt.value= ""
    }
})