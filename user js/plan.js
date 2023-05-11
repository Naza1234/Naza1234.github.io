const url="https://invest-sevrer.onrender.com"
const redURL="https://nazatech.me"

const cont=document.getElementsByClassName('pla')[0]

document.getElementsByClassName('popup')[0].innerHTML=`
<svg viewBox="0 0 100 100">
<g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="6">
    <!-- left line -->
    <path d="M 21 40 V 59">
        <animateTransform
  attributeName="transform"
  attributeType="XML"
  type="rotate"
  values="0 21 59; 180 21 59"
  dur="2s"
  repeatCount="indefinite" />
    </path>
    <!-- right line -->
    <path d="M 79 40 V 59">
        <animateTransform
  attributeName="transform"
  attributeType="XML"
  type="rotate"
  values="0 79 59; -180 79 59"
  dur="2s"
  repeatCount="indefinite" />
    </path>
    <!-- top line -->
    <path d="M 50 21 V 40">
        <animate
  attributeName="d"
  values="M 50 21 V 40; M 50 59 V 40"
  dur="2s"
  repeatCount="indefinite" />
    </path>
    <!-- btm line -->
    <path d="M 50 60 V 79">
        <animate
  attributeName="d"
  values="M 50 60 V 79; M 50 98 V 79"
  dur="2s"
  repeatCount="indefinite" />
    </path>
    <!-- top box -->
    <path d="M 50 21 L 79 40 L 50 60 L 21 40 Z">
    <animate
  attributeName="stroke"
  values="rgba(255,255,255,1); rgba(100,100,100,0)"
  dur="2s"
  repeatCount="indefinite" />
    </path>
    <!-- mid box -->
    <path d="M 50 40 L 79 59 L 50 79 L 21 59 Z"/>
    <!-- btm box -->
    <path d="M 50 59 L 79 78 L 50 98 L 21 78 Z">
    <animate
  attributeName="stroke"
  values="rgba(100,100,100,0); rgba(255,255,255,1)"
  dur="2s"
  repeatCount="indefinite" />
    </path>
    <animateTransform
  attributeName="transform"
  attributeType="XML"
  type="translate"
  values="0 0; 0 -19"
  dur="2s"
  repeatCount="indefinite" />
</g>
</svg>
`
document.getElementsByClassName('popup')[0].classList.add('popup-hid')
fetch(url + "/plan")
.then((res)=>res.json())
.then((dataInfo)=>{
    dataInfo.reverse()
    document.getElementsByClassName('popup')[0].classList.remove('popup-hid')
    document.getElementsByClassName('popup')[0].innerHTML=`
    <div class="up column">
    are you show you want to add this plan
    <div class="flex row">
        <button onclick="out()">
            cancle
        </button>
        <button onclick="addplan()">
            add plan
        </button>
    </div>
</div>
    `
    dataInfo.reverse()
   for (let i = 0; i < dataInfo.length; i++) {
        var element=dataInfo[i]
     
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
        
        cont.insertAdjacentHTML('beforeend',data)
        
    }
    canStart()
})

var amount
let data ={}
function canStart(){
    var item=document.getElementsByClassName('set')
    for (let i = 0; i < item.length; i++) {
        const element = item[i];
        element.addEventListener("click",active)
    }
    
    
var newElementId
function active(event){
    var newElement=event.target
    newElementId=newElement.getElementsByClassName('hid')[0].innerHTML
    amount=Number(newElement.getElementsByClassName('p')[0].innerHTML)
    data={
        UserID:localStorage.getItem("userID"),
        PlanID:newElementId
    } 
   document.getElementsByClassName('popup')[0].classList.add('popup-hid')
}
}
function addplan(){
    document.getElementsByClassName('popup')[0].innerHTML=`
    <svg viewBox="0 0 100 100">
    <g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="6">
        <!-- left line -->
        <path d="M 21 40 V 59">
            <animateTransform
      attributeName="transform"
      attributeType="XML"
      type="rotate"
      values="0 21 59; 180 21 59"
      dur="2s"
      repeatCount="indefinite" />
        </path>
        <!-- right line -->
        <path d="M 79 40 V 59">
            <animateTransform
      attributeName="transform"
      attributeType="XML"
      type="rotate"
      values="0 79 59; -180 79 59"
      dur="2s"
      repeatCount="indefinite" />
        </path>
        <!-- top line -->
        <path d="M 50 21 V 40">
            <animate
      attributeName="d"
      values="M 50 21 V 40; M 50 59 V 40"
      dur="2s"
      repeatCount="indefinite" />
        </path>
        <!-- btm line -->
        <path d="M 50 60 V 79">
            <animate
      attributeName="d"
      values="M 50 60 V 79; M 50 98 V 79"
      dur="2s"
      repeatCount="indefinite" />
        </path>
        <!-- top box -->
        <path d="M 50 21 L 79 40 L 50 60 L 21 40 Z">
        <animate
      attributeName="stroke"
      values="rgba(255,255,255,1); rgba(100,100,100,0)"
      dur="2s"
      repeatCount="indefinite" />
        </path>
        <!-- mid box -->
        <path d="M 50 40 L 79 59 L 50 79 L 21 59 Z"/>
        <!-- btm box -->
        <path d="M 50 59 L 79 78 L 50 98 L 21 78 Z">
        <animate
      attributeName="stroke"
      values="rgba(100,100,100,0); rgba(255,255,255,1)"
      dur="2s"
      repeatCount="indefinite" />
        </path>
        <animateTransform
      attributeName="transform"
      attributeType="XML"
      type="translate"
      values="0 0; 0 -19"
      dur="2s"
      repeatCount="indefinite" />
    </g>
</svg>
    `
    fetch(url + `/user/${localStorage.getItem("userID")}`)
    .then((res)=>res.json())
    .then((data)=>{
    
        if(Number(data.UserTotalAmount)>amount ){
          var secondData={
            UserTotalAmount:Number(data.UserTotalAmount)-amount,
            UserInvestedAmount:Number(data.UserInvestedAmount)+amount
          }
          fetch(url + `/user/${localStorage.getItem("userID")}`,{
            method:'PUT',
            body: JSON.stringify(secondData),
            headers: {
                'Content-type':'application/json'
            }
        })
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data); 
            fetch(url + "/planin",{
                method:'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-type':'application/json'
                }
            })
            .then((res)=>res.json())
            .then((data)=>{
                document.getElementsByClassName('popup')[0].classList.remove('popup-hid')  
                document.getElementsByClassName('popup')[0].innerHTML=`
                <div class="up column">
                are you show you want to add this plan
                <div class="flex row">
                    <button onclick="out()">
                        cancle
                    </button>
                    <button onclick="addplan()">
                        add plan
                    </button>
                </div>
            </div>
                `
            })
        })
        }else{
            document.getElementsByClassName('popup')[0].classList.add('popup-hid')  
            document.getElementsByClassName('popup')[0].innerHTML=`
            <div class="up column">
            you are shot on balance pleas fund your account
            <div class="flex row">
                <button onclick="out()">
                    okay 
                </button>
                <button>
                <a href="./Fund.html">
                    Fund Now
                    </a>
                </button>
            </div>
        </div>
            `
        }
    })
}
function out(){
    document.getElementsByClassName('popup')[0].classList.remove('popup-hid')
}

function logout(){
    localStorage.clear()
    window.location.href=`${redURL}/login.html`
}

if (userID===null) {
    window.location.href=`${redURL}/login.html`
}