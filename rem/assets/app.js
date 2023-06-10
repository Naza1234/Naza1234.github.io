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