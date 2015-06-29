(function($) {
    $(document).ready(function(){
        $(window).scroll(function(){
            if ($(this).scrollTop() > $('#agenda').offset().top -75) {
                $('#nav').fadeIn(500);
            } else {
                $('#nav').fadeOut(500);
            }
        });
    });
})(jQuery);
