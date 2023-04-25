const menuBtn=document.querySelector('.menu-btn');
const header=document.querySelector('.header');


menuBtn.addEventListener('click',function(){
    console.log("Button clicked!")
    header.classList.toggle('nav-open');

})