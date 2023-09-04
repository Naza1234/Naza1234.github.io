const input=document.getElementsByClassName('el')[0]
const copyNo=document.getElementsByClassName('copy')[0]

copyNo.addEventListener("click",()=>{
    console.log("yes");
    input.select()
    document.execCommand("copy")
    window.getSelection().removeAllRanges()
})
