// // var slideIndex = 0;
// // showSlides();

// // function showSlides() {
// //   var i;
// //   var slides = document.getElementsByClassName("mySlides");
// //   var dots = document.getElementsByClassName("dot");
// //   for (i = 0; i < slides.length; i++) {
// //     slides[i].style.display = "none";  
// //   }
// //   slideIndex++;
// //   if (slideIndex > slides.length) {slideIndex = 1}    
// //   for (i = 0; i < dots.length; i++) {
// //     dots[i].className = dots[i].className.replace(" active", "");
// //   }
// //   slides[slideIndex-1].style.display = "block";  
// //   dots[slideIndex-1].className += " active";
// //   setTimeout(showSlides, 5000); // Change image every 2 seconds
// // }
// // 
// function plusSlides(n){
//   clearInterval(myTimer);
//   if (n < 0){
//     showSlides(slideIndex -= 1);
//   } else {
//    showSlides(slideIndex += 1); 
//   }
//   if (n === -1){
//     myTimer = setInterval(function(){plusSlides(n + 2)}, 4000);
//   } else {
//     myTimer = setInterval(function(){plusSlides(n + 1)}, 4000);
//   }
// }
// function showSlides(n){
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
// }
// window.addEventListener("load",function() {
//     showSlides(slideIndex);
//     myTimer = setInterval(function(){plusSlides(1)}, 4000);
// }
// function currentSlide(n){
//   clearInterval(myTimer);
//   myTimer = setInterval(function(){plusSlides(n + 1)}, 4000);
//   showSlides(slideIndex = n);
// }

// 'use strict';
// var slideIndex = 1;

// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   //alert('showslides('+ n +')\nslideIndex='+slideIndex);
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("dot");
//   if (n==undefined){n = ++slideIndex}
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
  
//   setTimeout(showSlides, 5000); // Change image every 5 seconds
// }
var slideIndex = 1;
var timer = null;
showSlides(slideIndex);

function plusSlides(n) {
  clearTimeout(timer);
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  clearTimeout(timer);
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n==undefined){n = ++slideIndex}
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
  timer = setTimeout(showSlides, 5000);
} 


var mobile = "m_2.jpg";
function changeImage() {
    if (mobile == "m--2.jpg") {
        document.images["picture"].src = "pic/m--2.jpg";
        document.images["picture"].alt = "Front";
        mobile = "m_2.jpg";
    } else if(mobile=="m_2.jpg") {
        document.images["picture"].src = "pic/m_2.jpg";
        document.images["picture"].alt = "Details";
        mobile = "m_3.jpg";
    } else if(mobile=="m_3.jpg") {
        document.images["picture"].src = "pic/m_3.jpg";
        document.images["picture"].alt = "Back";
        mobile = "m_4.jpg";
    } else if(mobile=="m_4.jpg") {
        document.images["picture"].src = "pic/m_4.jpg";
        document.images["picture"].alt = "Righ";
        mobile = "m_5.jpg";
    } else if(mobile=="m_5.jpg") {
        document.images["picture"].src = "pic/m_5.jpg";
        document.images["picture"].alt = "Left";
        mobile = "m_6.jpg";
    } else {
        document.images["picture"].src = "pic/m_6.jpg";
        document.images["picture"].alt = "Side";
        mobile = "m--2.jpg";
    }
}
// Set the date we're counting down to
var countDownDate = new Date("July 31, 2020 00:00:00").getTime();
// Update the count down every 1 second
var x = setInterval(function() {
  // Get today's date and time
  var now = new Date().getTime();
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
  // Time calculations for hours, minutes and seconds
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  // Display the result in the element with id="timer"
  document.getElementById("timer").innerHTML = "Hurry Up! Only " + hours + "h "
  + minutes + "m " + seconds + "s left!!!";
  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "EXPIRED";
  }
}, 1000);


