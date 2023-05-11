
const cont=document.getElementsByClassName('userlist')[0]
// const pCont=document.getElementsByClassName('plansList')[0]
const url="https://invest-sevrer.onrender.com"
const contP=document.getElementsByClassName('usdit')[0]

start()

function start(){
    document.getElementsByClassName('popup')[0].classList.add('popup-hid')
    cont.innerHTML=""
    fetch(url + "/user")
    .then((res)=>res.json())
    .then((dataInfo)=>{
        document.getElementsByClassName('lenth')[3].innerHTML=dataInfo.length
        dataInfo.reverse()
        document.getElementsByClassName('popup')[0].classList.remove('popup-hid')
        for (let i = 0; i < dataInfo.length; i++) {
            var element=dataInfo[i]
            var data = `
            <div class="user-card userC flex column " >
            <img src="../assets/image/group.png" alt="">
            <h1>${element.UserName}</h1>
            <span class="flex row">
                <h2>
                    amount 
                </h2>
                <p>$ ${new Intl.NumberFormat().format(element.UserTotalAmount)}
                 </p>
            </span>
            <span class="flex row">
                <h2>
                    email
                </h2>
                <p>
                ${element.UserEmail}
                </p>
                <p class="hid">${element._id}</p>
            </span>
            
            
        </div>
            `
            
            cont.insertAdjacentHTML('beforeend',data)
        }
        details()
    })
}


var id=""

function details() {
    var user =document.getElementsByClassName('userC')
    for(i=0;i<user.length;i++){
        var userDit=user[i]
        userDit.addEventListener('click',active)
     }
}
function active(event){
    document.getElementsByClassName('popup')[0].classList.add('popup-hid')
    // us=userDit
    us=event.target
    id=us.getElementsByClassName('hid')[0].innerHTML;
    console.log(us.getElementsByClassName('hid')[0]);
    fetch(url + `/user/${id}`)
.then((res)=>res.json())
.then((data)=>{
    document.getElementsByClassName('popup')[0].classList.remove('popup-hid')
  contP.innerHTML=`
  <section class="user-dit flex column">
  <img src="../assets/image/group.png" alt="">
  <h1>
   ${data.UserName}
  </h1>

  <span class="flex row">
   <h2>
       total amount
   </h2>
   <input type="text" class='userbal' value="${data.UserTotalAmount}">
   
  </span>

  <span class="flex row">
   <h2>
       email
   </h2>
   <p>
       ${data.UserEmail}
   </p>
</span>

  <span class="flex row">
   <h2>
       Amount invested
   </h2>
   <p>
      $ ${new Intl.NumberFormat().format(data.UserInvestedAmount)}
   </p>
</span>

<span class="flex row">
<button onclick="deleteU()">
delete user
</button>

<button onclick="update()">
update
</button>
</span>
</section>
  `

  

})
}

function update(){
    document.getElementsByClassName('popup')[0].classList.add('popup-hid')
    var num=document.getElementsByClassName('userbal')[0].value
    var data={
        UserTotalAmount:num
    }
   fetch(url + `/user/${id}`,{
    method:'PUT',
    body: JSON.stringify(data),
    headers: {
        'Content-type':'application/json'
    }
})
.then((res)=>res.json())
.then((data)=>{
    console.log(data);
    document.getElementsByClassName('popup')[0].classList.remove('popup-hid')
    start()
})
}

function deleteU(){
    document.getElementsByClassName('popup')[0].classList.add('popup-hid')
   fetch(url + `/user/${id}`,{
       method:'DELETE'
   })
   .then((res)=>res.json())
   .then((data)=>{
       start()
       document.getElementsByClassName('popup')[0].classList.remove('popup-hid')
       console.log(data);
       contP.innerHTML=""
})
}