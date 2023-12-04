import './styles.scss'

const menu = document.querySelector(".header-nav-list")
const menuBtn = document.querySelector(".header-nav-logbtn-burgerbtn")
const menuBtnClose = document.querySelector(".header-nav-list-buttons-exit")



if (menu && menuBtn && menuBtnClose){
    menuBtn.addEventListener('click', () =>{
        menu.classList.toggle('active')
        menuBtn.classList.toggle('active')
        overlay.classList.toggle('active')
    })
    menuBtnClose.addEventListener('click', () =>{
        menu.classList.toggle('active')
        menuBtnClose.classList.toggle('active')
        overlay.classList.toggle('active')
    })

    menu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.toggle('active')
            menuBtnClose.classList.toggle('active')
            overlay.classList.toggle('active')
        })
    })
}


// < ========================================================== >

//carousel

const wrapper = document.querySelector('.about-img-cont-wrap')

const slides = [...wrapper.children]

let slideWidth = slides[0].getBoundingClientRect().width + 475

function positionSlides(slides){
    for(let index = 0; index < slides.length; index++){
        slides[index].style.left = slideWidth * index + "px";
    }
}

positionSlides(slides);

function moveToSlide(wrapper, currentSlide, targetSlide){
    const position = targetSlide.style.left;
    wrapper.style.transform = `translateX(-${position})`;
    toggleActive(currentSlide, targetSlide);
}

function toggleActive(current, target){
    current.classList.remove('active');
    target.classList.add('active');
}

function hideButton(targetSlide, slides){
    if(targetSlide === slides[0]){
        prevSlide.classList.add('hidden');
        nextSlide.classList.remove('hidden');
    } else if (targetSlide === slides[slides.length - 1]){
        nextSlide.classList.add('hidden');
        prevSlide.classList.remove('hidden');
    } else {
        prevSlide.classList.remove('hidden');
        nextSlide.classList.remove('hidden');
    }
}

function findIndex(item, items){
    for(let index = 0; index < items.length; index++){
        if(item === items[index]){
            return index;
        }
    }
}

const nextSlide = document.querySelector('.about-img-arrowright')
const prevSlide = document.querySelector('.about-img-arrowleft')
const owlBtnDesk = document.querySelector('.about-ping-ul')
const owlBtnTblt = document.querySelector('.about-pingtablet-ul')
const tabletDots = [...owlBtnTblt.children]

owlBtnDesk.addEventListener('click', e =>{
    if (e.target.nodeName === 'LI'){
        Array.from(owlBtnDesk.children).forEach(item => 
            item.classList.remove('active')    
        );
        if (e.target.id === 'first'){
            wrapper.style.transform = `translateX(-${0}px)`;
            e.target.classList.add('active');
        } else if (e.target.id === 'second') {
            wrapper.style.transform = `translateX(-${475}px)`;
            e.target.classList.add('active');
        } else if (e.target.id === 'third') {
            wrapper.style.transform = `translateX(-${950}px)`;
            e.target.classList.add('active'); 
        }
    }
});

owlBtnTblt.addEventListener('click', e =>{
    const targetDot = e.target;
    const currentSlide = wrapper.querySelector('.active');
    let indexDot = findIndex(targetDot, tabletDots)
    const currentDot = owlBtnTblt.querySelector('.active')
    const targetSlide = slides[indexDot];

    moveToSlide(wrapper, currentSlide, targetSlide)
    toggleActive(currentDot, targetDot)
    hideButton(targetSlide, slides)
});

nextSlide.addEventListener('click', () =>{
    const currentSlide = wrapper.querySelector('.active');
    const nextSlides = currentSlide.nextElementSibling;

    moveToSlide(wrapper, currentSlide, nextSlides)
    hideButton(nextSlides, slides);

    let slideIndex =  findIndex(nextSlides, slides);
    const currentDot = owlBtnTblt.querySelector('.active');
    const targetDot = tabletDots[slideIndex];
    toggleActive(currentDot, targetDot)
});

