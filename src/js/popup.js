const menu = document.querySelector('.login')
const logMenu = document.querySelector('.login-log')
const regMenu = document.querySelector('.login-reg')
const logBtnDesk = document.querySelector('.header-nav-cont1-row-btn')
const logBtnMobile = document.getElementById('login')
const switchLog = document.getElementById("loginbtn")
const switchReg = document.getElementById("registerbtn")
const logBtn = document.querySelector(".login-log-btn")
const regBtn = document.querySelector(".login-reg-btn")
const ovlay = document.querySelector(".overlay")


logBtnDesk.addEventListener('click', () =>{
    menu.classList.add('active')
    ovlay.classList.add('active')
});

logBtnMobile.addEventListener('click', () =>{
    menu.classList.add('active')
    ovlay.classList.add('active')
});

switchReg.addEventListener('click', () =>{
    logMenu.classList.add('disabled')
    regMenu.classList.add('active')
});

switchLog.addEventListener('click', () =>{
    regMenu.classList.remove('active')
    logMenu.classList.remove('disabled')
});

ovlay.addEventListener('click', () =>{
    menu.classList.remove('active')
    ovlay.classList.remove('active')
});

logBtn.addEventListener('click', () =>{
    menu.classList.remove('active')
    ovlay.classList.remove('active')
});

regBtn.addEventListener('click', () => {
    menu.classList.remove('active')
    ovlay.classList.remove('active')
});