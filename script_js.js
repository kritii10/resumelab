// Script.js - jQuery animations and interactions

$(document).ready(function () {
    // Fade pages on load
    $(".fade").hide().fadeIn(1000);

    // Highlight hover animation
    $(".highlight").hover(
        function () {
            $(this).css({
                background: "#4a90e2",
                color: "white",
                padding: "2px 6px",
                transition: "0.3s",
                borderRadius: "4px"
            });
        },
        function () {
            $(this).css({
                background: "transparent",
                color: "inherit",
                padding: "0",
            });
        }
    );

    // Smooth scroll to resume pages
    $(".nav-btn").click(function () {
        const target = $(this).data("page");
        $('html, body').animate({
            scrollTop: $("#" + target).offset().top
        }, 700);
    });
});
