

setInterval(()=>
{
let element=document.querySelector(".clock")
const sound=document.querySelector(".audio")
const time=new Date()

const option={
    timeZone:'Asia/Islamabad',
    hour:'2-digit',
    minutes:'2-digit',
    second:'2-digit',
}
element.textContent=time.toLocaleTimeString(option)
sound.play();

},1000)

