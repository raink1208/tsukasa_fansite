new Swiper('.standPicture', {
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    effect: 'fade',
    speed: 300,
    fadeEffect: {
        crossFade: true,
    }
});