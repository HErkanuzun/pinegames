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
  slidesPerView: 8,
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
  var logo = document.getElementById('logo');
  var links = document.querySelectorAll('#liste a');

  if (window.scrollY > 900) { // 400 piksel aşağı kaydırıldığında
    navbar.style.backgroundColor = '#61C380'; // Navbar arka plan rengini değiştir
    logo.src = '/img/Pine_Logo_White .png'; // Logo görüntüsünü değiştir

    // Bağlantıların renglerini değiştir ve animasyon sınıfını ekle
    links.forEach(function(link) {
      navbar.classList.add('transition');
      link.style.color = '#ffffee';

    });
  } else {
    navbar.style.backgroundColor = '#eeeeee'; // Başlangıç rengi
    logo.src = '/img/Pine_Logo_Green.png'; // Logo görüntüsünü geri al

    // Bağlantıların renglerini geri al ve animasyon sınıfını kaldır
    links.forEach(function(link) {
      navbar.classList.remove('transition');
      link.style.color = '#61C380';
  
    });
  }
});


document.getElementById('link1').addEventListener('click', function() {
  var targetOffset = 900; // Kaydırılacak hedef noktanın yüksekliği

  window.scrollTo({
    top: targetOffset,
    behavior: 'smooth' // Yumuşak geçiş efekti
  });
});
