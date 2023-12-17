const footerLinksBtn = document.getElementById("footerLinksBtn");
const footerLinkList = document.getElementById("footerLinkList");

const menuHamburger = document.querySelector(".menu-hamburger");
const navLinks = document.querySelector(".nav-links");

footerLinksBtn.addEventListener("click",function(){

  if(footerLinkList.style.opacity==="0"){
    footerLinkList.style.opacity = "1";
    footerLinkList.style.scale = "1";
  }else{
    footerLinkList.style.opacity = "0";
    footerLinkList.style.scale = "0";
  }
 
});

var mySwiper = new Swiper ('.swiper-container', {
  direction: 'vertical',
  effect: 'slide',
  slidesPerView: 12,
  loop: true,
   speed: 700,
  autoplay: {
      delay: 1,
      reverseDirection: false,
      disableOnInteraction: false,
  },
});



menuHamburger.addEventListener('click',()=>{
navLinks.classList.toggle('mobile-menu')
});



window.addEventListener('scroll', function() {
  var navbar = document.querySelector('.navbar');
  if (window.scrollY > 100) { // Örneğin, 100 piksel aşağı kaydırdığınızda rengi değiştirelim
    navbar.style.backgroundColor = '#50A55B'; // Yeni arka plan rengi
    document.getElementById('logo').src='/img/Pine_Logo_White .png';
  } else {
    navbar.style.backgroundColor = '#eeeeee'; // Başlangıç rengi
    document.getElementById('logo').src='/img/Pine_Logo_Green.png';
  }
});