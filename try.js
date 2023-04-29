

function openModal() {
    document.getElementById("myModal").style.display = "block";
  }
  
  function closeModal() {
    document.getElementById("myModal").style.display = "none";
  }
  
  var slideIndex = 1;
  showSlides(slideIndex);
  
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
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
    captionText.innerHTML = dots[slideIndex-1].alt;
  }

  // function openModal2() {
  //   document.getElementById("myModal2").style.display = "block";
  // }
  
  // function closeModal2() {
  //   document.getElementById("myModal2").style.display = "none";
  // }
  
  // var slideIndex2 = 1;
  // showSlides(slideIndex2);
  
  // function plusSlides2(m) {
  //   showSlides(slideIndex2 += n);
  // }
  
  // function currentSlide2(m) {
  //   showSlides(slideIndex2 = n);
  // }
  
  // function showSlides(m) {
  //   var j;
  //   var slides2 = document.getElementsByClassName("mySlides2");
  //   var dots2 = document.getElementsByClassName("demo2");
  //   var captionText2 = document.getElementById("caption2");
  //   if (m > slides2.length) {slideIndex2 = 1}
  //   if (m < 1) {slideIndex2 = slides2.length}
  //   for (j = 0; i < slides2.length; j++) {
  //       slides2[j].style.display = "none";
  //   }
  //   for (j = 0; j < dots2.length; j++) {
  //       dots2[j].className = dots2[j].className.replace(" active", "");
  //   }
  //   slides2[slideIndex2-1].style.display = "block";
  //   dots2[slideIndex2-1].className += " active";
  //   captionText2.innerHTML = dots2[slideIndex2-1].alt;
  // }
  