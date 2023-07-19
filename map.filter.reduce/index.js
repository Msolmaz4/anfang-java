//maa

 const arr = [1,2,3,34,45]

 const mapped =arr.map((element,index,array)=>{
   // console.log(`element:${element} ,index :${index},array:${array}`)
   return `index:${index},element:${element**3}`
 })
 console.log(arr)
 console.log(mapped)
//--------------

 const data= [
  {
    title:"deneme",
    text:"bunlar berede",
    img:"www..        ",
    desc:"..........."

  },
  {
    title:"bukunaca",
    text:"eeeeeeeeeeeeeee berede",
    img:"www..        ",
    desc:"......eeeeeeeeeeeeee....."
  },
  {
    title:"aranoypr",
    text:"ddddddddddddddddddbunlar berede",
    img:"www..        ",
    desc:".......ssssssssssssssssssss...."
  },
  {
    title:"cember",
    text:"ttttttttttttttttttbunlar berede",
    img:"www..        ",
    desc:"....[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]......."

  }

 ]

const der  = document.querySelector(".dere")
 //burada dikka edeoilecek nokta bir tane div yapari zonxceden htmkl deyoks ahata aliriy bnerey e koyacagimiz belli olacak yere

data.map(el=>{

 

  const newDiv = document.createElement("div")
  newDiv.setAttribute("class","card")
  newDiv.style.width="18rem"

  const img = document.createElement("img")
  img.setAttribute("src",`${el.img}`)
  img.setAttribute("class","card-img-top")

  const innerDiv = document.createElement("div")
  innerDiv.setAttribute("class","card-body")

  const head = document.createElement("h5")
  head.setAttribute("class","card-title")
  head.innerText= `${el.title}` //burda  unu ullandim 
  //head.textContent=el.title

  const prg =document.createElement("p")
  prg.setAttribute("class","card-text")
  prg.textContent= el.desc

  const button = document.createElement("a")
  button.setAttribute("class","btn btn-primary")
  button.textContent= "go soweeher"


  innerDiv.appendChild(head)
  innerDiv.appendChild(prg)
  innerDiv.appendChild(button)

  newDiv.appendChild(img)
  newDiv.appendChild(innerDiv)

der.appendChild(newDiv)

})