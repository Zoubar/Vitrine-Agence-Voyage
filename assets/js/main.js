let btnUp = document.querySelector(".btn-up");
let header = document.querySelector('header nav');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav .links li a');
window.onscroll = function () {
    this.scrollY >= 600 ? btnUp.classList.add('show-btn-up') : btnUp.classList.remove('show-btn-up')
    this.scrollY >= 600 ? header.classList.add('for-header') : header.classList.remove('for-header')
    // active style for links
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove("active")
                document.querySelector('header nav .links li a[href*=' + id + ']').classList.add('active');

            });
        }
    })
}
btnUp.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}