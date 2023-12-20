const footerLinksBtn = document.getElementById("footerLinksBtn");
const footerLinkList = document.getElementById("footerLinkList");

const menuHamburger = document.querySelector(".menu-hamburger");
const navLinks = document.querySelector(".nav-links");

footerLinksBtn?.addEventListener("click",function(){

  if(footerLinkList.style.opacity==="0"){
    footerLinkList.style.opacity = "1";
    footerLinkList.style.scale = "1";
  }else{
    footerLinkList.style.opacity = "0";
    footerLinkList.style.scale = "0";
  }
 
});

/* if(typeof Swiper !== 'undefined'){
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
  
} */




const menuHamburgerbutton = document.getElementById('hamburgerbutton'); // Replace 'yourHamburgerButtonId' with your actual button ID
const navLinks2 = document.getElementById('navlinks'); // Replace 'yourNavLinksId' with your actual nav links container ID
const body = document.body;

let scrollEnabled = true;

menuHamburger.addEventListener('click', () => {
  navLinks.classList.toggle('mobile-menu');
  
  if (scrollEnabled) {
    body.style.overflow = 'hidden'; // Disable scrolling
    window.scrollTo(0, 0); // Scroll to the top
  } else {
    body.style.overflow = 'auto'; // Enable scrolling
  }

  scrollEnabled = !scrollEnabled; // Toggle scrollEnabled value
});




window.addEventListener('scroll', function() {
  var navbar = document.querySelector('.navbar');
  var logo = document.getElementById('logo');
  var links = document.querySelectorAll('#liste a');

  if (window.scrollY > 880) { // 400 piksel aşağı kaydırıldığında
    navbar.style.backgroundColor = '#05C15D'; // Navbar arka plan rengini değiştir
    logo.src = '/img/Logo_White_01.png'; // Logo görüntüsünü değiştir

    // Bağlantıların renglerini değiştir ve animasyon sınıfını ekle
    links.forEach(function(link) {
      navbar.classList.add('transition');
      link.style.color = '#ffffff';

    });
  } else {
    navbar.style.backgroundColor = '#05C15D'; // Başlangıç rengi
    logo.src = '/img/Logo_White_01.png'; // Logo görüntüsünü geri al

    // Bağlantıların renglerini geri al ve animasyon sınıfını kaldır
    links.forEach(function(link) {
      navbar.classList.remove('transition');
      link.style.color = '#ffffff';
  
    });
  }
});


document.getElementById('link1').addEventListener('click', function() {
  var targetOffset = 950; // Kaydırılacak hedef noktanın yüksekliği

  window.scrollTo({
    top: targetOffset,
    behavior: 'smooth' // Yumuşak geçiş efekti
  });
});
