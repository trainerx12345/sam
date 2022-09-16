
(function (window, $, undefined) {
    $(this.document).ready(function () {
        $(window).scroll(function () {
            if ($(window).scrollTop() > $(window).height()) {
                $(".nav_transparent").css({ "background-color": "transparent" });
            }
            else {
                $(".nav_transparent").css({ "background-color": "Yellow" });
            }
            console.log($(".nav_transparent").css());
        })
    })
});



