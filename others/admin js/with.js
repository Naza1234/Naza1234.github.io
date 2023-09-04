const url="https://invest-sevrer.onrender.com"

const cont=document.getElementsByClassName('withList')[0]
const contp=document.getElementsByClassName('pdit')[0]


start()




function start(){
    document.getElementsByClassName('popup')[0].classList.add('popup-hid')
    cont.innerHTML=""
    fetch(url + "/with")
    .then((res)=>res.json())
    .then((dataInfo)=>{
       dataInfo.reverse()
       document.getElementsByClassName('popup')[0].classList.remove('popup-hid')
        for (let i = 0; i < dataInfo.length; i++) {
            var element=dataInfo[i]
           
            var data = `
                    <div class="${!element.Seen?"red fond-req freq row flex":"fond-req freq row flex"} ">
                        <span class="flex row">
                            <h2>
                                ${element.SendersName}
                            </h2>
                            <p>
                               $ ${new Intl.NumberFormat().format(element.PaymentValue)===NaN?new Intl.NumberFormat().format(element.PaymentValue):element.PaymentValue}
                            </p>
                            <p class="hid">${element._id}</p>
                        </span>
                         <button onclick="del()">
                            details
                         </button>

                    </div>
            `
            
            cont.insertAdjacentHTML('beforeend',data)
        }
    })
   
}

function del(){
    var item=document.getElementsByClassName('freq')
    for (let i = 0; i < item.length; i++) {
        const element = item[i];
        element.addEventListener("click",active)
    }
}
var newElementId
function active(event){
    document.getElementsByClassName('popup')[0].classList.add('popup-hid')
    var newElement=event.target.parentElement
    newElementId=newElement.getElementsByClassName('hid')[0].innerHTML
    fetch(url + `/with/${newElementId}`)
    .then((res)=>res.json())
    .then((data)=>{
        document.getElementsByClassName('popup')[0].classList.remove('popup-hid')
        var html=`
        <section class="user-dit flex column">
        <br>
        <br>
        <h1>
         ${data.SendersName}
        </h1>

        <span class="flex row">
         <h2>
             payment method
         </h2>
         <p>
            ${data.PaymentMethod}
         </p>
         
        </span>

        <span class="flex row">
         <h2>
             account address
         </h2>
         <p>
             ${data.PaymentAdd}
         </p>
     </span>
     <SPan class="flex row">
        <h2>
            Amount
        </h2>
        <p>
            $ ${new Intl.NumberFormat().format(data.PaymentValue)===NaN?new Intl.NumberFormat().format(data.PaymentValue):data.PaymentValue}
        </p>
     </SPan>
     <span class="flex row">
     <button onClick="deleteP()">
      delete
     </button>

     <button onClick="update()">
      confirmed
     </button>
     </span>
      </section>
        `
        contp.innerHTML=html
    })
}


function deleteP(){
    document.getElementsByClassName('popup')[0].classList.add('popup-hid')
    console.log(newElementId);
    fetch(url + `/with/${newElementId}`,{
        method:'DELETE'
    })
    .then((res)=>res.json())
    .then((data)=>{
        document.getElementsByClassName('popup')[0].classList.remove('popup-hid')
        start()
        contp.innerHTML=""
        console.log(data);
    })
}

function update() {
    document.getElementsByClassName('popup')[0].classList.add('popup-hid')
    var info={
        Seen:true
    }
    fetch(url + `/with/${newElementId}`,{
        method:'PUT',
        body: JSON.stringify(info),
        headers: {
            'Content-type':'application/json'
        }
    })
    .then((res)=>res.json())
    .then((data)=>{
        document.getElementsByClassName('popup')[0].classList.remove('popup-hid')
        start()
        contp.innerHTML=""
    })
}