const url="https://invest-sevrer.onrender.com"
const redURL="https://www.nazatech.me"
document.getElementsByClassName('popup')[0].classList.add('popup-hid')
let userID=localStorage.getItem("userID")
loadseeen()
function send(){
    document.getElementsByClassName('popup')[0].classList.add('popup-hid')


    const parmentmethod= document.getElementsByTagName('input')[0].value
    const AccountAdd= document.getElementsByTagName('input')[1].value
    const amount=document.getElementsByTagName('input')[2].value
    let sendersName=""
    
    if (parmentmethod && AccountAdd && amount) {
        fetch(url + `/user/${userID}`)
        .then((res)=>res.json())
        .then((data)=>{
          sendersName=data.UserName

        let newdata={
            SendersName : sendersName,
            PaymentMethod:parmentmethod,
            PaymentAdd:AccountAdd,
            PaymentValue:amount
        }
        console.log(newdata);
        fetch(url + "/with",{
            method:'POST',
            body: JSON.stringify(newdata),
            headers: {
                'Content-type':'application/json'
            }
        })
        .then((res)=>res.json())
        .then((data)=>{
           console.log(data);
          document.getElementsByTagName('input')[0].value=""
           document.getElementsByTagName('input')[1].value=""
           document.getElementsByTagName('input')[2].value=""
           document.getElementsByClassName('popup')[0].classList.remove('popup-hid')
           loadseeen()
        })
        })
        
    }
}




function logout(){
    localStorage.clear()
    window.location.href=`${redURL}/login.html`
}

if (userID===null) {
    window.location.href=`${redURL}/login.html`
}

var arr=[]
function loadseeen(){

fetch(url + `/user/${userID}`)
.then((res)=>res.json())
.then((data)=>{
    
   
     var name=data.UserName   
     fetch(url + `/with`)
     .then((res)=>res.json())
     .then((ndata)=>{
        for (let i = 0; i < ndata.length; i++) {
            const element = ndata[i];
            
        
           if(name===element.SendersName){
             if(!element.Seen){
              var  html=`
              <div class="flex pencont column">
              <div class="flex column">
                  ${element.PaymentValue}
                  <br>
                  <span class="flex row">
                      tracking ID
                      <p>
                          ${element._id}
                      </p>
                  </span>
              </div>
             </div>
               `
               document.getElementsByClassName('pending')[0].insertAdjacentHTML('beforeend',html)

             }
           }
        }
        document.getElementsByClassName('popup')[0].classList.remove('popup-hid')
      })
})
}
