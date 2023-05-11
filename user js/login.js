const url="https://invest-sevrer.onrender.com"
const redURL="https://nazatech.me"

function login(){
    document.getElementsByClassName('popup')[0].classList.add('popup-hid')

    let  name1=document.getElementsByClassName('username')[0].value.toLowerCase()
    let  password=document.getElementsByClassName('password')[0].value.toLowerCase()

    console.log("yes");
    if (name1 && password) {
        fetch(url + "/user")
        .then((res)=>res.json())
        .then((data)=>{
           for (let i = 0; i < data.length; i++) {
            const element = data[i];
                if(element.UserName.toLowerCase()===name1){
                    if (element.UserPassword.toLowerCase()===password) {
                        localStorage.setItem("userID",element._id)
                        window.location.href=`${redURL}/dash/home.html`
                    }else{
                        document.getElementsByClassName('password')[0].classList.add('error')
                        document.getElementsByClassName('popup')[0].classList.remove('popup-hid')
                        document.getElementsByClassName('username')[0].classList.remove('error')
                    }
                }else{
                    document.getElementsByClassName('popup')[0].classList.remove('popup-hid')
                    document.getElementsByClassName('popup')[0].classList.remove('popup-hid')
                    document.getElementsByClassName('username')[0].classList.add('error')
                }
           }
        })
    }
}