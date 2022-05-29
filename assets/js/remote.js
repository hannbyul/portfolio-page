$(document).scroll(function () {
    var con = $("#remote");
    var position = $(window).scrollTop(); if (position > 250) { con.fadeIn(500); } else if (position < 250) { con.fadeOut(500); }
});
$("#remote").click(function () { $("html, body").animate({ scrollTop: 0 }, 1000); });