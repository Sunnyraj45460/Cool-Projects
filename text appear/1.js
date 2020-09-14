// const div=document.querySelector('.red')

// // window.addEventListener('scroll',function(){
// //     console.log(window.innerHeight)
// //     console.log(div.getBoundingClientRect().top)
// // })

// window.addEventListener('scroll',function(){
//     const r=div.getBoundingClientRect()
//     console.log(r)
// //     if(div.getBoundingClientRect().top < window.innerHeight/2){
// //         div.style.backgroundColor='blue'
// //     }
// })

// const r=p.getBoundingClientRect().top
// console.log(r)

const p=document.querySelector('p')
window.addEventListener('scroll',function(){
    if(p.getBoundingClientRect().top<window.innerHeight/1.5){
        p.classList.add('appear')
    }
    else{
        p.classList.remove('appear')
    }
})

// console.log(window.innerHeight)
// console.log(p.getBoundingClientRect().top+' top')
// console.log(p.getBoundingClientRect().bottom+' bottom')
// console.log(p.getBoundingClientRect().height)
// console.log(p.getBoundingClientRect().bottom-p.getBoundingClientRect().top)
// console.log(p.getBoundingClientRect())