/**
 * constructor methods
 * es6
 * object.create
 * 
 * 
 */

const Person= function(firstname,birthyear){
    this.firstname = firstname;
    this.birthyear = birthyear;

   /**burada yapilbaili disarid ayapilabilr 
    * 
    * this.calAge = function(birthyear){
        2021-this.birthyear
    }
    *  */ 

}


Person.prototype.cal = function(){
    console.log(2022-this.birthyear)
}

const ebu = new Person ("ebu","1990")

const ahmet = new Person ("ahmet","1990")

console.log(ebu) //object olusturuyor
console.log(ebu.cal(),"prototype")

console.log(ahmet ,"ahmet")


let d =1
for(i=10;i<=15 ;i++){
    d = d*i
}
console.log(d)

let det = []
for(i=100 ;i<=200;i++){
  if(i %23 == 0){
    det.push(i)
  }
    else{
        console.log("dere")
    }
}
console.log(det)
/**
 * let x = prompt("bir sayi giriniy")
let y= prompt("bir sayi giriniz")
let z = prompt("bir sayi griniy")
let df = Number(x)
let fd =Number(y)
let gh= Number(z)
 */

/**
 * if(x>y && x>z) console.log("ilk sayi buyuktur")
if(z>y && z>x) console.log("ucuncu sayi buyuktur")
if(y>x && y>z) console.log("ikinci sayi buyuktur")
 */

//const xo = Math.max(df,fd,gh)
//const yh =  console.log("tanimli deger yok") ?? xo
//console.log(yh)
 let lo  = 7750
 let dr= 210

 let ty =Math.ceil(7750/210) 

 console.log(ty)

 let sabit = 500
 let degisken = 14

 let son =  1700-(500+14*17) 
 console.log(son)


const kl= []
for(t= 2005 ;t<2010;t++)
{
let tu = 127+12*t
kl.push(tu)
}

console.log(kl)

