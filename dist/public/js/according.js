"use strict";
$(function () {
    $("dd").css("display", "none");
    $("dt").on("click", function () {
        $("+dd", this).slideToggle(250);
    });
});
