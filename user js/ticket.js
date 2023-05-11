const url="https://invest-sevrer.onrender.com"
const redURL="http://127.0.0.1:5500"
function send(){
    document.getElementsByClassName('popup')[0].classList.add('popup-hid')
    let userID=localStorage.getItem("userID")
    


    const tittle= document.getElementsByTagName('input')[0].value
    const email= document.getElementsByTagName('input')[1].value
    const message=document.getElementsByTagName('textarea')[0].value
    let sendersName=""

    if (tittle && email && message) {
        fetch(url + `/user/${userID}`)
        .then((res)=>res.json())
        .then((data)=>{
          sendersName=data.UserName

        let newdata={
            SendersName : sendersName,
            Subject:tittle,
            Email:email,
            Message:message
        }
        console.log(newdata);
        fetch(url + "/ticket",{
            method:'POST',
            body: JSON.stringify(newdata),
            headers: {
                'Content-type':'application/json'
            }
        })
        .then((res)=>res.json())
        .then((data)=>{
            document.getElementsByClassName('popup')[0].classList.remove('popup-hid')
        })
        })
        
    }
}

const userID=localStorage.getItem("userID")
console.log(userID);

function logout(){
    localStorage.clear()
    window.location.href=`${redURL}/login.html`
}

if (userID===null) {
    window.location.href=`${redURL}/login.html`
}
