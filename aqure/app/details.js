const input=document.getElementsByClassName('span')[0]
const copyNo=document.getElementsByClassName('copy')[0]

copyNo.addEventListener("click",()=>{
    input.select()
    document.execCommand("copy")
    input.classList.add('coped')
    window.getSelection().removeAllRanges()
    setTimeout(()=>{
        input.classList.remove('coped')
    },3000)
})
