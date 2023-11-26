import './styles.scss'


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

//carousel

const slides = document.querySelector('.about-img-img1')
const wrapper = document.querySelector('.about-img')

let curSlide = 0;
let maxSlide = slides.length - 1;


const nextSlide = document.querySelector('.about-img-arrowright')
const prevSlide = document.querySelector('.about-img-arrowleft')
const owlBtnDesk = document.querySelector('.about-ping-ul')

owlBtnDesk.addEventListener('click', e =>{
    if (e.target.nodeName === 'LI'){
        Array.from(owlBtnDesk.children).forEach(item => 
            item.classList.remove('active')    
        );
        if (e.target.id === 'first'){
            wrapper.style.transform = "translateX(-0%)";
            e.target.classList.add('active');
        } else if (e.target.id === 'second') {
            wrapper.style.transform = "translateX(-34%)";
            e.target.classList.add('active');
        } else if (e.target.id === 'third') {
            wrapper.style.transform = "translateX(-68%)";
            e.target.classList.add('active'); 
        }
    }
});

nextSlide.addEventListener('click', () =>{
    
    if (curSlide === maxSlide){
        curSlide = 0;
    } else {
        curSlide++;
    }
   
    slides.forEach((slide,indx) =>{
        slide.style.transform = `translateX(${20 * (indx - curSlide)}%)`;
    });

});

