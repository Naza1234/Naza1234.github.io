const cont=document.getElementsByClassName('userlist')[0]
const pCont=document.getElementsByClassName('plansList')[0]
const url="https://invest-sevrer.onrender.com"




document.getElementsByClassName('popup')[0].classList.add('popup-hid')

fetch(url + "/user")
.then((res)=>res.json())
.then((dataInfo)=>{
    dataInfo.reverse()
    document.getElementsByClassName('popup')[0].classList.remove('popup-hid')

    for (let i = 0; i < dataInfo.length; i++) {
        var element=dataInfo[i]
        var data = `
        <div class="user-card flex column ">
        <img src="../assets/image/group.png" alt="">
        <h1>${element.UserName}</h1>
        <span class="flex row">
            <h2>
                Account balance
            </h2>
            <p>
            $ ${Intl.NumberFormat().format(element.UserTotalAmount)}
            </p>
            </span>

        <span class="flex row">
            <h2>
                Invested amount
            </h2>
            <p>
           $ ${Intl.NumberFormat().format(element.UserInvestedAmount)}
            </p>
            </span>
        
        </div>
        `
        
        cont.insertAdjacentHTML('beforeend',data)
    }
    
})





fetch(url + "/plan")
.then((res)=>res.json())
.then((dataInfo)=>{
    dataInfo.reverse()
    for (let i = 0; i < dataInfo.length; i++) {
        var element=dataInfo[i]
        var data = `
        <div class="plan-card flex column">
                 <h1>
                 ${element.PlansName}
                 </h1>
                 <span class="flex row">
                    <h2>
                        Amount
                    </h2>
                    <p>
                    ${element.PlansAmount}
                    </p>
                 </span>
                 <span class="flex row">
                    <h2>
                        interest rate
                    </h2>
                    <p>
                        ${element.InterestPerAI}
                    </p>
                 </span>
            </div>
        `
        
        pCont.insertAdjacentHTML('beforeend',data)
        
    }
   
})