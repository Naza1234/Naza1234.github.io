const url="https://invest-sevrer.onrender.com"
loadPlans()

function edit(){
    var name=document.getElementsByTagName('input')[0].value
    var amIn=document.getElementsByTagName('input')[1].value
    var inRat=document.getElementsByTagName('input')[2].value
   
   
   
    var cont=document.getElementsByClassName('plan-priv')[0]


    cont.getElementsByTagName('h1')[0].innerHTML=name
    cont.getElementsByTagName('p')[0].innerHTML="$" + new Intl.NumberFormat().format(amIn)
    cont.getElementsByTagName('p')[1].innerHTML=new Intl.NumberFormat().format(inRat) + "%"
}


function add(){
    document.getElementsByClassName('popup')[0].classList.add('popup-hid')

    var name=document.getElementsByTagName('input')[0].value
    var amIn=document.getElementsByTagName('input')[1].value
    var inRat=document.getElementsByTagName('input')[2].value

    var data={
        PlansName: name,
        PlansAmount:amIn,
        InterestPerAI:inRat
    }
    if (name && amIn && inRat) {
        fetch(url + "/plan",{
            method:'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type':'application/json'
            }
        })
        .then((res)=>res.json())
        .then((data)=>{
            document.getElementsByClassName('popup')[0].classList.remove('popup-hid')
            loadPlans()
           console.log(data);
        })
    }
}


function loadPlans(){
    document.getElementsByClassName('popup')[0].classList.add('popup-hid')
    document.getElementsByClassName('planLest')[0].innerHTML=""
    fetch(url + "/plan")
    .then((res)=>res.json())
    .then((data)=>{
        document.getElementsByClassName('popup')[0].classList.remove('popup-hid')
        data.reverse()
        document.getElementsByClassName('lenth')[3].innerHTML=data.length
       var contp=document.getElementsByClassName('planLest')[0]
       for (let i = 0; i < data.length; i++) {
        const element = data[i];
        var newData=`
        <div class="plan-card planCard flex column">
                  
        <span class="flex row">
           <h2>
               ${element.PlansName}
           </h2>
           <h6 class="del" onclick="deleteP()">
               delete
           </h6>
        </span>
        <span class="flex row">
           <h2>
               Amount
           </h2>
           <p>
               $ ${element.PlansAmount}
           </p>
        </span>
         <span class="flex row">
            <h2>
                interest rate
            </h2>
            <p>
                ${element.InterestPerAI}%
            </p>
            
            
            </span>
            <p class="hid">${element._id}</p>
    </div>
        `
        contp.insertAdjacentHTML('beforeend',newData)
       }
    })
}



function deleteP(){
    
    var items=document.getElementsByClassName("planCard")
    for (let i = 0; i < items.length; i++) {
        const element = items[i];
        element.addEventListener('click',active)
    }
}
var id=""
function active(event){
    document.getElementsByClassName('popup')[0].classList.add('popup-hid')
    var newItem=event.target
    var parent=newItem.parentElement.parentElement
    id=parent.getElementsByClassName('hid')[0].innerHTML
    fetch(url + `/plan/${id}`,{
        method:'DELETE'
    })
    .then((res)=>res.json())
    .then((data)=>{
        document.getElementsByClassName('popup')[0].classList.remove('popup-hid')
        loadPlans()
    })
}

