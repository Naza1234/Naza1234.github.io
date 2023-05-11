
const url="https://invest-sevrer.onrender.com"
const redURL="https://www.nazatech.me"

function singup(){
    document.getElementsByClassName('popup')[0].classList.add('popup-hid')
    
    let  name1=document.getElementsByClassName('username')[0].value
    let  password=document.getElementsByClassName('password')[0].value
    let  email=document.getElementsByClassName('email')[0].value



    var data={
        UserName:name1,
        UserPassword:password,
        UserEmail:email
    }
    // console.log(data);
    if (!name1) {
        document.getElementsByClassName('username')[0].classList.add('error')
    }
    if (!password) {
        document.getElementsByClassName('password')[0].classList.add('error')
    }
    if (!email) {
       document.getElementsByClassName('email')[0].classList.add('error')
    }
    if (name1 && password && email) {
        fetch(url + "/user",{
            method:'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type':'application/json'
            }
        })
        .then((res)=>res.json())
        .then((data)=>{
            localStorage.setItem("userID",data._id)
            console.log(data);
            window.location.href=`${redURL}/dash/home.html`
        })
    }
         
}