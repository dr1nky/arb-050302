// const menuToggle = document.querySelector('.menu-toggle')
// const mainNav = document.querySelector('.main-nav')
// const mainNavLinks = document.querySelectorAll('.main-nav ul li a')
// const scrollTop = document.querySelector('.scroll-top')
// const nav = document.querySelector('#top');
// let intViewportHeight = window.innerHeight;

// menuToggle.addEventListener('click', () => {
//   menuToggle.classList.toggle('close')
//   mainNav.classList.toggle('show')
// })

// function removeShow() {
//   if(mainNav.classList.contains('show'))
//     mainNav.classList.remove('show')
// }

// window.addEventListener('scroll', removeShow)
// mainNav.addEventListener('click', removeShow)

// function stickyHeader() {
//   if (window.scrollY >= intViewportHeight) {
//     document.body.style.paddingTop = nav.offsetHeight + 'px';
//     document.body.classList.add('sticky')
//   } else {
//     document.body.style.paddingTop = 0;
//     document.body.classList.remove('sticky')
//   }
// }

// window.addEventListener('scroll', stickyHeader)

// function showScrollTop() {
//   if (window.scrollY >= intViewportHeight) {
//     scrollTop.classList.add('show')
//   } else {
//     scrollTop.classList.remove('show')
//   }
// }

// window.addEventListener('scroll', showScrollTop)

// GlideJs Slides
new Glide('.glide').mount()

// baquetteBoxJs Images
baguetteBox.run('.gallery-one')