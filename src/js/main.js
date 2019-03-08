
$(document).ready(function () {
  $(window).on('scroll', function () {
    var height = $(window).scrollTop();
    if ($(window).width() > 640) {
      if (height > 55) {
        $('#logo img').stop().animate({
          height: "55px",
          width: "100px"
        }, 600);
      }
      else {
        $('#logo img').stop().animate({
          height: "200px",
          width: "160"
        }, 600);
      }
    }
  });

  $('.nav').localScroll();

  $('.read').click(function () {
    $('#motorReport').slideToggle('slow')
  });
  $('.read1').click(function () {
    $('#wardsauto').slideToggle('slow')
  });
  $('.read2').click(function () {
    $('#behindWheel').slideToggle('slow')
  });

  if ($(window).width() < 640) {
    $('#menu').click(function () {
      $('#menu ul').slideToggle('slow')
    });
  }


  var brojac = 0;
  slider();

  function slider() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    brojac++;
    if (brojac > slides.length) {
      brojac = 1
    }
    slides[brojac - 1].style.display = "block";
    setTimeout(slider, 6000);
  }


});



















