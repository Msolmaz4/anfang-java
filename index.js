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


//objeyey birsey eklemek
emp = {
    firstname:"denme",
    lastname:"son"
}

emp.location= "germany"
console.log(emp)

emp["mail"]= "abc"
console.log(emp)

 