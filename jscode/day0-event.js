$(document).ready(function () {
    $('#switcher-large').on('click', function () {

        $('body').removeClass('narrow');
        $('body').addClass('large');
    });
    $('#switcher-default').on('click', function() {
        $('body').removeClass('narrow');
        $('body').removeClass('large');
    });
    $('#switcher-narrow').on('click', function() {
        $('body').addClass('narrow');
        $('body').removeClass('large');
    });
});


$(document).ready(function () {


    $('#switcher').click(function (event) {
        if(event.target==this)
        $('#switcher button').toggleClass('hidden');
        //event.stopPropagation();
        //event.preventDefault();
    }) ;
});