$(document).ready(function() {
    $('.navbar-toggler').click(function() {
        //click xong => hiển thị menu-responsive bằng việc xổ từ trên xuống dưới

        $('.nav-menu').slideToggle("slow"); //slideDown + slideUp = slideToggle      

    });

});