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

// LeafletJS
const lat = 53.19154575419936;
// const lon = pos.coords.longitude;
const lon = -2.534168895042527;
// const time = pos.timestamp;

// 53.19154575419936, -2.534168895042527

// leaflet
var mymap = L.map('mapid').setView([lat, lon], 15);
const attribution = 'Open Street Map';

const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const tiles = L.tileLayer(tileUrl, {attribution});
tiles.addTo(mymap);

// var greenIcon = new L.Icon({
//   iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
//   shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
//   iconSize: [25, 41],
//   iconAnchor: [12, 41],
//   popupAnchor: [1, -34],
//   shadowSize: [41, 41]
// });

var marker = L.marker([lat, lon]).addTo(mymap);
const txt = `1a Alexandra Street, Winsford CW7 2DS, UK <a target="_blank" href="https://www.google.com/maps/dir/?api=1&destination=1a%20Alexandra%20Street,%20Winsford%20CW7%202DS,%20UK">Directions</link>`;

marker.bindPopup(txt);