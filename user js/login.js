const url="http://localhost:3000"


function login(){


    let  name1=document.getElementsByClassName('username')[0].value.toLowerCase()
    let  password=document.getElementsByClassName('password')[0].value.toLowerCase()
    let users=[]

    if (name1 && password) {
        fetch(url + "/user")
        .then((res)=>res.json())
        .then((data)=>{
            localStorage.setItem("userID",data.id)
           for (let i = 0; i < data.length; i++) {
            const element = data[i];
                if(element.UserName.toLowerCase()===name1){
                    if (element.UserPassword.toLowerCase()===password) {
                        localStorage.setItem("userID",element._id)
                        window.location.href="http://127.0.0.1:5500/dash/home.html"
                    }else{
                        document.getElementsByClassName('password')[0].classList.add('error')
                        document.getElementsByClassName('username')[0].classList.remove('error')
                    }
                }else{
                    document.getElementsByClassName('username')[0].classList.add('error')
                }
           }
        })
    }
}