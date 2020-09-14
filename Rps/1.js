const s=document.querySelectorAll('span')
const you=document.querySelector('.you')
const comp=document.querySelector('.comp')
const yresult=document.querySelector('.yresult')
const cresult=document.querySelector('.cresult')
var yscore=document.querySelector('.yscore')
var cscore=document.querySelector('.cscore')

let ys=0
let cs=0

s.forEach(function(i){
    i.addEventListener('click',function(e){
        c=Math.floor(Math.random()*3)
        if(c==0){c='✌'}
        else if(c==1){c='🤚'}
        else{c='✊'}
        y=e.target.textContent

        let li1=document.createElement('li')
        li1.textContent=y
        you.children[0].after(li1)

        let li2=document.createElement('li')
        li2.textContent=c
        comp.children[0].after(li2)

        yresult.textContent=''
        cresult.textContent=''

        if(c==y){return}
        if(y=='🤚'){
            if(c=='✌'){cresult.textContent='c wins' ;cs++}
            else {yresult.textContent='u wins';ys++}
        }
        if(y=='✌'){
            if(c=='✊'){cresult.textContent='c wins';cs++}
            else {yresult.textContent='u wins';ys++}
        }
        if(y=='✊'){
            if(c=='🤚'){cresult.textContent='c wins';cs++}
            else {yresult.textContent='u wins';ys++}
        }
        yscore.textContent=ys
        cscore.textContent=cs
    })
})    
