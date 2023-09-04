var red_url="http://127.0.0.1:5500"
var url="https://aquer-rest-framework.onrender.com/"

const input=document.getElementsByTagName("input")

function removeError(){
  input[0].classList.remove("input_error")
  input[1].classList.remove("input_error")
}
var form=document.getElementsByClassName("form")[0]
form.addEventListener("submit",(e)=>{
  e.preventDefault();
  document.getElementsByClassName("load_body")[0].classList.add("loader_out")
  if(input[0] && input[1]){
    var info={
     username: input[0].value,
     password: input[1].value,
    }
    console.log(info);
    fetch(url + "user/login/",{
      method:'POST',
      body: JSON.stringify(info),
      headers: {
          'Content-type':'application/json'
      }
  })
  .then((res)=>res.json())
  .then((data)=>{
      console.log(data);
//       key
// : 
// "a82fb2e7fa980d2f3fe9dfe9d71d7b9efd7736cf"

localStorage.setItem("aqwireUserKey",data.key)
if(data.non_field_errors){
  input[0].classList.add("input_error")
  input[1].classList.add("input_error")
  document.getElementsByClassName("load_body")[0].classList.remove("loader_out")
}
console.log(localStorage.getItem("aqwireUserKey"));
fetch('https://aquer-rest-framework.onrender.com/user', {
    headers: {
      'Authorization': `Token f0234556cdf9d91ae53450ea57a6b65ee3f0eb96`
    }
  })
  .then(response => response.json())
  .then(data => {
    // Handle the user details received in the response
    if(localStorage.getItem("aqwireUserKey")){
      // window.location=`${red_url}/vendor/home.html`
    }
    console.log(data);
  })
  .catch(error => {
    // Handle any errors that occurred during the request
    console.error(error);
  });

  })
  }
})
