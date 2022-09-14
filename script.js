function call(){
    
}
call()
const theme=localStorage.getItem('them')
const body=document.body
if(theme){
    var icon=document.getElementsByClassName('color-theme')[0]
    body.classList.add('dark-theme')
    if(document.body.classList.contains('dark-theme')){
        icon.src="./img/dack.png"
    }else{
        icon.src="./img/light.png"
    }
}
var redthe=localStorage.getItem('redthem')
if(redthe){
    body.classList.add('red')
   
}
var popthe=localStorage.getItem('populethem')
if(popthe){
    body.classList.add('popule')
}
var orangthe=localStorage.getItem('orangthem')
if(orangthe){
    body.classList.add('orange')
   
}
function themecolor(){
    var icon=document.getElementsByClassName('color-theme')[0]
    document.body.classList.toggle('dark-theme')
    if(document.body.classList.contains('dark-theme')){
        icon.src="./img/dack.png"
    }else{
        icon.src="./img/light.png"
    }
    if(document.body.classList.contains('dark-theme')){
        localStorage.setItem('them','active-them')
    }else{
        localStorage.removeItem('them')
    }
   }
   function thems(){
    document.getElementsByClassName('theme-row')[0].classList.toggle('theme-row-out')
}
function themsout(){
    document.getElementsByClassName('theme-row')[0].classList.remove('theme-row-out')
}
   function red(){
    themsout()
    defolt()
    document.body.classList.add('red')
    if(document.body.classList.contains('red')){
        localStorage.setItem('redthem','activethem')
    }else{
        localStorage.removeItem('redthem')
    }
    localStorage.removeItem('populethem')
    localStorage.removeItem('orangthem')
   }
   function popule(){
    defolt()
    themsout()
    document.body.classList.add('popule')
    if(document.body.classList.contains('popule')){
        localStorage.setItem('populethem','activethem')
    }else{
        localStorage.removeItem('populethem')
    }
   }
   function orang(){
    defolt()
    themsout()
    document.body.classList.add('orange')
    if(document.body.classList.contains('orange')){
        localStorage.setItem('orangthem','acivethem')
    }else{
        localStorage.removeItem('orangthem')
    }
    localStorage.removeItem('redthem')
    localStorage.removeItem('populethem')
   }
   function defolt(){
    themsout()
    document.body.classList.remove('red')
    document.body.classList.remove('popule')
    document.body.classList.remove('orange')
    removecolurthem()
   }
   function moveright() {
    document.getElementsByClassName('main-sild')[0].scrollLeft+=100
    
   }
   function moveleft() {
    document.getElementsByClassName('main-sild')[0].scrollLeft-=100
    
   }
   function removecolurthem(){
    localStorage.removeItem('redthem')
    localStorage.removeItem('populethem')
    localStorage.removeItem('orangthem')
   }
   function ulin(){
    document.getElementsByClassName('nul')[0].classList.remove('ul')
    document.getElementsByClassName('nav-bug-svg')[0].classList.remove('buggerout')
    }
    function ulout(){
        document.getElementsByClassName('nav-bug-svg')[0].classList.add('buggerout')
        document.getElementsByClassName('nul')[0].classList.add('ul')
    }
    function select(){
        document.getElementsByClassName('sector-items')[0].classList.add('selt-out')
        document.getElementsByClassName('select-img')[0].classList.add('un-set')
    }
    const items=document.getElementsByClassName('items-s')
     for(i=0;i<items.length;i++){
        let iteme=items[i]
        iteme.addEventListener('click',itemeSelect)
     }
     function itemeSelect(event){
       var   iteme=event.target
         var content=iteme.innerHTML
         document.getElementsByClassName('name')[0].textContent=content
         document.getElementsByClassName('sector-items')[0].classList.remove('selt-out')
         document.getElementsByClassName('select-img')[0].classList.remove('un-set')
     }
     function inputShow(){
        document.getElementsByClassName('search')[0].classList.toggle('show')
        document.getElementsByClassName('filter')[0].classList.remove('show')
        document.getElementsByClassName('sector-items')[0].classList.add('it')
     }
     function filterShow(){
        document.getElementsByClassName('search')[0].classList.remove('show')
        document.getElementsByClassName('filter')[0].classList.toggle('show')
        document.getElementsByClassName('sector-items')[0].classList.toggle('it')
     }
     function nomOf(){
         var no=document.getElementsByClassName('search-item-work')
         document.getElementsByClassName('no-of-works')[0].textContent=no.length
       
     }
     nomOf()
     const btnSearch=document.getElementsByClassName('sek')
     for(i=0;i<btnSearch.length;i++){
        var set=btnSearch[i]
         set.addEventListener('click',setItem)
     }
     function setItem(event){
          set=event.target
          var contName=set.textContent.toLowerCase()
        
          var contItem=document.getElementsByClassName('work-h')
          for(i=0;i<contItem.length;i++){
            var nName=contItem[i].getElementsByClassName('cart')[0]
            let textvalue=nName.textContent||nName.innerHTML
            if(textvalue.toLowerCase().indexOf(contName)>=0){
                contItem[i].classList.add('search-item-work')
                var no=document.getElementsByClassName('search-item-work')
                document.getElementsByClassName('no-of-works')[0].textContent=no.length
              }else{
                contItem[i].classList.remove('search-item-work')
              }
          }

     }
     function search(){
        const input=document.getElementsByClassName('search')[0].value.toLowerCase()
        const contItem=document.getElementsByClassName('work-h')
        for(i=0;i<contItem.length;i++){
          var nName=contItem[i].getElementsByTagName('h2')[0]
          let textvalue=nName.textContent||nName.innerHTML
          if(textvalue.toLowerCase().indexOf(input)>=0){
              contItem[i].classList.add('search-item-work')
              var no=document.getElementsByClassName('search-item-work')
              document.getElementsByClassName('no-of-works')[0].textContent=no.length
            }else{
              contItem[i].classList.remove('search-item-work')
            }
        }
     }
     function setdis(){
        var btn=document.getElementsByClassName('work-h')
        for(i=0;i<btn.length;i++){
            btn[i].classList.add('search-item-work')
            var no=document.getElementsByClassName('search-item-work')
            document.getElementsByClassName('no-of-works')[0].textContent=no.length
        }
     }
     function ero(){
        document.getElementsByClassName('popup-ero')[0].classList.add('ero')
        setTimeout(eroOut,2000)
     }
     function eroOut(){
        document.getElementsByClassName('popup-ero')[0].classList.remove('ero')
     }