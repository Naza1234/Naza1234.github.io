const newurl="http://localhost:3000"



document.getElementsByClassName('line')[0].addEventListener("click",()=>{
    document.getElementsByClassName('nav')[0].classList.toggle("nav-out")
    document.getElementsByClassName('line')[0].classList.toggle("line-out")
})

start()
var fundNom=[]

var withNom=[]
var ticNom=[]
function start(){
    fetch(newurl + "/with")
    .then((res)=>res.json())
    .then((dataInfo)=>{
       dataInfo.reverse()
        for (let i = 0; i < dataInfo.length; i++) {
            var element=dataInfo[i]
            
            if(!element.Seen)
            {withNom.push(element)}
            document.getElementsByClassName('lenth')[1].innerHTML=withNom.length
            

        }
    })


    fetch(newurl + "/fund")
    .then((res)=>res.json())
    .then((data)=>{
       for (let l = 0; l < data.length; l++) {
        const element = data[l];
        if(!element.Seen){
            fundNom.push(element)
        }
        document.getElementsByClassName('lenth')[0].innerHTML=fundNom.length
       }
    })
   
    fetch(newurl + "/ticket")
    .then((res)=>res.json())
    .then((data)=>{
       for (let t = 0;  t< data.length; t++) {
        const element = data[t];
        if(!element.Seen){
            ticNom.push(element)
        }
        console.log("done");
        document.getElementsByClassName('lenth')[2].innerHTML=ticNom.length
       }
    })
   
}