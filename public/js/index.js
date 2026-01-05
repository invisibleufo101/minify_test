$("#message").on("input", function () {
    if ($(this).val().length > 0) {
        $("#captchaContainer").stop(true).fadeIn(650);
    } else {
        $("#captchaContainer").stop(true).fadeOut(650);
    }
});