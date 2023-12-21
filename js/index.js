const footerLinksBtn = document.getElementById("footerLinksBtn");
const footerLinkList = document.getElementById("footerLinkList");

const menuHamburger = document.querySelector(".menu-hamburger");
const navLinks = document.querySelector(".nav-links");

app.get('*', function(req, res) {
  res.redirect('/pages/404.html');
});
const izinliDosyalar = [
  '/index.html',
  '/pages/apply.html',
  '/pages/calisan-kabul.html',
  '/pages/Careers.html',
  '/pages/Privacy.html',
  '/pages/terms.html',
  '/pages/404.html',
  // Yönlendirmek istediğiniz diğer izinli dosyaları ekleyin
];

const yonlendir404 = () => {
  const currentPath = window.location.pathname;

  // Mevcut yolun izinli dosyalar içinde olup olmadığını kontrol eder
  const izinliErisim = izinliDosyalar.includes(currentPath);

  // Eğer izin verilen dosyalardan biri değilse 404 sayfasına yönlendirilir
  if (!izinliErisim) {
    window.location.href = '/pages/404.html';
  }
};

document.addEventListener('DOMContentLoaded', yonlendir404);

document.addEventListener('DOMContentLoaded', yonlendir404);

document.addEventListener('DOMContentLoaded', yonlendir404);


document.addEventListener('DOMContentLoaded', yonlendir404);

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
    logo.src = 'img/Logo_White_01.png'; // Logo görüntüsünü değiştir

    // Bağlantıların renglerini değiştir ve animasyon sınıfını ekle
    links.forEach(function(link) {
      navbar.classList.add('transition');
      link.style.color = '#ffffff';

    });
  } else {
    navbar.style.backgroundColor = '#05C15D'; // Başlangıç rengi
    logo.src = 'img/Logo_White_01.png'; // Logo görüntüsünü geri al

    // Bağlantıların renglerini geri al ve animasyon sınıfını kaldır
    links.forEach(function(link) {
      navbar.classList.remove('transition');
      link.style.color = '#ffffff';
  
    });
  }
});


document.getElementById('link1').addEventListener('click', function() {
  var targetOffset =700; // Kaydırılacak hedef noktanın yüksekliği

  window.scrollTo({
    top: targetOffset,
    behavior: 'smooth' // Yumuşak geçiş efekti
  });
});
document.getElementById('link2').addEventListener('click', function() {
  var targetOffset =600; // Kaydırılacak hedef noktanın yüksekliği

  window.scrollTo({
    top: targetOffset,
    behavior: 'smooth' // Yumuşak geçiş efekti
  });
});
