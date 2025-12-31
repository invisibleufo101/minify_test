$("#message").on("input", function () {
    if ($(this).val().length > 0) {
        $("#captchaContainer").stop(true).fadeIn(650);
    } else {
        $("#captchaContainer").stop(true).fadeOut(650);
    }
});

$("#message").bind("keyup", function () {
    $("#characterCheck").text($(this).val().length);
    if ($(this).val().length > 2000) {
        $("#characterCheck").addClass("text-danger");
    } else {
        $("#characterCheck").removeClass("text-danger");
    }
});

