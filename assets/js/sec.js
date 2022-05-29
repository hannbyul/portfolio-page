$(document).ready(function () {
    $(document).bind('keydown', function (e) {
        if (e.keyCode == 123 /* F12 */) {
            e.preventDefault();
            e.returnValue = false;
        }
    });
});

document.oncontextmenu = function () { return false; }