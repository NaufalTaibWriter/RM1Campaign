window.addEventListener('scroll', function () {
    var logo = document.getElementById('uiaLogo');
    var scrollPosition = window.scrollY;

    var newSize = Math.max(150 - scrollPosition * 0.9, 50);

    logo.style.width = newSize + 'px';
    logo.style.height = newSize + 'px';
});

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
