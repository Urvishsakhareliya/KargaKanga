$(document).ready(function () {
    $(".top-header .ri-menu-2-fill").click(function () {
        $(".nav").addClass("nav-Active");
        $(".BackLayer").addClass("BackLayer-Active");
    });
    $(".BackLayer").click(function () {
        $(".nav").removeClass("nav-Active");
        $(".BackLayer").removeClass("BackLayer-Active");
    });
});
