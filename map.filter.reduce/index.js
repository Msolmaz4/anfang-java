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

//--------------filter


const numver= [1,2,23,33,44,4,44,5,55,66,6]

const filtered = numver.filter(el =>el%2== 0)
console.log(filtered,"fi;ter ilk")

const arr2 = [1,2,2,2,3,3,3,4,5,6]

function filterMet(arr2){
  return arr2.filter((el,i)=>el != arr2[i+1]) //yan yan aise

}

console.log(filterMet(arr2),"filter")

//-----------------------re3duce


//arr.reduce((prevValue,currentValue,i,r))
//normalkde reduc(function,initialValue)

const number2 = [1,3,44,90,23,41,7,9]


const dreeee= number2.reduce(function(prevValue,currentValue) {
  console.log("prev",+prevValue)
  console.log("cureen",+currentValue)

  return prevValue +currentValue
},12) // buraya deger gitmesek 0 alir  biz on kik verdik b u 12 alir ilj prevent
