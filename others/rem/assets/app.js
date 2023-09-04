const servicerID= "service_1e27s82"
const tempID="template_ozc6esj"
let params = {
    Name:"username",
    Email:"userEmail",
    Message:"message"
  }




const form =document.getElementsByTagName("form")[0]

form.addEventListener("submit",(e)=>{
    form.classList.add("submitted")
    e.preventDefault();
      params={
        Name:form.getElementsByTagName("input")[0].value,
        Email:form.getElementsByTagName("input")[1].value,
        Message:form.getElementsByTagName("textarea")[0].value,   
    }
    emailjs.send(servicerID,tempID,params).then(
         function (res){
            params={
                Name:"",
                Email:"",
                Message:"",   
            }
            form.classList.remove("submitted")
         }
        )
})
const body=document.getElementsByTagName("body")[0]
function seeNav(){
  body.classList.toggle("body_nav_active")
  document.getElementsByClassName("buger")[0].classList.toggle("buger-out")
}
var nav=document.getElementsByClassName("nav")[0]
var navBtn=nav.getElementsByTagName("a")
for (let i = 0; i < navBtn.length; i++) {
  const element = navBtn[i];
  element.addEventListener("click",()=>{
    body.classList.toggle("body_nav_active")
    document.getElementsByClassName("buger")[0].classList.toggle("buger-out")
  })
}
