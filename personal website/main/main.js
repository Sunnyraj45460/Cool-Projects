const button=document.querySelector('.button')
const side=document.querySelector('.side')
const a=document.querySelectorAll('a')

button.addEventListener('click',function(){
    this.classList.toggle('clicked');
    side.classList.toggle('clicked');
    a.forEach(function(item){item.classList.toggle('clicked');
})
})