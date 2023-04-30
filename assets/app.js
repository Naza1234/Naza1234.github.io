const pupUpButton=document.getElementsByClassName("btn")
const pupUpButon=document.getElementsByClassName("wallet")
const popUp=document.getElementsByClassName("pop-up")[0]
const Cover=document.getElementsByClassName("cover")[0]
const info=document.getElementsByClassName("look")[0]




for ( i= 0; i < pupUpButton.length; i++) {
    const element = pupUpButton[i];
    element.addEventListener('click',popup)
  
}

function popup() {
    popUp.classList.add('pop-up-out')
   
}

Cover.addEventListener('click',() =>{
    popUp.classList.remove('pop-up-out')
    info.innerHTML=`
    <div class="loadin">
    <div></div>
    <div></div>
    <div></div>
  </div>
  <div class="loadin">
    <img src="done" alt="" class="img">
    <h2 class="name1">wallet</h2>
  </div>
  <p>
    connecting... please wait
  </p>
    `
})

for ( i= 0; i < pupUpButon.length; i++) {
    var element = pupUpButon[i];
    element.addEventListener('click',active)
}
let img=""
let nam=""
let locname=""
function active(event){
  info.innerHTML=`
    <div class="loadin">
    <div></div>
    <div></div>
    <div></div>
  </div>
  <div class="loadin">
    <img src="done" alt="" class="img">
    <h2 class="name1">wallet</h2>
  </div>
  <p>
    connecting... please wait
  </p>
    `
    btn=element
    btn=event.target
     img=btn.getElementsByTagName("img")[0].src;
     nam=btn.getElementsByTagName("h2")[0].textContent;
    var img2=img
    var nam2=nam
    var imgIn=document.getElementsByClassName("img")[0]
    imgIn.src=img2
    console.log(img2,nam2);
    console.log(imgIn.src,nam2);
    document.getElementsByClassName("name1")[0].innerHTML=nam
    setTimeout(change,6000)
    locname=nam2
    localStorage.setItem("textvalue",locname)
 }
function change(){
    info.innerHTML=`
    <h1>
    Request Timeout
</h1>
<p>
    error establishing connection
</p>
<a href="/manual connection.htm">
  <button>  connect manually </button>
</a> 
`
}
function search(){
    const input=document.getElementsByClassName('search')[0].value.toLowerCase()
    const contItem=document.getElementsByClassName('wallet')
    for(i=0;i<contItem.length;i++){
      var nName=contItem[i].getElementsByTagName('h2')[0]
      let textvalue=nName.textContent||nName.innerHTML
      if(textvalue.toLowerCase().indexOf(input)>=0){
          contItem[i].classList.add('see')
        }else{
          contItem[i].classList.remove('see')
        }
    }
 }
