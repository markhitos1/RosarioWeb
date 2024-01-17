

const toggle = document.querySelector('.navbar-toggler');
const navbar = document.querySelector('.navbar');
const navMenu = document.querySelector('.container-fluid')
const menu = document.querySelector('.nav-item');
var tog = 0;


    toggle.addEventListener('click',function(){
        tog++
    
        if(tog == 1 ){
            navbar.style.height = '100px';
           }
         
      if(tog == 2 ){
        navbar.style.height = '50px';
        tog= 0
         }

   
})

console.log(tog)

