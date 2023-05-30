let text=document.getElementById("text")
let textarea=document.getElementById("textarea")
let btn_save=document.getElementById("btn-save")
let message=document.getElementById("message")
btn_save.onclick=function(){
    if(text.value.length ==0){
        text.style.border="1px solid red"
    }
    if(textarea.value.length == 0){
        textarea.style.border="1px solid red"
    }else{
        textarea.style.border="1px solid green"
    }
    if(text.value.length>0 && textarea.value.length>0){
        message.style.display="block"
        text.value=""
        textarea.value=""
        text.style.border="none"
        textarea.style.border="none"
        setTimeout(function(){
            message.style.display="none" 
        },3000)
    }

}
setInterval(function(){
    if(text.value.length > 0){
        text.style.border="1px solid green"
    }
    else{
        text.style.borderColor="red"
    }
    if(textarea.value.length > 0){
        textarea.style.border="1px solid green"
    }
    else{
        textarea.style.borderColor="red"
    }
}, 100);