prevSlide.addEventListener('click', () => {
    const currentSlide = wrapper.querySelector('.active');
    const prevSlides = currentSlide.previousElementSibling;

    moveToSlide(wrapper, currentSlide, prevSlides);
    hideButton(prevSlides, slides);

    let slideIndex =  findIndex(prevSlides, slides);
    const currentDot = owlBtnTblt.querySelector('.active');
    const targetDot = tabletDots[slideIndex];
    toggleActive(currentDot, targetDot)
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
    regMenu.classList.remove('disabled')
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
        const validCard = localStorage.getItem('bankCardNumb')
        const book1 = document.getElementById('bookBuyBtn1')
        const book2 = document.getElementById('bookBuyBtn2')
        const book3 = document.getElementById('bookBuyBtn3')
        const book4 = document.getElementById('bookBuyBtn4')
        const book5 = document.getElementById('bookBuyBtn5')
        const book6 = document.getElementById('bookBuyBtn6')
        const book7 = document.getElementById('bookBuyBtn7')
        const book8 = document.getElementById('bookBuyBtn8')
        const book9 = document.getElementById('bookBuyBtn9')
        const book10 = document.getElementById('bookBuyBtn10')
        const book11 = document.getElementById('bookBuyBtn11')
        const book12 = document.getElementById('bookBuyBtn12')
        const book13 = document.getElementById('bookBuyBtn13')
        const book14 = document.getElementById('bookBuyBtn14')
        const book15 = document.getElementById('bookBuyBtn15')
        const book16 = document.getElementById('bookBuyBtn16')
        let ul = document.querySelector('.profile-content-bookinfo-ul')
        let li = document.createElement('li')
        

        if ((document.querySelector('.header-nav-logbtn-icon-namedbtn').classList.contains('active')) && validCard == undefined){ 
            buyCardMenu.classList.toggle('active')
            overlay.classList.toggle('active')
        } else if(button == book1 && (document.querySelector('.header-nav-logbtn-icon-namedbtn').classList.contains('active'))) {
            let name1 = document.getElementById('name1').innerHTML
            let author1 = document.getElementById('author1').innerHTML
            let books = localStorage.getItem('books')
        let booksCount = document.querySelector('.profile-content-info-books-span')
        let booksCountCard = document.querySelector('.cards-item-find-border-profile-books-span')
            localStorage.setItem('name1',name1)
            localStorage.setItem('author1',author1)
            const nameAuthor1 = document.createTextNode(`${localStorage.getItem('name1') + ', ' + localStorage.getItem('author1').slice(3)}`)
            localStorage.setItem('nameAuthor1', nameAuthor1)
            button.setAttribute('disabled','')
            button.innerHTML = "Own"
            books = +books;
            books += 1;
            localStorage.setItem('books',books);
            booksCount.innerHTML = books;
            booksCountCard.innerHTML = books;
            li.appendChild(nameAuthor1);
            li.setAttribute('class', 'profile-content-bookinfo-ul-li');
            ul.appendChild(li);
        } else if(button == book2 && (document.querySelector('.header-nav-logbtn-icon-namedbtn').classList.contains('active'))) {
            let name2 = document.getElementById('name2').innerHTML
            let author2 = document.getElementById('author2').innerHTML
            let books = localStorage.getItem('books')
        let booksCount = document.querySelector('.profile-content-info-books-span')
        let booksCountCard = document.querySelector('.cards-item-find-border-profile-books-span')
            localStorage.setItem('name2',name2)
            localStorage.setItem('author2',author2)
            const nameAuthor2 = document.createTextNode(`${localStorage.getItem('name2') + ', ' + localStorage.getItem('author2').slice(3)}`)
            localStorage.setItem('nameAuthor2', nameAuthor2)
            button.setAttribute('disabled','')
            button.innerHTML = "Own"
            books = +books;
            books += 1;
            localStorage.setItem('books',books);
            booksCount.innerHTML = books;
            booksCountCard.innerHTML = books;
            li.appendChild(nameAuthor2);
            li.setAttribute('class', 'profile-content-bookinfo-ul-li');
            ul.appendChild(li);
        } else if(button == book3 && (document.querySelector('.header-nav-logbtn-icon-namedbtn').classList.contains('active'))) {
            let name3 = document.getElementById('name3').innerHTML
            let author3 = document.getElementById('author3').innerHTML
            let books = localStorage.getItem('books')
        let booksCount = document.querySelector('.profile-content-info-books-span')
        let booksCountCard = document.querySelector('.cards-item-find-border-profile-books-span')
            localStorage.setItem('name3',name3)
            localStorage.setItem('author3',author3)
            const nameAuthor3 = document.createTextNode(`${localStorage.getItem('name3') + ', ' + localStorage.getItem('author3').slice(3)}`)
            localStorage.setItem('nameAuthor3', nameAuthor3)
            button.setAttribute('disabled','')
            button.innerHTML = "Own"
            books = +books;
            books += 1;
            localStorage.setItem('books',books);
            booksCount.innerHTML = books;
            booksCountCard.innerHTML = books;
            li.appendChild(nameAuthor3);
            li.setAttribute('class', 'profile-content-bookinfo-ul-li');
            ul.appendChild(li);
        } else if(button == book4 && (document.querySelector('.header-nav-logbtn-icon-namedbtn').classList.contains('active'))) {
            let name4 = document.getElementById('name4').innerHTML
            let author4 = document.getElementById('author4').innerHTML
            let books = localStorage.getItem('books')
        let booksCount = document.querySelector('.profile-content-info-books-span')
        let booksCountCard = document.querySelector('.cards-item-find-border-profile-books-span')
            localStorage.setItem('name4',name4)
            localStorage.setItem('author4',author4)
            const nameAuthor4 = document.createTextNode(`${localStorage.getItem('name4') + ', ' + localStorage.getItem('author4').slice(3)}`)
            localStorage.setItem('nameAuthor4', nameAuthor4)
            button.setAttribute('disabled','')
            button.innerHTML = "Own"
            books = +books;
            books += 1;
            localStorage.setItem('books',books);
            booksCount.innerHTML = books;
            booksCountCard.innerHTML = books;
            li.appendChild(nameAuthor4);
            li.setAttribute('class', 'profile-content-bookinfo-ul-li');
            ul.appendChild(li);
        }  else if(button == book5 && (document.querySelector('.header-nav-logbtn-icon-namedbtn').classList.contains('active'))) {
            let name5 = document.getElementById('name5').innerHTML
            let author5 = document.getElementById('author5').innerHTML
            let books = localStorage.getItem('books')
        let booksCount = document.querySelector('.profile-content-info-books-span')
        let booksCountCard = document.querySelector('.cards-item-find-border-profile-books-span')
            localStorage.setItem('name5',name5)
            localStorage.setItem('author5',author5)
            const nameAuthor5 = document.createTextNode(`${localStorage.getItem('name5') + ', ' + localStorage.getItem('author5').slice(3)}`)
            localStorage.setItem('nameAuthor5', nameAuthor5)
            button.setAttribute('disabled','')
            button.innerHTML = "Own"
            books = +books;
            books += 1;
            localStorage.setItem('books',books);
            booksCount.innerHTML = books;
            booksCountCard.innerHTML = books;
            li.appendChild(nameAuthor5);
            li.setAttribute('class', 'profile-content-bookinfo-ul-li');
            ul.appendChild(li);
        } else if(button == book6 && (document.querySelector('.header-nav-logbtn-icon-namedbtn').classList.contains('active'))) {
            let name6 = document.getElementById('name6').innerHTML
            let author6 = document.getElementById('author6').innerHTML
            let books = localStorage.getItem('books')
        let booksCount = document.querySelector('.profile-content-info-books-span')
        let booksCountCard = document.querySelector('.cards-item-find-border-profile-books-span')
            localStorage.setItem('name6',name6)
            localStorage.setItem('author6',author6)
            const nameAuthor6 = document.createTextNode(`${localStorage.getItem('name6') + ', ' + localStorage.getItem('author6').slice(3)}`)
            localStorage.setItem('nameAuthor6', nameAuthor6)
            button.setAttribute('disabled','')
            button.innerHTML = "Own"
            books = +books;
            books += 1;
            localStorage.setItem('books',books);
            booksCount.innerHTML = books;
            booksCountCard.innerHTML = books;
            li.appendChild(nameAuthor6);
            li.setAttribute('class', 'profile-content-bookinfo-ul-li');
            ul.appendChild(li);
        } else if(button == book7 && (document.querySelector('.header-nav-logbtn-icon-namedbtn').classList.contains('active'))) {
            let name7 = document.getElementById('name7').innerHTML
            let author7 = document.getElementById('author7').innerHTML
            let books = localStorage.getItem('books')
        let booksCount = document.querySelector('.profile-content-info-books-span')
        let booksCountCard = document.querySelector('.cards-item-find-border-profile-books-span')
            localStorage.setItem('name7',name7)
            localStorage.setItem('author7',author7)
            const nameAuthor7 = document.createTextNode(`${localStorage.getItem('name7') + ', ' + localStorage.getItem('author7').slice(3)}`)
            localStorage.setItem('nameAuthor7', nameAuthor7)
            button.setAttribute('disabled','')
            button.innerHTML = "Own"
            books = +books;
            books += 1;
            localStorage.setItem('books',books);
            booksCount.innerHTML = books;
            booksCountCard.innerHTML = books;
            li.appendChild(nameAuthor7);
            li.setAttribute('class', 'profile-content-bookinfo-ul-li');
            ul.appendChild(li);
        } else if(button == book8 && (document.querySelector('.header-nav-logbtn-icon-namedbtn').classList.contains('active'))) {
            let name8 = document.getElementById('name8').innerHTML
            let author8 = document.getElementById('author8').innerHTML
            let books = localStorage.getItem('books')
        let booksCount = document.querySelector('.profile-content-info-books-span')
        let booksCountCard = document.querySelector('.cards-item-find-border-profile-books-span')
            localStorage.setItem('name8',name8)
            localStorage.setItem('author8',author8)
            const nameAuthor8 = document.createTextNode(`${localStorage.getItem('name8') + ', ' + localStorage.getItem('author8').slice(3)}`)
            localStorage.setItem('nameAuthor8', nameAuthor8)
            button.setAttribute('disabled','')
            button.innerHTML = "Own"
            books = +books;
            books += 1;
            localStorage.setItem('books',books);
            booksCount.innerHTML = books;
            booksCountCard.innerHTML = books;
            li.appendChild(nameAuthor8);
            li.setAttribute('class', 'profile-content-bookinfo-ul-li');
            ul.appendChild(li);
        } else if(button == book9 && (document.querySelector('.header-nav-logbtn-icon-namedbtn').classList.contains('active'))) {
            let name9 = document.getElementById('name9').innerHTML
            let author9 = document.getElementById('author9').innerHTML
            let books = localStorage.getItem('books')
        let booksCount = document.querySelector('.profile-content-info-books-span')
        let booksCountCard = document.querySelector('.cards-item-find-border-profile-books-span')
            localStorage.setItem('name9',name9)
            localStorage.setItem('author9',author9)
            const nameAuthor9 = document.createTextNode(`${localStorage.getItem('name9') + ', ' + localStorage.getItem('author9').slice(3)}`)
            localStorage.setItem('nameAuthor9', nameAuthor9)
            button.setAttribute('disabled','')
            button.innerHTML = "Own"
            books = +books;
            books += 1;
            localStorage.setItem('books',books);
            booksCount.innerHTML = books;
            booksCountCard.innerHTML = books;
            li.appendChild(nameAuthor9);
            li.setAttribute('class', 'profile-content-bookinfo-ul-li');
            ul.appendChild(li);
        } else if(button == book10 && (document.querySelector('.header-nav-logbtn-icon-namedbtn').classList.contains('active'))) {
            let name10 = document.getElementById('name10').innerHTML
            let author10 = document.getElementById('author10').innerHTML
            let books = localStorage.getItem('books')
        let booksCount = document.querySelector('.profile-content-info-books-span')
        let booksCountCard = document.querySelector('.cards-item-find-border-profile-books-span')
            localStorage.setItem('name10',name10)
            localStorage.setItem('author10',author10)
            const nameAuthor10 = document.createTextNode(`${localStorage.getItem('name10') + ', ' + localStorage.getItem('author10').slice(3)}`)
            localStorage.setItem('nameAuthor10', nameAuthor10)
            button.setAttribute('disabled','')
            button.innerHTML = "Own"
            books = +books;
            books += 1;
            localStorage.setItem('books',books);
            booksCount.innerHTML = books;
            booksCountCard.innerHTML = books;
            li.appendChild(nameAuthor10);
            li.setAttribute('class', 'profile-content-bookinfo-ul-li');
            ul.appendChild(li);
        } else if(button == book11 && (document.querySelector('.header-nav-logbtn-icon-namedbtn').classList.contains('active'))) {
            let name11 = document.getElementById('name11').innerHTML
            let author11 = document.getElementById('author11').innerHTML
            let books = localStorage.getItem('books')
        let booksCount = document.querySelector('.profile-content-info-books-span')
        let booksCountCard = document.querySelector('.cards-item-find-border-profile-books-span')
            localStorage.setItem('name11',name11)
            localStorage.setItem('author11',author11)
            const nameAuthor11 = document.createTextNode(`${localStorage.getItem('name11') + ', ' + localStorage.getItem('author11').slice(3)}`)
            localStorage.setItem('nameAuthor11', nameAuthor11)
            button.setAttribute('disabled','')
            button.innerHTML = "Own"
            books = +books;
            books += 1;
            localStorage.setItem('books',books);
            booksCount.innerHTML = books;
            booksCountCard.innerHTML = books;
            li.appendChild(nameAuthor11);
            li.setAttribute('class', 'profile-content-bookinfo-ul-li');
            ul.appendChild(li);
        } else if(button == book12 && (document.querySelector('.header-nav-logbtn-icon-namedbtn').classList.contains('active'))) {
            let name12 = document.getElementById('name12').innerHTML
            let author12 = document.getElementById('author12').innerHTML
            let books = localStorage.getItem('books')
        let booksCount = document.querySelector('.profile-content-info-books-span')
        let booksCountCard = document.querySelector('.cards-item-find-border-profile-books-span')
            localStorage.setItem('name12',name12)
            localStorage.setItem('author12',author12)
            const nameAuthor12 = document.createTextNode(`${localStorage.getItem('name12') + ', ' + localStorage.getItem('author12').slice(3)}`)
            localStorage.setItem('nameAuthor12', nameAuthor12)
            button.setAttribute('disabled','')
            button.innerHTML = "Own"
            books = +books;
            books += 1;
            localStorage.setItem('books',books);
            booksCount.innerHTML = books;
            booksCountCard.innerHTML = books;
            li.appendChild(nameAuthor12);
            li.setAttribute('class', 'profile-content-bookinfo-ul-li');
            ul.appendChild(li);
        } else if(button == book13 && (document.querySelector('.header-nav-logbtn-icon-namedbtn').classList.contains('active'))) {
            let name13 = document.getElementById('name13').innerHTML
            let author13 = document.getElementById('author13').innerHTML
            let books = localStorage.getItem('books')
        let booksCount = document.querySelector('.profile-content-info-books-span')
        let booksCountCard = document.querySelector('.cards-item-find-border-profile-books-span')
            localStorage.setItem('name13',name13)
            localStorage.setItem('author13',author13)
            const nameAuthor13 = document.createTextNode(`${localStorage.getItem('name13') + ', ' + localStorage.getItem('author13').slice(3)}`)
            localStorage.setItem('nameAuthor13', nameAuthor13)
            button.setAttribute('disabled','')
            button.innerHTML = "Own"
            books = +books;
            books += 1;
            localStorage.setItem('books',books);
            booksCount.innerHTML = books;
            booksCountCard.innerHTML = books;
            li.appendChild(nameAuthor13);
            li.setAttribute('class', 'profile-content-bookinfo-ul-li');
            ul.appendChild(li);
        } else if(button == book14 && (document.querySelector('.header-nav-logbtn-icon-namedbtn').classList.contains('active'))) {
            let name14 = document.getElementById('name14').innerHTML
            let author14 = document.getElementById('author14').innerHTML
            let books = localStorage.getItem('books')
        let booksCount = document.querySelector('.profile-content-info-books-span')
        let booksCountCard = document.querySelector('.cards-item-find-border-profile-books-span')
            localStorage.setItem('name14',name14)
            localStorage.setItem('author14',author14)
            const nameAuthor14 = document.createTextNode(`${localStorage.getItem('name14') + ', ' + localStorage.getItem('author14').slice(3)}`)
            localStorage.setItem('nameAuthor14', nameAuthor14)
            button.setAttribute('disabled','')
            button.innerHTML = "Own"
            books = +books;
            books += 1;
            localStorage.setItem('books',books);
            booksCount.innerHTML = books;
            booksCountCard.innerHTML = books;
            li.appendChild(nameAuthor14);
            li.setAttribute('class', 'profile-content-bookinfo-ul-li');
            ul.appendChild(li);
        } else if(button == book15 && (document.querySelector('.header-nav-logbtn-icon-namedbtn').classList.contains('active'))) {
            let name15 = document.getElementById('name15').innerHTML
            let author15 = document.getElementById('author15').innerHTML
            let books = localStorage.getItem('books')
        let booksCount = document.querySelector('.profile-content-info-books-span')
        let booksCountCard = document.querySelector('.cards-item-find-border-profile-books-span')
            localStorage.setItem('name15',name15)
            localStorage.setItem('author15',author15)
            const nameAuthor15 = document.createTextNode(`${localStorage.getItem('name15') + ', ' + localStorage.getItem('author15').slice(3)}`)
            localStorage.setItem('nameAuthor15', nameAuthor15)
            button.setAttribute('disabled','')
            button.innerHTML = "Own"
            books = +books;
            books += 1;
            localStorage.setItem('books',books);
            booksCount.innerHTML = books;
            booksCountCard.innerHTML = books;
            li.appendChild(nameAuthor15);
            li.setAttribute('class', 'profile-content-bookinfo-ul-li');
            ul.appendChild(li);
        } else if(button == book16 && (document.querySelector('.header-nav-logbtn-icon-namedbtn').classList.contains('active'))) {
            let name16 = document.getElementById('name16').innerHTML
            let author16 = document.getElementById('author16').innerHTML
            let books = localStorage.getItem('books')
        let booksCount = document.querySelector('.profile-content-info-books-span')
        let booksCountCard = document.querySelector('.cards-item-find-border-profile-books-span')
            localStorage.setItem('name16',name16)
            localStorage.setItem('author16',author16)
            const nameAuthor16 = document.createTextNode(`${localStorage.getItem('name16') + ', ' + localStorage.getItem('author16').slice(3)}`)
            localStorage.setItem('nameAuthor16', nameAuthor16)
            button.setAttribute('disabled','')
            button.innerHTML = "Own"
            books = +books;
            books += 1;
            localStorage.setItem('books',books);
            booksCount.innerHTML = books;
            booksCountCard.innerHTML = books;
            li.appendChild(nameAuthor16);
            li.setAttribute('class', 'profile-content-bookinfo-ul-li');
            ul.appendChild(li);
        } else { 
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
    menu.classList.remove('active')
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

});

logInBtn.addEventListener('click', () => {
    let storedMail = localStorage.getItem('email')
    let storedPass = localStorage.getItem('password')
    let storedNumb = localStorage.getItem('cardNumber')
    let ul = document.querySelector('.profile-content-bookinfo-ul')
    let li1 = document.createElement('li')
    let li2 = document.createElement('li')
    let li3 = document.createElement('li')
    let li4 = document.createElement('li')
    let li5 = document.createElement('li')
    let li6 = document.createElement('li')
    let li7 = document.createElement('li')
    let li8 = document.createElement('li')
    let li9 = document.createElement('li')
    let li10 = document.createElement('li')
    let li11 = document.createElement('li')
    let li12 = document.createElement('li')
    let li13 = document.createElement('li')
    let li14 = document.createElement('li')
    let li15 = document.createElement('li')
    let li16 = document.createElement('li')
    let nameAuthor1 = localStorage.getItem('nameAuthor1')
    let nameAuthor2 = localStorage.getItem('nameAuthor2')
    let nameAuthor3 = localStorage.getItem('nameAuthor3')
    let nameAuthor4 = localStorage.getItem('nameAuthor4')
    let nameAuthor5 = localStorage.getItem('nameAuthor5')
    let nameAuthor6 = localStorage.getItem('nameAuthor6')
    let nameAuthor7 = localStorage.getItem('nameAuthor7')
    let nameAuthor8 = localStorage.getItem('nameAuthor8')
    let nameAuthor9 = localStorage.getItem('nameAuthor9')
    let nameAuthor10 = localStorage.getItem('nameAuthor10')
    let nameAuthor11 = localStorage.getItem('nameAuthor11')
    let nameAuthor12 = localStorage.getItem('nameAuthor12')
    let nameAuthor13 = localStorage.getItem('nameAuthor13')
    let nameAuthor14 = localStorage.getItem('nameAuthor14')
    let nameAuthor15 = localStorage.getItem('nameAuthor15')
    let nameAuthor16 = localStorage.getItem('nameAuthor16')

    

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
        let books = localStorage.getItem('books')
        let booksCount = document.querySelector('.profile-content-info-books-span')
        let booksCountCard = document.querySelector('.cards-item-find-border-profile-books-span')
        
        visits = +visits;
        visits += 1;

        
        
        booksCount.append(books);
        booksCountCard.append(books);

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
        document.getElementById('firstName').setAttribute('disabled','')
        document.getElementById('cardNumber').setAttribute('disabled','')
        chkCardBtn.classList.add('disabled')
        readInfo.classList.add('active')

        if(nameAuthor1 != null){
            const bookBtn1 = document.getElementById('bookBuyBtn1');
            bookBtn1.setAttribute('disabled','');
            bookBtn1.innerHTML = "Own";
            nameAuthor1 = document.createTextNode(`${localStorage.getItem('name1') + ', ' + localStorage.getItem('author1').slice(3)}`)
            li1.appendChild(nameAuthor1);
            li1.setAttribute('class', 'profile-content-bookinfo-ul-li');
            ul.appendChild(li1);
        }  if (nameAuthor2 != null){
            const bookBtn2 = document.getElementById('bookBuyBtn2');
            bookBtn2.setAttribute('disabled','');
            bookBtn2.innerHTML = "Own";
            nameAuthor2 = document.createTextNode(`${localStorage.getItem('name2') + ', ' + localStorage.getItem('author2').slice(3)}`)
            li2.appendChild(nameAuthor2);
            li2.setAttribute('class', 'profile-content-bookinfo-ul-li');
            ul.appendChild(li2);
        }  if (nameAuthor3 != null){
            const bookBtn3 = document.getElementById('bookBuyBtn3');
            bookBtn3.setAttribute('disabled','');
            bookBtn3.innerHTML = "Own";
            nameAuthor3 = document.createTextNode(`${localStorage.getItem('name3') + ', ' + localStorage.getItem('author3').slice(3)}`)
            li3.appendChild(nameAuthor3);
            li3.setAttribute('class', 'profile-content-bookinfo-ul-li');
            ul.appendChild(li3);
        }  if (nameAuthor4 != null){
            const bookBtn4 = document.getElementById('bookBuyBtn4');
            bookBtn4.setAttribute('disabled','');
            bookBtn4.innerHTML = "Own";
            nameAuthor4 = document.createTextNode(`${localStorage.getItem('name4') + ', ' + localStorage.getItem('author4').slice(3)}`)
            li4.appendChild(nameAuthor4);
            li4.setAttribute('class', 'profile-content-bookinfo-ul-li');
            ul.appendChild(li4);
        }  if (nameAuthor5 != null){
            const bookBtn5 = document.getElementById('bookBuyBtn5');
            bookBtn5.setAttribute('disabled','');
            bookBtn5.innerHTML = "Own";
            nameAuthor5 = document.createTextNode(`${localStorage.getItem('name5') + ', ' + localStorage.getItem('author5').slice(3)}`)
            li5.appendChild(nameAuthor5);
            li5.setAttribute('class', 'profile-content-bookinfo-ul-li');
            ul.appendChild(li5);
        }  if (nameAuthor6 != null){
            const bookBtn6 = document.getElementById('bookBuyBtn6');
            bookBtn6.setAttribute('disabled','');
            bookBtn6.innerHTML = "Own";
            nameAuthor6 = document.createTextNode(`${localStorage.getItem('name6') + ', ' + localStorage.getItem('author6').slice(3)}`)
            li6.appendChild(nameAuthor6);
            li6.setAttribute('class', 'profile-content-bookinfo-ul-li');
            ul.appendChild(li6);
        }  if (nameAuthor7 != null){
            const bookBtn7 = document.getElementById('bookBuyBtn7');
            bookBtn7.setAttribute('disabled','');
            bookBtn7.innerHTML = "Own";
            nameAuthor7 = document.createTextNode(`${localStorage.getItem('name7') + ', ' + localStorage.getItem('author7').slice(3)}`)
            li7.appendChild(nameAuthor7);
            li7.setAttribute('class', 'profile-content-bookinfo-ul-li');
            ul.appendChild(li7);
        }  if (nameAuthor8 != null){
            const bookBtn8 = document.getElementById('bookBuyBtn8');
            bookBtn8.setAttribute('disabled','');
            bookBtn8.innerHTML = "Own";
            nameAuthor8 = document.createTextNode(`${localStorage.getItem('name8') + ', ' + localStorage.getItem('author8').slice(3)}`)
            li8.appendChild(nameAuthor8);
            li8.setAttribute('class', 'profile-content-bookinfo-ul-li');
            ul.appendChild(li8);
        }  if (nameAuthor9 != null){
            const bookBtn9 = document.getElementById('bookBuyBtn9');
            bookBtn9.setAttribute('disabled','');
            bookBtn9.innerHTML = "Own";
            nameAuthor9 = document.createTextNode(`${localStorage.getItem('name9') + ', ' + localStorage.getItem('author9').slice(3)}`)
            li9.appendChild(nameAuthor9);
            li9.setAttribute('class', 'profile-content-bookinfo-ul-li');
            ul.appendChild(li9);
        }  if (nameAuthor10 != null){
            const bookBtn10 = document.getElementById('bookBuyBtn10');
            bookBtn10.setAttribute('disabled','');
            bookBtn10.innerHTML = "Own";
            nameAuthor10 = document.createTextNode(`${localStorage.getItem('name10') + ', ' + localStorage.getItem('author10').slice(3)}`)
            li10.appendChild(nameAuthor10);
            li10.setAttribute('class', 'profile-content-bookinfo-ul-li');
            ul.appendChild(li10);
        }  if (nameAuthor11 != null){
            const bookBtn11 = document.getElementById('bookBuyBtn11');
            bookBtn11.setAttribute('disabled','');
            bookBtn11.innerHTML = "Own";
            nameAuthor11 = document.createTextNode(`${localStorage.getItem('name11') + ', ' + localStorage.getItem('author11').slice(3)}`)
            li11.appendChild(nameAuthor11);
            li11.setAttribute('class', 'profile-content-bookinfo-ul-li');
            ul.appendChild(li11);
        }  if (nameAuthor12 != null){
            const bookBtn12 = document.getElementById('bookBuyBtn12');
            bookBtn12.setAttribute('disabled','');
            bookBtn12.innerHTML = "Own";
            nameAuthor12 = document.createTextNode(`${localStorage.getItem('name12') + ', ' + localStorage.getItem('author12').slice(3)}`)
            li12.appendChild(nameAuthor12);
            li12.setAttribute('class', 'profile-content-bookinfo-ul-li');
            ul.appendChild(li12);
        }  if (nameAuthor13 != null){
            const bookBtn13 = document.getElementById('bookBuyBtn13');
            bookBtn13.setAttribute('disabled','');
            bookBtn13.innerHTML = "Own";
            nameAuthor13 = document.createTextNode(`${localStorage.getItem('name13') + ', ' + localStorage.getItem('author13').slice(3)}`)
            li13.appendChild(nameAuthor13);
            li13.setAttribute('class', 'profile-content-bookinfo-ul-li');
            ul.appendChild(li13);
        }  if (nameAuthor14 != null){
            const bookBtn14 = document.getElementById('bookBuyBtn14');
            bookBtn14.setAttribute('disabled','');
            bookBtn14.innerHTML = "Own";
            nameAuthor14 = document.createTextNode(`${localStorage.getItem('name14') + ', ' + localStorage.getItem('author14').slice(3)}`)
            li14.appendChild(nameAuthor14);
            li14.setAttribute('class', 'profile-content-bookinfo-ul-li');
            ul.appendChild(li14);
        }  if (nameAuthor15 != null){
            const bookBtn15 = document.getElementById('bookBuyBtn15');
            bookBtn15.setAttribute('disabled','');
            bookBtn15.innerHTML = "Own";
            nameAuthor15 = document.createTextNode(`${localStorage.getItem('name15') + ', ' + localStorage.getItem('author15').slice(3)}`)
            li15.appendChild(nameAuthor15);
            li15.setAttribute('class', 'profile-content-bookinfo-ul-li');
            ul.appendChild(li15);
        }  if (nameAuthor16 != null){
            const bookBtn16 = document.getElementById('bookBuyBtn16');
            bookBtn16.setAttribute('disabled','');
            bookBtn16.innerHTML = "Own";
            nameAuthor16 = document.createTextNode(`${localStorage.getItem('name16') + ', ' + localStorage.getItem('author16').slice(3)}`)
            li16.appendChild(nameAuthor16);
            li16.setAttribute('class', 'profile-content-bookinfo-ul-li');
            ul.appendChild(li16);
        } 

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
    
    let visitsCountCard = document.querySelector('.cards-item-find-border-profile-visits-span')
    let booksCount = document.querySelector('.cards-item-find-border-profile-books-span')
 
    if (readCard == storedNumb && readName == storedName && !(document.querySelector('.header-nav-logbtn-icon-namedbtn').classList.contains('active'))){
        chkCardBtn.classList.add('disabled')
        visitsCountCard.innerHTML = localStorage.getItem('visits')
        booksCount.innerHTML = localStorage.getItem('books')
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

const buyCardBtn = document.querySelector('.buycardmenu-content-forms-botcontent-btn')
const monthInput = document.getElementById('month')


monthInput.addEventListener('input', (event) => {
    const value = event.target.value.toString();

    if (value.length === 1 && value > 1){
        event.target.value = "0" + value;
    }

    if (value === "00"){
        event.target.value = "01";
    } else if (value > 12) {
        event.target.value = "12"
    }
});

buyCardBtn.addEventListener('click', () => {
    let bankCardNumb = document.getElementById('bankcardnumber').value


    buyCardMenu.classList.remove('active')
    overlay.classList.remove('active')
    localStorage.setItem('bankCardNumb',bankCardNumb)
});


// < ========================================================== >


//copy button

const copyBtn = document.querySelector('.profile-content-cardinfo-copy')


copyBtn.addEventListener('click', () => {
    let cardNumber = localStorage.getItem('cardNumber')
    navigator.clipboard.writeText(cardNumber)
});