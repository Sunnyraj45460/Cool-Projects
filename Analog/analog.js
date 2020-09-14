const s=document.querySelector('.s')
const m=document.querySelector('.m')
const h=document.querySelector('.h')

setInterval(f,1000)

function f(){
    var t=new Date
    var a=t.getSeconds()/60
    var b=(t.getMinutes()+a)/60
    var c=(t.getHours()+b)/12

    s.style.transform='rotate('+a*360+'deg)'
    m.style.transform='rotate('+b*360+'deg)'
    h.style.transform='rotate('+c*360+'deg)'
}

f()