prevSlide.addEventListener('click', () => {
    if (curSlide === 0){
        curSlide = maxSlide;
    } else {
        curSlide--;
    }

    slides.forEach((slide,indx) =>{
        slide.style.transform = `translateX(${20 * (indx - curSlide)}%)`;
    });
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
const cardRegBtn = document.getElementById('cardSignUp')
const buyCardMenu = document.querySelector('.buycardmenu')
const loginBtn = document.getElementById('login')
const loginMenu = document.querySelector('.header-nav-logbtn-logmodal')
const loginClsBtn = document.querySelector('.header-nav-logbtn-logmodal-clsbtn')
const profMenu = document.querySelector('.profile')
const myProfBtn = document.getElementById('myprofile')
const cardProfBtn = document.querySelector('.cards-item-visitprofile-buttons-button')
const profMenuCls = document.querySelector('.profile-content-clsbtn')
const buyCardMenuClsBtn = document.querySelector('.buycardmenu-top-clsbtn')
const cardLogBtn = document.getElementById('cardLogIn')
const buyBtn = document.querySelectorAll('.favorites-books-border-book-button')
const overlay = document.querySelector('.overlay')

regBtn.addEventListener('click', () => {
    regMenu.classList.toggle('active')
    overlay.classList.toggle('active')
    iconMenu.classList.remove('active')
});

regClsBtn.addEventListener('click', () => {
    regMenu.classList.remove('active')
    overlay.classList.remove('active')
});

loginBtn.addEventListener('click', () => {
    loginMenu.classList.toggle('active')
    overlay.classList.toggle('active')
    iconMenu.classList.remove('active')
});

loginClsBtn.addEventListener('click', () => {
    loginMenu.classList.remove('active')
    overlay.classList.remove('active')
});

buyBtn.forEach(button => {
    button.addEventListener('click', () =>{
        if (!(document.querySelector('.header-nav-logbtn-icon-namedbtn').classList.contains('active'))){ 
            loginMenu.classList.toggle('active')
            overlay.classList.toggle('active')
        } else{
            return 0;
        }  
    });
});

buyBtn.forEach(button => {
    button.addEventListener('click', () =>{
        if ((document.querySelector('.header-nav-logbtn-icon-namedbtn').classList.contains('active'))){ 
            buyCardMenu.classList.toggle('active')
            overlay.classList.toggle('active')
        } else{
            return 0;
        }  
    });
});

buyCardMenuClsBtn.addEventListener('click', () =>{
    buyCardMenu.classList.remove('active')
    overlay.classList.remove('active')
});

myProfBtn.addEventListener('click', () => {
    profMenu.classList.add('active')
    overlay.classList.add('active')
    iconMenu.classList.remove('active')
});

cardProfBtn.addEventListener('click', () => {
    profMenu.classList.add('active')
    overlay.classList.add('active')
});

profMenuCls.addEventListener('click', () => {
    profMenu.classList.remove('active')
    overlay.classList.remove('active')
});

cardRegBtn.addEventListener('click', () => {
    regMenu.classList.toggle('active')
    overlay.classList.toggle('active')
});

cardLogBtn.addEventListener('click', () => {
    loginMenu.classList.toggle('active')
    overlay.classList.toggle('active')
});

overlay.addEventListener('click', () => {
    regMenu.classList.remove('active')
    buyCardMenu.classList.remove('active')
    loginMenu.classList.remove('active')
    profMenu.classList.remove('active')
    overlay.classList.remove('active')
});


// < ========================================================== >


//localStorage & validation

const registerBtn = document.querySelector('.header-nav-logbtn-regmodal-forms-login')
const logInBtn = document.querySelector('.header-nav-logbtn-logmodal-forms-login')
const logoutBtn = document.getElementById('logout')

registerBtn.addEventListener('click', () => {

    let firstName = document.getElementById('firstname').value
    let lastName = document.getElementById('lastname').value
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value
    let visits = 0;
    let books = 0;
    
    let cardNumber = [];
    let hexRef = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

    for (var i = 0; i < 9; i++){
        cardNumber.push(hexRef[Math.floor(Math.random() * 16)]);
    }
    cardNumber = cardNumber.join('');


    localStorage.setItem('firstName', firstName)
    localStorage.setItem('lastName', lastName)
    localStorage.setItem('email', email)
    localStorage.setItem('password', password)
    localStorage.setItem('cardNumber', cardNumber)
    localStorage.setItem('visits', visits)
    localStorage.setItem('books', books)

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
        let readName = localStorage.getItem('firstName') + ' ' + localStorage.getItem('lastName')
        let iconProfLetters = document.querySelector('.profile-bg-icon-letters')
        let profName = document.querySelector('.profile-bg-icon-name-title')
        let profCardNum = document.querySelector('.profile-content-cardinfo-number')
        let visits = localStorage.getItem('visits')
        let visitsCount = document.querySelector('.profile-content-info-visits-span')
        let visitsCountCard = document.querySelector('.cards-item-find-border-profile-visits-span')
        let letName = document.createTextNode(`${firstNameLetter + lastNameLetter}`);
        
        visits = +visits;
        visits += 1;

        localStorage.setItem('visits',visits)

        iconProfLetters.append(lettersName);
        iconBtnLetters.append(letName);
        profName.append(readName);
        profCardNum.append(storedNumb);
        visitsCount.append(visits);
        visitsCountCard.append(visits);

        document.querySelector('.header-nav-logbtn-menu-prereg').classList.remove('active')
        document.querySelector('.header-nav-logbtn-menu-reg').classList.add('active')

        document.querySelector('.cards-item-getcard').classList.add('disabled')
        document.querySelector('.cards-item-visitprofile').classList.add('active')

        
        document.getElementById('firstName').value = readName;
        document.getElementById('cardNumber').value = storedNumb;
        chkCardBtn.classList.add('disabled')
        readInfo.classList.add('active')


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
    document.querySelector('.cards-item-getcard').classList.remove('disabled')
    document.querySelector('.cards-item-visitprofile').classList.remove('active')
});


// < ========================================================== >


//checkcard

const chkCardBtn = document.querySelector('.cards-item-find-border-button')
const readInfo = document.querySelector('.cards-item-find-border-profile')


chkCardBtn.addEventListener('click', () =>{
    let storedName = localStorage.getItem('firstName')
    let storedNumb = localStorage.getItem('cardNumber')

    let readCard = document.getElementById('cardNumber').value
    let readName = document.getElementById('firstName').value

    if (readCard == storedNumb && readName == storedName && !(document.querySelector('.header-nav-logbtn-icon-namedbtn').classList.contains('active'))){
        chkCardBtn.classList.add('disabled')
        readInfo.classList.add('active')
    }

    function delay(){
        chkCardBtn.classList.remove('disabled')
        readInfo.classList.remove('active')
    }

    setTimeout(delay, 10000);
});


// < ========================================================== >


//buy card modal popup





// < ========================================================== >


//copy button

const copyBtn = document.querySelector('.profile-content-cardinfo-copy')


copyBtn.addEventListener('click', () => {
    let cardNumber = localStorage.getItem('cardNumber')
    navigator.clipboard.writeText(cardNumber)
});