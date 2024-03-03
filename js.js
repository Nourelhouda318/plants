window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 0) {
        header.classList.add('solid');
    } else {
        header.classList.remove('solid');
    }
});