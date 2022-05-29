let swiperCont = document.querySelector('.swiper');
let swiperWrapper = document.querySelector('.swiper-wrapper');
let swiperSlide = document.querySelector('.swiper-slide');

console.log(swiperCont);
console.log(swiperWrapper);
console.log(swiperSlide);

if (window.innerWidth === 320) {
    new Swiper('.brends__container', {
        // slidesPerView: 1,
        // spaceBetween: 20,
        // loop: true,
        // slideClass: 'brend__item',
        enabled: true,
        width: 240,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });

} else if (window.innerWidth >= 768) {
    // let swiperCont = document.querySelector('.swiper');
    // let swiperWrapper = document.querySelector('.swiper-wrapper');
    // let swiperSlide = document.querySelector('.swiper-slide');
    swiperCont.classList.remove('swiper');
    swiperWrapper.classList.remove('swiper-wrapper');
    // swiperSlide.classList.remove('swiper-slide');
    // console.log(window.innerHeight);
    let elements = document.querySelectorAll('.swiper-slide');
    for (let i=0; i < elements.length; i++) {
        let element = elements[i];
        element.classList.remove('swiper-slide');
    }
};

showHide.onclick = function() {
    
    let wrapper  = document.querySelector('.wrapper');
    let box = document.querySelector('.brends__box');

    if (showHide.classList.contains('show')) {
        if (window.innerWidth >= 768 && 1015 >= window.innerWidth) {
        box.classList.add('section--mid');
        wrapper.classList.add('wrapper--mid');
        showHide.classList.remove('show');
        showHide.classList.add('hide');
        } else {
        box.classList.add('section--desc');
        wrapper.classList.add('wrapper--desc');
        showHide.classList.remove('show');
        showHide.classList.add('hide');
        };
        // alert('show');
    } else {
        if (window.innerWidth >= 768 && 1015 >= window.innerWidth) {
            box.classList.remove('section--mid');
            wrapper.classList.remove('wrapper--mid');
            showHide.classList.remove('hide');
            showHide.classList.add('show');
        } else {
            box.classList.remove('section--desc');
            wrapper.classList.remove('wrapper--desc');
            showHide.classList.remove('hide');
            showHide.classList.add('show');
        };
        // alert('hide');
    };
    
    

    
};


// window.addEventListener("resize", function(){
//         console.log('width: ' + window.innerWidth + 'px. height:  ' + window.innerHeight);
//         if (window.innerWidth >= 768) {
//             // let swiperCont = document.querySelector('.swiper');
//             // let swiperWrapper = document.querySelector('.swiper-wrapper');
//             // let swiperSlide = document.querySelector('.swiper-slide');
//             swiperCont.classList.remove('swiper');
//             swiperWrapper.classList.remove('swiper-wrapper');
//             swiperSlide.classList.remove('swiper-slide');
//             console.log(window.innerHeight);
//             let elements = document.querySelectorAll('.swiper-slide');
//             for (let i=0; i < elements.length; i++) {
//                 let element = elements[i];
//                 element.classList.remove('swiper-slide');
//             }
//         };
//     }
// );