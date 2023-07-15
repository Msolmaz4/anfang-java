//console.log("deneme")

/*
const day = prompt("gun girin")
const time= prompt("yaman girin")


if(day =="pazar"){console.log("kapali")}
if(day == "pazartesi" && 8 < time <17) { console.log("acik")}

*/
let text = "deneme devam"
let splirText = text.split(" ")
console.log(splirText[0])


let dene = "bugun ku dolar kuru 30,6 tl"
let denS = dene.split(" ")
console.log(denS[denS.length-2])
//replace yapmak  replaceAll yaparsak bu hepsini zapar 
let deneRe = dene.replace(",",".")
console.log(deneRe)
let ada = deneRe.split(" ")
console.log(ada)
let son = ada[ada.length-2]
console.log(son,"son")
let son1 = Number(son)
console.log(son1)
//trim bosluklari alir

let denes = "          adana       "
console.log(denes)
let trDen = denes.trim()

console.log(trDen)




let yoom = " Tarayıcınız tarafından gösterilen iletişim kutusunda Zoom Meetings'i aç öğesini tıklayın"

let yoomSplit = yoom.split(" ")
console.log(yoomSplit[yoomSplit.length - 4])
// includes icerip icermedigi kontrol ediyoruy

let son2 = " hayat yasadikca guylelsir"
let son3 = son2.includes("hayat")
console.log(son3) //true veya false doner

//indexof 


//Arrayyy

const student =["denem","adam","memeur"]
console.log(student[1])

//degistirmek icin
student[2] = "subay"

console.log(student)

const adana = student.push("elemen")
console.log(adana)//boyleolunca uyunluk gelr 

//unschift ilk siraya ekler push ile ayni isi yapar
//pop() son eleman siler shift ilk elami siler
student.pop()
console.log(student,"pop")

//splice array aradan silme ve ekleme yapariz burada iki ttan e kullanma medodu var
//splice(start,deletecount)
//splice (start ,deletecount,item) eklemem


//objeyey birsey eklemek array de ekleyebilirz
emp = {
    firstname:"denme",
    lastname:"son"
}

emp.location= "germany"
console.log(emp)

emp["mail"]= "abc"
console.log(emp)


let a = 0
 

const artit = ()=>{
    for(a=0 ;a<10 ; a++)
    console.log(a)
}
 artit()

///,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,


const aAry = []
let i = 0

function aAr(){
    
    if(i %3 == 0 && i %5 != 0){
        {aAry.push("fiyy")}}
    else if(i %5 == 0 && i%3 != 0){
            aAry.push("buyy")}
            else if(i%3 == 0 && i%5 == 0){
                aAry.push("FiyyBuyy")
            }
            else{ aAry.push(i)}
            
            i++

            return aAry
}


console.log(aAr())
console.log(aAr())
console.log(aAr())
console.log(aAr())
console.log(aAr())
console.log(aAr())
console.log(aAr())
console.log(aAr())
//.............Forrrrrrrrrrrrrr


for(let rep = 1 ; rep<=30 ; rep++) 
{console.log(`push ${rep}`)}

const arr = []


function denek(){
for(let rep = 1 ; rep<=100 ; rep++){

    if(rep%3 == 0 && rep%5 != 0){ arr.push("fiyy")}
     else if(rep%5 == 0 && rep%3 != 0){arr.push("buyy")}
     else if(rep%5 == 0 && rep%3 == 0){arr.push("fiybuyy")}
    else{
        arr.push(rep)
    }
}
    return arr
}

console.log(denek())


const arrrt = ["deneme","calisma","memeur"]


for(let i = 0 ; i<arrrt.length ;i++){
    console.log(arrrt[i])
}
//  contunie break


const deene = []

for(let i = 0; i<=100;i++){
    if(i %2 != 0) continue
    if(i == 50) break
    deene.push(i)
}

console.log(deene)

for(let i = 1;i<=3; i++ ){
    console.log(`-------------------ex${i}`)
    for(let k = 1; k<=5 ; k++){
        console.log(`repeat${k}`)
    }
}

//while

let rep = 1
while(rep <=10){
    console.log(`push up ${rep}`)
    rep++
}
//Math.trunc ondalik sayidan kurtarir 
let mat =Math.trunc(Math.random()*6)+1
console.log(mat)

while(mat !== 6){
    console.log(`you rolled ${mat}`)
    mat =Math.trunc(Math.random()*6)+1
    console.log(mat == 6 ? "win " :"verloren") 
}
//const veri = prompt("sayi griniy")

//console.log(veri)
//let summ = 0
//let ad = veri.length
//console.log(ad)
//function odev(){
    //let adw = veri.split("")
  //  console.log(adw)
   //for(let i = 0 ;i<ad; i++){
    //summ += adw[i] **ad
    
   
  // }
   //return summ == veri ?`${veri} is Armong` :`${veri} is Armong not`

//}

//console.log(odev())

//-----------------deneme
let p=[1,2,7]
console.log(p)
const dere= []

function fg(){
    
    for(i=0;i<p.length;i++){
        let son = p[i]+i
        dere.push(son)
        console.log(dere)
    }
    return dere 
}

console.log(fg())

//''--------------



function wert(a,b){
    console.log(a,b)
    let d =Number(a)
    console.log(d)
    let m = Number(b)
    if(d == 10 || m == 10 || d+m == 10){
       return true
    } else{
      return false
    }
    
}


console.log(wert(3,8))


function kazan(x){
    let k = x.split("")
    console.log(k)
    for(i=0 ; i<k.length ; i++){
        let lk= k[0]
        console.log(lk,"lk")
        let po= k[k.length-1]
        console.log(po,"po")
       if(k[0] != k[k.length-1]){
        console.log("okey")
       }else{ 
        console.log("denemeeeee")
       }

    }
    return

}

console.log(kazan("kazak"))

//bu komut tersine ceviri ve array larda kullaniliir regex.com var buna bak
let df = ["asdf","dpppp"]
console.log(df.reverse())
//bu bize arraylari stringe cevirir
console.log(df.join(""))
//----------------------


function guyel(str){
    var eliReg =/[\W_]/g
    let lowerC =str.toLowerCase().replace(eliReg,"")
    let revS= lowerC.split("").reverse().join("")
    return(lowerC === revS)


}

console.log(guyel("ey edip adanada pide ye"))
//--------------------------

let dxx = prompt("bitet ein Number ")
let fgx =  Number(dxx)
if(fgx < 0 ||  Number.isInteger(fgx) == false ||isNaN(dxx)) alert ("baba patladik")


function isPrime(num){
    if(num === 1){
        return `${num} ist okey`
    }
    if(num === 2){
        return `${num} ist false`
    }
    for(let i = 2;i<num;i++){
        return num%i == 0 ? "baba patladik" :  "olduk be"
    }


}

console.log(isPrime(dxx))
//--------------------------
