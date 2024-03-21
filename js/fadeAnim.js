Pace.on("done", () => {
    inview();
    $(window).on("scroll", () => {
        inview();
    })
})

function inview() {
    $(".js-inview").each((_, element) => {
        $(element).offset().top - $(window).height() + 200 < $(window).scrollTop() && $(element).addClass("is-view");
    })
}