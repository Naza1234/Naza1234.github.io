const url="https://invest-sevrer.onrender.com"
const redURL="https://nazatech.me"

let userID=localStorage.getItem("userID")
var UserName
console.log(userID);
document.getElementsByClassName('popup')[0].classList.add('popup-hid')
document.getElementsByClassName('over')[0].classList.add('popup-hid')
fetch(url + `/user/${userID}`)
.then((res)=>res.json())
.then((data)=>{
    if(data.IDsent){
        var html =`
        <h1>
        ${data.UserName}
      </h1>
      <p>
        your ID is under verification by our admins. Pleas check your email if any confirmation mail has been sent.
      </p>
        `
         document.getElementsByClassName('idault')[0].innerHTML=html
        }
        if(data.IDalt){
        document.getElementsByClassName('idault')[0].classList.add('hid')
      }
    UserName=data.UserName
   document.getElementsByClassName('over')[0].classList.remove('popup-hid')
   document.getElementsByClassName('popup')[0].classList.remove('popup-hid')
   document.getElementsByClassName('cap')[0].textContent=data.UserName
   document.getElementsByClassName('money')[0].innerHTML=`
    <div class="flex row">
            <h1>
                total amount in account($)
            </h1>
            <p>
                ${Intl.NumberFormat().format(data.UserTotalAmount)}
            </p>
        </div>

        <div class="flex row">
            <h1>
                total amount withdraw($)
            </h1>
            <p>
                ${Intl.NumberFormat().format(data.UserTotalWithdraw)}
            </p>
        </div>

        <div class="flex row">
            <h1>
                total amount invested($)
            </h1>
            <p>
                ${Intl.NumberFormat().format(data.UserInvestedAmount)}
            </p>
        </div>

        <div class="flex row">
            <h1>
                total amount gained($)
            </h1>
            <p>
                ${Intl.NumberFormat().format(data.UserTotalIncome)}
            </p>
        </div>
   `
   
})
fetch(url + `/planin`)
.then((res)=>res.json())
.then((data)=>{
    data.reverse()
   for (let i = 0; i < data.length; i++) {
    const element = data[i]
    console.log(element.UserID);
     if(element.UserID===userID){
        document.getElementsByClassName('conex')[0].innerHTML=""
        fetch(url + `/plan/${element.PlanID}`)
      .then((res)=>res.json())
       .then((newdatap)=>{
        var data = `
        <div class="plan set">
        <img src="../assets/image/Golden_Coins_3d_Vector__Golden_Bitcoin_Coin_3d_Rendering__Coin__Bitcoin__Btc_PNG_Image_For_Free_Download-removebg-preview.png"  alt="">
        <span class="flex sp row">
            <h1>
                Name of plan
            </h1>
             <p>
                ${newdatap.PlansName}
             </p>
             <p class="hid">${newdatap._id}</p>
             <p class="p">${newdatap.PlansAmount}</p>
        </span>
       <div class="flex row">
        <span class="flex column">
            <h1>
                amount to be used
            </h1>
             <p>
               $${newdatap.PlansAmount}
             </p>
        </span>
        <span class="flex column">
        <h1>
        interest rate
            </h1>
            <p>
                ${newdatap.InterestPerAI}%
             </p>
        </span>
       </div>
     </div>
        `
        
        document.getElementsByClassName('conex')[0].insertAdjacentHTML('beforeend',data)
       })
       
     }
   }
})


function logout(){
    localStorage.clear()
    window.location.href=`${redURL}/login.html`
}

if (userID===null) {
    window.location.href=`${redURL}/login.html`
}


var uplaodButton=document.getElementsByTagName('input')[0]
var image=document.getElementsByClassName('imgup')[0]
var imgname=document.getElementsByClassName('nameid')[0]

 uplaodButton.onchange = ()=>{
    document.getElementsByClassName('imgup')[0].classList.remove('error')
     let reader= new FileReader()
     reader.readAsDataURL(uplaodButton.files[0])
     reader.onload = () => {
        image.setAttribute("src",reader.result)
     }
    imgname.innerHTML=uplaodButton.files[0].name
 }

 function ver(){
    var uplaodButton=document.getElementsByTagName('input')[0]
    if (uplaodButton.files[0]===undefined) {
        console.log("upload");
        document.getElementsByClassName('imgup')[0].classList.add('error')
    }else{
        document.getElementsByClassName('over')[0].classList.add('popup-hid')
        var file={
            image:uplaodButton.files[0],
            fileNmae:UserName + " " + "ID",
            user_id:userID
        }
        const formData= new FormData()
        formData.append('image',uplaodButton.files[0])
        formData.append("fileNmae",UserName + " " + "ID")
        formData.append("user_id", userID )
        for(item of formData){
            console.log(item[0],item[1]);
        }
        fetch(url + "/userid",{
            method:'POST',
            body:formData,
        })
        .then((res)=>res.json())
        .then((data)=>{
            var info ={
                IDsent:true
            }
            fetch(url + `/user/${userID}`,{
                method:'PUT',
                body: JSON.stringify(info),
                headers: {
                    'Content-type':'application/json'
                }
            })
            .then((res)=>res.json())
            .then((data)=>{
                var html =`
                <h1>
                ${data.UserName}
              </h1>
              <p>
                your ID is under verification by our admins. Pleas check your email if any confirmation mail has been sent.
              </p>
                `
                document.getElementsByClassName('idault')[0].innerHTML=html
                document.getElementsByClassName('over')[0].classList.remove('popup-hid')
            })
            console.log(data)
        })
    }
 }