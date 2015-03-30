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

        //捕获键盘和用户点击操作  $(doctument).keyup()   .click .trigger('click')  删除事件off 捕获事件on() 使用命名空间增加准确度
    }) ;
});