const url="https://invest-sevrer.onrender.com"
const redURL="https://nazatech.me"

function send(){
    let userID=localStorage.getItem("userID")
    document.getElementsByClassName('popup')[0].classList.add('popup-hid')


    const parmentmethod= document.getElementsByTagName('input')[0].value
    const parmentID= document.getElementsByTagName('input')[1].value
    const message=document.getElementsByTagName('input')[2].value
    let sendersName=""

    if (parmentmethod && parmentID && message) {
        fetch(url + `/user/${userID}`)
        .then((res)=>res.json())
        .then((data)=>{
          sendersName=data.UserName

        let newdata={
            SendersName : sendersName,
            PaymentMethod:parmentmethod,
            TrackingID:parmentID,
            PaymentDescription:message
        }
        fetch(url + "/fund",{
            method:'POST',
            body: JSON.stringify(newdata),
            headers: {
                'Content-type':'application/json'
            }
        })
        .then((res)=>res.json())
        .then((data)=>{
           console.log(`sent ${data}`);
           document.getElementsByTagName('input')[0].value=""
           document.getElementsByTagName('input')[1].value=""
           document.getElementsByTagName('input')[2].value=""
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



document.getElementsByClassName('popup')[0].classList.add('popup-hid')

fetch(url + "/payment")
.then((res)=>res.json())
.then((data)=>{
    document.getElementsByClassName('popup')[0].classList.remove('popup-hid')
  for (let i = 0; i < data.length; i++) {
    const element = data[i];
    var html=`
    <div class="pay flex column">
    <span class="name flex row">
        <img src="${element.GetWayImg}" alt="">
        <p>
            ${element.GetWaysName}
        </p>
    </span>
    <span>
        ${element.GetWayAdd}
    </span>
  </div>
    `
    document.getElementsByClassName('payget')[0].insertAdjacentHTML('beforeend',html)
  }
})