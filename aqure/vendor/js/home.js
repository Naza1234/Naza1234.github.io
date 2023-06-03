
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
