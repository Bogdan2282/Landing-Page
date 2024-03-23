import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';

// init Swiper:
const swiper = new Swiper('.swiper', {
  // Optional parameters
  
  loop: true,
  parallax:true,
  speed: 5000,
  touchRatio: 0.5,
  slidesPerView: 3,
  autoplay:{
    delay: 0,
  }
});