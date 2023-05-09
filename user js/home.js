const url="http://localhost:3000"

function logout(){
    localStorage.clear()
    window.location.href="http://127.0.0.1:5500/login.html"
}
let userID=localStorage.getItem("userID")
console.log(userID);

fetch(url + `/user/${userID}`)
.then((res)=>res.json())
.then((data)=>{
   console.log(data);
   document.getElementsByClassName('cap')[0].textContent=data.UserName
   document.getElementsByClassName('money')[0].innerHTML=`
    <div class="flex row">
            <h1>
                total amount in account($)
            </h1>
            <p>
                ${data.UserTotalAmount}
            </p>
        </div>

        <div class="flex row">
            <h1>
                total amount withdraw($)
            </h1>
            <p>
                ${data.UserTotalWithdraw}
            </p>
        </div>

        <div class="flex row">
            <h1>
                total amount invested($)
            </h1>
            <p>
                ${data.UserInvestedAmount}
            </p>
        </div>

        <div class="flex row">
            <h1>
                total amount gained($)
            </h1>
            <p>
                ${data.UserTotalIncome}
            </p>
        </div>
   `
   
})

if (userID===null) {
    window.location.href="http://127.0.0.1:5500/login.html"
}