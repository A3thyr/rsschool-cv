import './styles.scss'

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

const carousel = document.querySelector('.about-img');
const carouselBtn = document.querySelectorAll('.about-ping-ul-button');
const carouselItem = document.querySelectorAll('.about-img-img1');
const prev = document.querySelector('.about-img-arrowleft')
const next = document.querySelector('.about-img-arrowright')

let active = 0;
let lengthItem = carousel.length - 1;

next.onclick = function(){
    if(active + 1 > lengthItem) {
        active = 0;
    } else{
        active = active + 1;
    }
    reloadSlider();
}

function reloadSlider (){
    let leftCheck = items[active].offsetLeft
    list.style.left = -leftCheck + 'px'

    let lastActiveBtn = document.querySelector('.about-ping-ul-button .active');
    lastActiveBtn.classList.remove('active');
    carouselBtn.classList.add('active');
}