$(document).ready(function() {
    $("#mycarousel").carousel({
        interval: 2000
    });
    $("#carouselButton").click(function() {
        if ($('#carouselButton').children('span').hasClass('fa-pause')) {
            $("#mycarousel").carousel("pause");
            $('#carouselButton').children('span').removeClass('fa-pause');
            $('#carouselButton').children('span').addClass('fa-play');
        } else {
            $("#mycarousel").carousel("cycle");
            $('#carouselButton').children('span').removeClass('fa-play');
            $('#carouselButton').children('span').addClass('fa-pause');
        }
    });

    $("#btnLoginModal").click(function() {
        $('#loginModal').modal('show');
    });

    $(".btnLoginModalClose").click(function() {
        $('#loginModal').modal('hide');
    });

    $("#btnReserve").click(function() {
        $('#table').modal('show');
    });

    $(".btnReserveClose").click(function() {
        $('#table').modal('hide');
    });
});