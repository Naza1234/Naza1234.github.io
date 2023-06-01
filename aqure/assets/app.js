var re_url="http://127.0.0.1:5500"

var  searchItem= document.getElementsByClassName('search')[0]





function cate () {
    document.getElementsByClassName('con')[0].classList.toggle('con_out')
}
function activeNav(){
    document.getElementsByClassName('bugger')[0].classList.toggle('active-bugger')
    document.getElementsByClassName('ul')[0].classList.toggle('ul_active')
}
function search(){
    document.getElementsByClassName('div')[0].classList.toggle('div_active')
    if(document.getElementsByClassName('div')[0].classList.contains('div_active')){
        document.getElementsByClassName('sine')[0].src="../assets/image/cancel.png"
    }else{
        document.getElementsByClassName('sine')[0].src="../assets/image/search 1.png"
    }
}

searchItem.addEventListener("keyup",(e)=>{
    localStorage.setItem("searchedItem",searchItem.value)
  if(e.keyCode===13){
    window.location=`${re_url}/pages/results.html`
  }
})

const items=document.getElementsByClassName('item')

for (let i = 0; i < items.length; i++) {
    const element = items[i];
    element.addEventListener("click",()=>{
        window.location=`${re_url}/pages/details.html`
    })
}