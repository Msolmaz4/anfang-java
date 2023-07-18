const myFunction = () => {
  let a = 4;
  let x = document.querySelector("#input").value;
  console.log(x)
  let v= Number(x)
  console.log(v,"v")



    if ( v >10 && v <20) {
      text = "Tebrikler Doğru seçim :";
    } 
 

    else{
      document.getElementById(
        "ekran"
      ).innerHTML = ` <p>  ${a} kere daha giris yapabilirsiniz</p>`;
      text = "yanlis girdiniz";
    }


  
  
  

  
  


  return document.getElementById("deneme").innerHTML = text;
};
