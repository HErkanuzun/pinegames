const footerLinksBtn = document.getElementById("footerLinksBtn");
const footerLinkList = document.getElementById("footerLinkList");


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
})