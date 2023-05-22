// const url="http://localhost:3000"
const url="https://invest-sevrer.onrender.com"

const cont=document.getElementsByClassName('fundList')[0]
const contp=document.getElementsByClassName('pdit')[0]


start()


function start(){
    document.getElementsByClassName('popup')[0].classList.add('popup-hid')
    cont.innerHTML=""
    
    fetch(url + "/userid")
    .then((res)=>res.json())
    .then((dataInfo)=>{
        console.log(dataInfo);
       dataInfo.reverse()
       document.getElementsByClassName('popup')[0].classList.remove('popup-hid')
        for (let i = 0; i < dataInfo.length; i++) {
            var element=dataInfo[i]
            var data = `
            <div class="${!element.Seen?"red fond-req freq row flex":"fond-req freq row flex"} ">
            <span class="flex row">
                <p>
                    ${element.IDName}
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
var us_id
var newElement
var mail
var uname
function active(event){
    document.getElementsByClassName('popup')[0].classList.add('popup-hid')
     newElement=event.target.parentElement
    newElementId=newElement.getElementsByClassName('hid')[0].innerHTML
    fetch(url + `/userid/${newElementId}`)
    .then((res)=>res.json())
    .then((data)=>{
        
      us_id=data.User_id
        console.log(data);
        fetch(url + `/user/${data.User_id}`)
        .then((res)=>res.json())
        .then((newdata)=>{
            document.getElementsByClassName('popup')[0].classList.remove('popup-hid')
           mail=newdata.UserEmail
           uname=newdata.UserName
            console.log(newdata);
            console.log(data.IDurl)
            var html=`
            <img src="${data.IDurl}" alt="" class="idimg">

            <span class="flex row">
             <h2>
                 Name
             </h2>
             <p>
              ${newdata.UserName}
             </p>
          </span>
 
            <span class="flex row">
             <h2>
                 Email
             </h2>
             <p>
               ${newdata.UserEmail}
             </p>
          </span>
            <div class="flex row">
           <button onClick="deleteP()">
             declined
           </button>
           <button onClick="update()">
             confirmed
           </button>
            </div>
            `
            console.log(data);
            contp.innerHTML=html
            
        })
    })
}


function deleteP(){
    document.getElementsByClassName('popup')[0].classList.add('popup-hid')
    var data={
        email:mail,
        name:uname
    }
    fetch(url + "/email/not_confirmed",{
        method:'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-type':'application/json'
        }
    })
    .then((res)=>res.json())
    .then((data)=>{
        contp.innerHTML=""
        var newData={
            IDsent:false
        }
        console.log(url + `/user/${us_id}`);
        fetch(url + `/user/${us_id}`,{
            method:'PUT',
            body: JSON.stringify(newData),
            headers: {
                'Content-type':'application/json'
            }
        }
        )
        .then((res)=>res.json())
        .then((data)=>{
            fetch(url + `/userid/${newElementId}`,{
                method:'DELETE'
            })
            .then((res)=>res.json())
            .then((data)=>{
                document.getElementsByClassName('popup')[0].classList.remove('popup-hid')
            })
            start() 
        })
    })
}

function update() {
    document.getElementsByClassName('popup')[0].classList.add('popup-hid')
    console.log(newElementId);
    console.log(mail);
    var data={
        email:mail,
        name:uname
    }
    fetch(url + "/email/confirmed",{
        method:'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-type':'application/json'
        }
    })
    .then((res)=>res.json())
    .then((data)=>{
        contp.innerHTML=""
        var newData={
            IDalt:true
        }
        console.log(url + `/user/${us_id}`);
        fetch(url + `/user/${us_id}`,{
            method:'PUT',
            body: JSON.stringify(newData),
            headers: {
                'Content-type':'application/json'
            }
        }
        )
        .then((res)=>res.json())
        .then((data)=>{
          var  iData={
                Seen:true
            }
            fetch(url + `/userid/${newElementId}`,{
                method:'PUT',
                body: JSON.stringify(iData),
                headers: {
                    'Content-type':'application/json'
                }
            }
            )
            .then((res)=>res.json())
            .then((data)=>{
                start() 
            })
        })
    })
}