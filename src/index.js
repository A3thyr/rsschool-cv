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
const regIconBtn = document.querySelector('.header-nav-logbtn-icon-namedbtn')
const buyBtn = document.querySelector('.favorites-books-border-book-button')
const iconMenu = document.querySelector('.header-nav-logbtn-menu')


iconBtn.addEventListener('click', () => {
    iconMenu.classList.toggle('active')
});

regIconBtn.addEventListener('click', () => {
    iconMenu.classList.toggle('active')
});




// < ========================================================== >


//pop up

const regBtn = document.getElementById('register')
const regMenu = document.querySelector('.header-nav-logbtn-regmodal')
const regClsBtn = document.querySelector('.header-nav-logbtn-regmodal-clsbtn')
const cardBtn = document.querySelector('.cards-item-getcard-buttons-button')

const loginBtn = document.getElementById('login')
const loginMenu = document.querySelector('.header-nav-logbtn-logmodal')
const loginClsBtn = document.querySelector('.header-nav-logbtn-logmodal-clsbtn')
const overlay = document.querySelector('.overlay')

regBtn.addEventListener('click', () => {
    regMenu.classList.toggle('active')
    overlay.classList.toggle('active')
});

regClsBtn.addEventListener('click', () => {
    regMenu.classList.remove('active')
    overlay.classList.remove('active')
});

loginBtn.addEventListener('click', () => {
    loginMenu.classList.toggle('active')
    overlay.classList.toggle('active')
});

loginClsBtn.addEventListener('click', () => {
    loginMenu.classList.remove('active')
    overlay.classList.remove('active')
});

buyBtn.addEventListener('click', () => {
    loginMenu.classList.toggle('active')
    overlay.classList.toggle('active')
});


cardBtn.addEventListener('click', () => {
    regMenu.classList.toggle('active')
    overlay.classList.toggle('active')
});

overlay.addEventListener('click', () => {
    regMenu.classList.remove('active')
    loginMenu.classList.remove('active')
    overlay.classList.remove('active')
});


// < ========================================================== >


//localStorage

const registerBtn = document.querySelector('.header-nav-logbtn-regmodal-forms-login')
const logInBtn = document.querySelector('.header-nav-logbtn-logmodal-forms-login')
const logoutBtn = document.getElementById('logout')

registerBtn.addEventListener('click', () => {

    let firstName = document.getElementById('firstname').value
    let lastName = document.getElementById('lastname').value
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value
    
    let cardNumber = [];
    let hexRef = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];

    for (var i = 0; i < 9; i++){
        cardNumber.push(hexRef[Math.floor(Math.random() * 16)]);
    }
    cardNumber = cardNumber.join('');


    localStorage.setItem('firstName', firstName)
    localStorage.setItem('lastName', lastName)
    localStorage.setItem('email', email)
    localStorage.setItem('password', password)
    localStorage.setItem('cardNumber', cardNumber)

    regMenu.classList.remove('active')
    overlay.classList.remove('active')



    document.querySelector('.header-nav-logbtn-icon-namedbtn').classList.add('active')
    document.querySelector('.header-nav-logbtn-icon-btn').classList.add('inactive')

    let firstNameLetter = localStorage.getItem('firstName').charAt(0).toUpperCase()
    let lastNameLetter = localStorage.getItem('lastName').charAt(0).toUpperCase()
    let lettersName = document.createTextNode(`${firstNameLetter + lastNameLetter}`)
    let iconBtnLetters = document.querySelector('.header-nav-logbtn-icon-namedbtn')

    iconBtnLetters.append(lettersName)

    document.querySelector('.header-nav-logbtn-menu-prereg').classList.remove('active')
    document.querySelector('.header-nav-logbtn-menu-reg').classList.add('active')
});

logInBtn.addEventListener('click', () => {
    let storedMail = localStorage.getItem('email')
    let storedPass = localStorage.getItem('password')
    let storedNumb = localStorage.getItem('cardNumber')

    let userEmail = document.getElementById('userEmail').value
    let userPassword = document.getElementById('userPassword').value

    if (userEmail == storedMail || userEmail == storedNumb && userPassword == storedPass){
        loginMenu.classList.remove('active')
        overlay.classList.remove('active')
        document.querySelector('.header-nav-logbtn-icon-namedbtn').classList.add('active')
        document.querySelector('.header-nav-logbtn-icon-btn').classList.add('inactive')  

        let firstNameLetter = localStorage.getItem('firstName').charAt(0).toUpperCase()
        let lastNameLetter = localStorage.getItem('lastName').charAt(0).toUpperCase()
        let lettersName = document.createTextNode(`${firstNameLetter + lastNameLetter}`)
        let iconBtnLetters = document.querySelector('.header-nav-logbtn-icon-namedbtn')

        iconBtnLetters.append(lettersName)

        document.querySelector('.header-nav-logbtn-menu-prereg').classList.remove('active')
        document.querySelector('.header-nav-logbtn-menu-reg').classList.add('active')
    } else {
        alert("Incorrect e-mail/card number or password")
    }
});

logoutBtn.addEventListener('click', () => {
    iconMenu.classList.toggle('active')
    document.querySelector('.header-nav-logbtn-icon-namedbtn').classList.remove('active')
    document.querySelector('.header-nav-logbtn-icon-btn').classList.remove('inactive')
    document.querySelector('.header-nav-logbtn-menu-prereg').classList.add('active')
    document.querySelector('.header-nav-logbtn-menu-reg').classList.remove('active')
});