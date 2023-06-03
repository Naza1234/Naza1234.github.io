function seeProf(){
    document.getElementsByClassName("prof_cont")[0].classList.toggle('pro_active') 
    document.getElementsByClassName("dit")[0].classList.remove('dit_active') 
    document.getElementsByClassName("upd")[0].innerHTML=``
    document.getElementsByClassName("spa")[0].innerHTML=`
    <p>
        account Balance
    </p>
   <h1>10,000</h1>
  `
}
function edit(){
    console.log("done");
    document.getElementsByClassName("dit")[0].classList.add('dit_active') 
    document.getElementsByClassName("spa")[0].innerHTML=`
                    <p>
                        account Balance
                    </p>
                   <h1>10,000</h1>
                   <button>
                    TopUp
                   </button>`
    document.getElementsByClassName("upd")[0].innerHTML=`
    <button>
    cancel
   </button>

   <button>
    update
   </button>
    `
 }