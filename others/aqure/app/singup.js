var red_url="http://127.0.0.1:5500"
var url="https://aquer-rest-framework.onrender.com/"
const input=document.getElementsByTagName("input")

function remove1(){
  input[0].classList.remove("input_error")
}
function remove2(){
  input[1].classList.remove("input_error")
}
function remove3(){
  input[3].classList.remove("input_error")
  input[4].classList.remove("input_error")
}
var form=document.getElementsByClassName("form")[0]
form.addEventListener("submit",(e)=>{
  e.preventDefault();
  document.getElementsByClassName("load_body")[0].classList.add("loader_out")
  
  if(input[0] && input[1] && input[2] && input[3] && input[4]){
    if(input[3].value === input[4].value){
      var info={
        username: input[0].value,
        email: input[1].value,
        phone_number: input[2].value,
        password1: input[3].value,
        password2: input[4].value
       }
       console.log(info);
       var resBody={}
       fetch(url + "user/register.json",{
         method:'POST',
         body: JSON.stringify(info),
         headers: {
             'Content-type':'application/json'
         }
     })
     .then((res)=>{
       resBody=res
       console.log(resBody);
       if(resBody.status===(204 || 200)){
        window.location=`${red_url}/Login.html`  
       }
      return res.json()})
     .then((data)=>{
       if(resBody.status===400){
         if(data.email){
             input[1].classList.add("input_error")
             document.getElementsByClassName("load_body")[0].classList.remove("loader_out")
           }
           if(data.username){
             input[0].classList.add("input_error")
             document.getElementsByClassName("load_body")[0].classList.remove("loader_out")
             
           }
           if(data.password1){
             input[4].classList.add("input_error")
             input[3].classList.add("input_error")
             document.getElementsByClassName("load_body")[0].classList.remove("loader_out")
             
           }
       }else{
           window.location=`${red_url}/Login.html`  
       }
   
   
   }).catch(error =>{
     console.log(error);
   })
    }else{
      input[4].classList.add("input_error")
      document.getElementsByClassName("load_body")[0].classList.remove("loader_out")
    }
   
  }
})


const passwordField = document.getElementsByClassName('passwordField');
const passwordToggle = document.getElementsByClassName('passwordToggle');

// Handle password toggle click event
passwordToggle[0].addEventListener('click', () => {
  const fieldType = passwordField[0].getAttribute('type');

  if (fieldType === 'password') {
    passwordField[0].setAttribute('type', 'text');
    passwordToggle[0].innerHTML = '<i class="fas fa-eye-slash"></i>';
  } else {
    passwordField[0].setAttribute('type', 'password');
    passwordToggle[0].innerHTML = '<i class="fas fa-eye"></i>';
  }
  const fieldType1 = passwordField[1].getAttribute('type');

  if (fieldType1 === 'password') {
    passwordField[1].setAttribute('type', 'text');
    passwordToggle[1].innerHTML = '<i class="fas fa-eye-slash"></i>';
  } else {
    passwordField[1].setAttribute('type', 'password');
    passwordToggle[1].innerHTML = '<i class="fas fa-eye"></i>';
  }
});
