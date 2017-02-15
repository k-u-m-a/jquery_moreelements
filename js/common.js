jQuery(function ($) {
    var i = 1;
    $('.cont_02').hide();
    $('.cont_03').hide();
    $('.cont_04').hide();
    $('#ClickBtn').on('click', function () {
        i += 1;
        $(`.cont_0${i}`).fadeIn('slow');
        if (i == 4) {
            $('#ClickBtn').hide();
        };
    });
});
