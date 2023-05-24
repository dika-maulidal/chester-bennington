var nav = document.querySelector('nav');
window.addEventListener('scroll', function () {
    if (window.pageYOffset > 13) {
        nav.classList.add('bg-dark', 'shadow');
    } else {
        nav.classList.remove('bg-dark', 'shadow');
    }
});

lightbox.option({
    'resizeDuration': 250,
    'wrapAround': true
});

$('.page-scroll').on('click', function () {
    var tujuan = $(this).attr('href');
    var elemenTujuan = $(tujuan);
    $('html, body').animate({
        scrollTop: elemenTujuan.offset().top - 80
    }, 1250, 'swing');
    e.preventDefault();
});
