import './styles.scss'

import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';



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
const swiper = new Swiper(".swiper", {
    slidesPerView: 3,
    spaceBetween: 25,
    modules: [Navigation, Pagination],
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});


// < ========================================================== >


//favorites
const cardW = document.getElementById('winter')
const cardS = document.getElementById('spring')
const cardSu = document.getElementById('summer')
const cardA = document.getElementById('autumn')
const seasonBtnWinter = document.getElementById("winterb")
const seasonBtnSpring = document.getElementById("springb")
const seasonBtnSummer = document.getElementById("summerb")
const seasonBtnAutumn = document.getElementById("autumnb")

seasonBtnWinter.addEventListener('click', () =>{
    cardW.classList.add('active')
    cardS.classList.remove('active')
    cardSu.classList.remove('active')
    cardA.classList.remove('active')
});
seasonBtnSpring.addEventListener('click', () =>{
    cardS.classList.add('active')
    cardW.classList.remove('active')
    cardSu.classList.remove('active')
    cardA.classList.remove('active')
});
seasonBtnSummer.addEventListener('click', () =>{
    cardSu.classList.add('active')
    cardW.classList.remove('active')
    cardS.classList.remove('active')
    cardA.classList.remove('active')
});
seasonBtnAutumn.addEventListener('click', () =>{
    cardA.classList.add('active')
    cardS.classList.remove('active')
    cardSu.classList.remove('active')
    cardW.classList.remove('active')
});



// < ========================================================== >


// iconmenu

const iconBtn = document.querySelector('.header-nav-logbtn-icon-btn')
const iconMenu = document.querySelector('.header-nav-logbtn-menu')


iconBtn.addEventListener('click', () => {
    iconMenu.classList.toggle('active')
});
