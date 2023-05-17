
const url="https://invest-sevrer.onrender.com"
const redURL="https://nazatech.me"



var opt
function ver(){
   
    document.getElementsByClassName('popup')[0].classList.add('popup-hid')
     
    let  name1=document.getElementsByClassName('username')[0].value
    let  password=document.getElementsByClassName('password')[0].value
    let  Email=document.getElementsByClassName('email')[0].value

    if (!name1) {
        document.getElementsByClassName('username')[0].classList.add('error')
    }
    if (!password) {
        document.getElementsByClassName('password')[0].classList.add('error')
    }
    if (!Email) {
       document.getElementsByClassName('email')[0].classList.add('error')
    }
    var info={
        email: Email
    }
    if (name1 && password && Email) {
        fetch(url + "/email",{
            method:'POST',
            body: JSON.stringify(info),
            headers: {
                'Content-type':'application/json'
            }
        })
        .then((res)=>res.json())
        .then((data)=>{
            document.getElementsByClassName('popup')[0].classList.remove('popup-hid')
            document.getElementsByClassName('form')[0].classList.add('ver')
            document.getElementsByClassName('form')[1].classList.remove('ver')
            opt=data.code
        })
    }
}





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
    let  otpin=document.getElementsByClassName('code')[0].value
    if (otpin) {
        if(otpin===opt){
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
        }else{
            otpin=document.getElementsByClassName('code')[0].classList.add('error')
        }
    }
         
}