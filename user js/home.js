const url="https://invest-sevrer.onrender.com"
const redURL="https://nazatech.me"

let userID=localStorage.getItem("userID")

document.getElementsByClassName('popup')[0].classList.add('popup-hid')
fetch(url + `/user/${userID}`)
.then((res)=>res.json())
.then((data)=>{
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
     if(element.UserID===userID){
        document.getElementsByClassName('conex')[0].innerHTML=""
        fetch(url + `/plan/${element.PlanID}`)
      .then((res)=>res.json())
       .then((element)=>{
        element.reverse()
        var data = `
        <div class="plan set">
        <img src="../assets/image/Golden_Coins_3d_Vector__Golden_Bitcoin_Coin_3d_Rendering__Coin__Bitcoin__Btc_PNG_Image_For_Free_Download-removebg-preview.png"  alt="">
        <span class="flex sp row">
            <h1>
                Name of plan
            </h1>
             <p>
                ${element.PlansName}
             </p>
             <p class="hid">${element._id}</p>
             <p class="p">${element.PlansAmount}</p>
        </span>
       <div class="flex row">
        <span class="flex column">
            <h1>
                amount to be used
            </h1>
             <p>
               $${element.PlansAmount}
             </p>
        </span>
        <span class="flex column">
        <h1>
        interest rate
            </h1>
            <p>
                ${element.InterestPerAI}%
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



