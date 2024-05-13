const i = $(".swiper_wrap");
for (let e = 0; e < i.length; e++) {
    let t = i[e].querySelector(".swiper-button-prev")
    let a = i[e].querySelector(".swiper-button-next")
    let s = i[e].querySelector(".swiper-scrollbar")
    let r = 5
    let o = !1;
    i.eq(e).attr("data-slide-view") && (r = i.eq(e).data("slide-view")),
    i.eq(e).attr("data-slide-align") && (o = !0),
        new Swiper(i[e],{
            centeredSlides: !1,
            spaceBetween: 10,
            navigation: {
                nextEl: a,
                prevEl: t
            },
            scrollbar: {
                el: s,
                hide: !1,
                draggable: !0
            },
            breakpoints: {
                2208: {
                    centeredSlides: o,
                    slidesPerView: r + 1,
                    slidesPerGroup: r + 1,
                    spaceBetween: 16
                },
                1472: {
                    centeredSlides: o,
                    slidesPerView: r,
                    slidesPerGroup: r,
                    spaceBetween: 16
                },
                768: {
                    centeredSlides: o,
                    slidesPerView: 3,
                    slidesPerGroup: 3,
                    spaceBetween: 10
                },
                576: {
                    centeredSlides: !1,
                    slidesPerView: 2,
                    slidesPerGroup: 2,
                    spaceBetween: 10
                }
            }
        })
}

const swiper = new Swiper(".swiper", {

})
