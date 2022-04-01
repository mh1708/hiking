$(document).ready(function() {
    $('.navbar-toggler').click(function() {
        //click xong => hiển thị menu-responsive bằng việc xổ từ trên xuống dưới

        $('.nav-menu').slideToggle("slow"); //slideDown + slideUp = slideToggle      

    });
    $('#owl-carousel').owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        dots: false,

        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    })

});