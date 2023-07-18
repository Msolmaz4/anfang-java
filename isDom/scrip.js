//id getirme

//let fNane=document.getElementById("first-name")
//console.log(fNane)

//clas burad aray olarak doner istedigimi cagirmak icin soniuu n [] numarayi yazarak ulasiry
//let claNmae= document.getElementsByClassName('form-control')
//console.log(claNmae)
//tagnam ile yakalriy

//let po= document.getElementsByTagName('input')
//console.log(po)
//querSelector ile cagrilabilir # 
//
//let formUtem = document.querySelector('.form-items').innerHTML atama yaprken altaki gibi
//let formUtem = document.querySelector('.form-items')
//console.log(formUtem)

//;rnegin icine atama yapraken formUtem.innerHtml = `   div`  yaparak yazdiriz innertext yaparsa text olarak atar 

////................atama yapma

////let dip= document.createElement("div")
////let text = document.createTextNode("efsane")
//dip.appendChild(text)
//formUtem.appendChild(dip)
//---------------- ekleme yapmak id ornegin
//let deneme =document.querySelectorAll(".form-control")[0]
//console.log(deneme)

//
//deneme.setAttribute("id","ilk-gelen")
//console.log(deneme)
//deneme.setAttribute("placeholder","ilk isim")

// getAtributt eyapilna lari gorebiliriy

//// sdf=deneme.getAttribute("id")
//console.log(sdf,"getAtt")
//let pdf=deneme.getAttribute("placeholder")
//console.log(pdf,"getAtt")

//-----clasname atama

//const firstNmae=document.querySelectorAll("#first-name")
//console.log(firstNmae,"first-name")
//firstNmae.className = "form-contro"
//console.log(firstNmae)
//birde classListe var olani soilmey ekleme yapar qierAll cekresn liste olarak dondugu icin [ ] cek yoks ahataverir

//burada yenide  inpu t olusturma


let bulma = document.getElementById("ekleme")
//console.log(bulma)

let mam = document.createElement("div")
mam.setAttribute("class","col-md-6 m-4")
let mama = document.createElement("input")
mama.setAttribute("type","text")
mama.setAttribute("name","namex")
mama.setAttribute("placeholder","yeniden eklenene")
mama.setAttribute("class","form-control") //bunu gonderoriz sirayamaya koyarken

mam.appendChild(mama) 
//console.log(mam)
//
//bulma.appendChild(mam)

//istedimiz yere eklemek icin insertBefore komutu ile
// parentNode.insertBefore(Newmode,childMode)


let paraDiv = document.getElementById("email").parentNode//bunun element yazarsan ilk elemeti alir note herseyi alir element iki " "arasindaki

let eamilInput= document.getElementById("email")
paraDiv.insertBefore(mama,eamilInput)
console.log(bulma.children)

//-----------------farkli ekleme array

let pozisiti = ["position","junior","Senior","project"]


let c=[]

for(i=0;i<pozisiti.length;i++){
 c.push(pozisiti[i])
}
console.log(c,"cnin icin e gonderdik")

//-------------yukardaki denme
let pozisition = ["position","junior","Senior","project"]

let work = document.getElementById("job")

//for(let i = 0;i<pozisition.length;i++){
   // work.innerHTML+= `<option>${pozisition[i]}</oprtion>`}


//--------------------farkli olrak for of 

for (el of pozisition){
    work.innerHTML+= `<option >${el}</oprtion>`}

//------------FOREACH BUNDA FOKSIYONDA EKLENIYOR

pozisition.forEach(el=>work.innerHTML+=`<option value="${el}">${el}</oprtion>` )


//-------------style degistirme

const button = document.getElementById("submit")

//button.style.width= "25%"
//button.style.height="25%"
//button.style.backgroundColor = "antiquewhite" 

//--------daha kola
button.style.cssText =`
width:25%;
height:5vh;
background-color:antiquewhite;
`
////////////////------------

const fir= document.getElementById("first-name")
const car =document.getElementById("cara")
 

const showCara= ()=>{
    const val = fir.value
    car.innerText = val.length +"/40"
    if(fir.value.length == 0){
        car.style.display ="none"
    }
}



fir.addEventListener("keyup",showCara)

//onchange evvent genelde selectlerde kullanilir

const posit = document.getElementById("posit")

work.addEventListener("change",function(){
    posit.innerText=`sen sectin${work.value}`



})
