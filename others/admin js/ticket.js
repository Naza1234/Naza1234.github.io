const url="https://invest-sevrer.onrender.com"

const cont=document.getElementsByClassName('fundList')[0]
const contp=document.getElementsByClassName('pdit')[0]


start()


function start(){
    document.getElementsByClassName('popup')[0].classList.add('popup-hid')
    cont.innerHTML=""
    
    fetch(url + "/ticket")
    .then((res)=>res.json())
    .then((dataInfo)=>{
       dataInfo.reverse()
       document.getElementsByClassName('popup')[0].classList.remove('popup-hid')
        for (let i = 0; i < dataInfo.length; i++) {
            var element=dataInfo[i]
            var data = `
            <div class="${!element.Seen?"red fond-req freq row flex":"fond-req freq row flex"} ">
            <span class="flex row">
                <p>
                    ${element.SendersName}
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
    fetch(url + `/ticket/${newElementId}`)
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
             email
         </h2>
         <p>
            ${data.Email}
         </p>
     </span>
     <SPan>
        <P>
            ${data.Subject}
        </P>
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
        console.log(data);
        contp.innerHTML=html
    })
}

function deleteP(){
    document.getElementsByClassName('popup')[0].classList.add('popup-hid')
    console.log(newElementId);
    fetch(url + `/ticket/${newElementId}`,{
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
    fetch(url + `/ticket/${newElementId}`,{
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