const url="https://invest-sevrer.onrender.com"

loadPlans()


function edit(){
    var name=document.getElementsByTagName('input')[0].value
    var amIn=document.getElementsByTagName('input')[1].value
    var inRat=document.getElementsByTagName('input')[2].value
   
   
   
    document.getElementsByClassName('h3')[0].innerHTML=name
    document.getElementsByClassName('pl')[0].innerHTML=amIn
    document.getElementsByClassName('imgp')[0].src=inRat
}
function add(){
    document.getElementsByClassName('popup')[0].classList.add('popup-hid')

    var name=document.getElementsByTagName('input')[0].value
    var amIn=document.getElementsByTagName('input')[1].value
    var inRat=document.getElementsByTagName('input')[2].value

    var data={
        GetWaysName: name,
        GetWayAdd:amIn,
        GetWayImg:inRat
    }
    if (name && amIn && inRat) {
        fetch(url + "/payment",{
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
        })
    }
}

function loadPlans(){
    document.getElementsByClassName('popup')[0].classList.add('popup-hid')
     document.getElementsByClassName('planLest')[0].innerHTML=""
    fetch(url + "/payment")
    .then((res)=>res.json())
    .then((data)=>{
        document.getElementsByClassName('popup')[0].classList.remove('popup-hid')

        data.reverse()
       var contp=document.getElementsByClassName('planLest')[0]
       for (let i = 0; i < data.length; i++) {
        const element = data[i];
          var newData=`
          <div class="meth flex planCard column">
          <span class="flex row">
                <img src="${element.GetWayImg}" alt="">
              
                ${element.GetWaysName}
                  <h6 class="del de " onClick="deleteP()"  >
                   Delet 
                  </h6>
          </span>
          <span>
              <p>
                  ${element.GetWayAdd}
              </p>
              <p class="hid">${element._id}</p>
          </span>
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
    console.log(newItem);
    var parent=newItem.parentElement.parentElement
    id=parent.getElementsByClassName('hid')[0].innerHTML
    fetch(url + `/payment/${id}`,{
        method:'DELETE'
    })
    .then((res)=>res.json())
    .then((data)=>{
        document.getElementsByClassName('popup')[0].classList.remove('popup-hid')

        loadPlans()
    })
}

