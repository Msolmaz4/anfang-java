//async public api githubtan bak res country

const req = new XMLHttpRequest()
req.open("GET","https://restcountries.com/v2/name/germany")
//const data = req.send()
//console.log("eeeee")
req.send()


req.addEventListener("load",function(){
    //console.log(this.responseText)
    const data =JSON.parse(this.responseText)[0]
    console.log(data)
})