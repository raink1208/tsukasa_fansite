Pace.on("done", () => {
    fadein();
    $(window).on("scroll", () => {
        fadein();
    })
})

function fadein() {
    $(".js-fadein").each((_, element) => {
        $(element).offset().top - $(window).height() + 200 < $(window).scrollTop() && $(element).addClass("is-view");
    })
}