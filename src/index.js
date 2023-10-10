import './styles.scss'

import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



const menu = document.querySelector(".header-nav-list")
const menuBtn = document.querySelector(".header-nav-logbtn-burgerbtn")
const menuBtnClose = document.querySelector(".header-nav-list-buttons-exit")

if (menu && menuBtn && menuBtnClose){
    menuBtn.addEventListener('click', () =>{
        menu.classList.toggle('active')
        menuBtn.classList.toggle('active')
    })
    menuBtnClose.addEventListener('click', () =>{
        menu.classList.toggle('active')
        menuBtnClose.classList.toggle('active')
    })

    menu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.toggle('active')
            menuBtnClose.classList.toggle('active')
        })
    })
}

// < ========================================================== >

// init Swiper:
const swiper = new Swiper(".about-img-items", {
    slidesPerView: 3,
    spaceBetween: 25,
    modules: [Navigation, Pagination],
    pagination: {
      el: ".about-ping-ul",
      clickable: true
    },
    navigation: {
      nextEl: ".about-img-arrowright",
      prevEl: ".about-img-arrowleft"
    }
  });