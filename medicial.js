
// slider 1


let slideIndexs = 1;
showSlidess(slideIndexs);

// Next/previous controls
function plusSlides(n) {
  showSlidess(slideIndexs += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlidess(slideIndexs = n);
}

function showSlidess(n) {
  let i;
  let slides = document.getElementsByClassName("aboute-manager");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndexs = 1}
  if (n < 1) {slideIndexs = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndexs-1].style.display = "block";
  dots[slideIndexs-1].className += " active";
}

// slider2

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides2(n) {
showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide2(n) {
showSlides(slideIndex = n);
}

function showSlides(n) {
let i;
let slides = document.getElementsByClassName("abute-doctors");
let dots = document.getElementsByClassName("dot");
if (n > slides.length) {slideIndex = 1}
if (n < 1) {slideIndex = slides.length}
for (i = 0; i < slides.length; i++) {
slides[i].style.display = "none";
}
for (i = 0; i < dots.length; i++) {
dots[i].className = dots[i].className.replace(" active", "");
}
slides[slideIndex-1].style.display = "block";
dots[slideIndex-1].className += " active";
}

//  openNav

function openNav() {
document.querySelector(".navbar-list ul").style.display = "block";
document.querySelector(".fa-times").style.display = "block";
}

function closeNav() {
document.querySelector(".navbar-list ul").style.display = "none";
}
