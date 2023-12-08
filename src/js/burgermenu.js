const menuBtn = document.querySelector('.header-nav-cont1-row-burger')
const menu = document.querySelector('.header-nav-cont1-row-navigation-ul')
const menuClsBtn = document.querySelector('.header-nav-cont1-row-navigation-clsbtn')
const overlay = document.querySelector('.overlay')

if (menu && menuBtn && menuClsBtn){
    menuBtn.addEventListener('click', () => {
        menu.classList.add('active')
        menuClsBtn.classList.add('active')
        overlay.classList.add('active')
    });
    
    menuClsBtn.addEventListener('click', () =>{
        menu.classList.remove('active')
        menuClsBtn.classList.remove('active')
        overlay.classList.remove('active')
    });

    menu.querySelectorAll('a').forEach(link =>{
        link.addEventListener('click', () =>{
            menu.classList.remove('active')
            menuClsBtn.classList.remove('active')
            overlay.classList.remove('active')
        });
    });
}
overlay.addEventListener('click', () =>{
    overlay.classList.remove('active')
    menuClsBtn.classList.remove('active')
    menu.classList.remove('active')
});