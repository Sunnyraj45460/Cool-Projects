function parallax(e,d,s){
    const i=document.querySelector(e);
    i.style.transform=`translateY(${d*s}px)`;
}
window.addEventListener('scroll',function(){
    parallax('header',window.scrollY,1);
    parallax('.small-rose',window.scrollY,0.4);
    parallax('.big-rose',window.scrollY,0.2);
})