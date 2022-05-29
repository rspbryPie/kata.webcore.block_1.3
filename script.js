let swiperCont = document.querySelector('.swiper');
let swiperWrapper = document.querySelector('.swiper-wrapper');
let swiperSlide = document.querySelector('.swiper-slide');
let swiperPag = document.querySelector('.swiper-pagination');

// if (window.innerWidth === 320) {
const swiper = new Swiper('.brends__container', {
        // slidesPerView: 1,
        // spaceBetween: 20,
        loop: false,
        // slideClass: 'brend__item',
        enabled: false,
        width: 240,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            // when window width is <= 320px
            
            // when window width is <= 640px
            320: {
                enabled: true,
                slidesPerView: 1,

            }
        }
    });

// } else
    if (window.innerWidth >= 768) {
    swiper.destroy();
    // let swiperPag = document.querySelector('.swiper-pagination');
    // let swiperWrapper = document.querySelector('.swiper-wrapper');
    // let swiperSlide = document.querySelector('.swiper-slide');
    swiperCont.classList.remove('swiper');
    swiperWrapper.classList.remove('swiper-wrapper');
    swiperPag.classList.add('hidden');
    // swiperSlide.classList.remove('swiper-slide');
    // console.log(window.innerHeight);
    let elements = document.querySelectorAll('.swiper-slide');
    for (let i=0; i < elements.length; i++) {
        let element = elements[i];
        element.classList.remove('swiper-slide');
    };
    // window.location.reload();
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

window.addEventListener("resize", function(){
    window.location.reload();
});

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