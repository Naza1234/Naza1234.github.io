var red_url="http://127.0.0.1:5500"
var url="https://aquer-rest-framework.onrender.com/"

const det=document.getElementsByClassName('bugger')
const dilT=document.getElementsByClassName('dil')





for (let i = 0; i < det.length; i++) {
    const element = det[i];
    element.addEventListener("click", activeNav)
}


function activeNav(e){
    var el=e.target
    var elp=el.parentElement
    el.classList.toggle('active-bugger')
    elp.getElementsByClassName('dil')[0].classList.toggle('dil_active')
}

for (let x = 0; x < dilT.length; x++) {
    const element = dilT[x];
    element.addEventListener("click", activeDel)
}


function activeDel(e){
    var ed=e.target
    var ed=ed.parentElement
    document.getElementsByClassName("pop_up")[0].classList.add('poped')
    for (let x = 0; x < dilT.length; x++) {
        document.getElementsByClassName('dil')[x].classList.remove('dil_active')
        document.getElementsByClassName('bugger')[x].classList.remove('active-bugger')
    }
    console.log(ed);
}
function cl(){
    document.getElementsByClassName("pop_up")[0].classList.remove('poped')
}
function logOUT(){
    var info={
        username: "",
        password: "",
       }
    fetch(url + "user/logout/",{
        method:'POST',
        body: JSON.stringify(info),
        headers: {
            'Content-type':'application/json'
        }
    })
    .then((res)=>res.json())
    .then((data)=>{
    //     console.log(data);
    //     localStorage.removeItem("aqweraVendor_id")
    //   if (!localStorage.getItem("aqweraVendor_id")) {
    //     window.location=`${red_url}/Login.html`
    //   }
    })

}
var userid=localStorage.getItem("aqwireUserKey")
console.log(userid);
// fetch(url + `user`, {
//    method: 'GET',
//   headers: {
//     //   'Authorization': `Basic ${userid}`
//     //  'Authorization': `Token YWRtaW46YWRtaW4=`
//      'Authorization': `Token f0234556cdf9d91ae53450ea57a6b65ee3f0eb96`
//     // 'Authorization': `Key ${userid}`
//     //  'Authorization': `Bearer ${userid}`
//   }
//   })
// .then((res)=>res.json())
// .then((data)=>{
//     console.log(data);
//     console.log("data");
// //     localStorage.removeItem("aqweraVendor_id")
// //   if (!localStorage.getItem("aqweraVendor_id")) {
// //     window.location=`${red_url}/Login.html`
// //   }
// })
