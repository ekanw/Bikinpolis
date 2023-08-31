const Hamburger = document.querySelector('.hamburger');
const Sidenav = document.querySelector('.sidenav');
const produkAsuransi = document.querySelector('.sidenav-produkasuransi');
const Feature = document.querySelector('.sidenav-feature');

Hamburger.addEventListener("click", function(){
    Hamburger.classList.toggle('aktif');
    Sidenav.classList.toggle('aktif');
});

produkAsuransi.addEventListener("click", function(){
    produkAsuransi.classList.toggle('aktif');
});

Feature.addEventListener("click",function(){
    Feature.classList.toggle('aktif');
});


