const wrapper = document.querySelector('.destinations-photos-wrapper')

const slides = [...wrapper.children]

let slideWidth = slides[0].getBoundingClientRect().width + 360

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


const nextSlide = document.querySelector('.destinations-photos-butns-rightbtn')
const prevSlide = document.querySelector('.destinations-photos-butns-leftbtn')
const owlBtnDesk = document.querySelector('.destinations-dots-ul')
const owlBtnTblt = document.querySelector('.destinations-photos-dotsmob-ul')
const tabletDots = [...owlBtnTblt.children]

owlBtnDesk.addEventListener('click', e =>{
    if (e.target.nodeName === 'LI'){
        Array.from(owlBtnDesk.children).forEach(item => 
            item.classList.remove('active')    
        );
        if (e.target.id === 'first'){
            wrapper.style.transform = `translateX(${860}px)`;
            e.target.classList.add('active');
        } else if (e.target.id === 'second') {
            wrapper.style.transform = `translateX(-${0}px)`;
            e.target.classList.add('active');
        } else if (e.target.id === 'third') {
            wrapper.style.transform = `translateX(-${860}px)`;
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
