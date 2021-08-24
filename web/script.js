loadRequest = new XMLHttpRequest;

loadRequest.onload = function(){
  console.log("hello");
}

loadRequest.open("GET", "test.txt");
loadRequest.send();

function moveToSelected(element) {

    if (element == "next") {
      var selected = $(".selected").next();
    } else if (element == "prev") {
      var selected = $(".selected").prev();
    } else {
      var selected = element;
    }
  
    var next = $(selected).next();
    var prev = $(selected).prev();
    var prevSecond = $(prev).prev();
    var nextSecond = $(next).next();
  
    $(selected).removeClass().addClass("selected");
  
    $(prev).removeClass().addClass("prev");
    $(next).removeClass().addClass("next");
  
    $(nextSecond).removeClass().addClass("nextRightSecond");
    $(prevSecond).removeClass().addClass("prevLeftSecond");
  
    $(nextSecond).nextAll().removeClass().addClass('hideRight');
    $(prevSecond).prevAll().removeClass().addClass('hideLeft');
  
  }
  
  // Eventos teclado
  $(document).keydown(function(e) {
      switch(e.which) {
          case 37: // left
          moveToSelected('prev');
          break;
  
          case 39: // right
          moveToSelected('next');
          break;
  
          default: return;
      }
      e.preventDefault();
  });
  
  $('#prev').click(function() {
    moveToSelected('prev');
  });
  
  $('#next').click(function() {
    moveToSelected('next');
  });






  const track = document.getElementById('track'),
  slides = Array.from(track.children),
  nextSlideButton = document.getElementById('carouselNextSlideButton'),
  previousSlideButton = document.getElementById('carouselPreviousSlideButton'),
  carouselNav = document.getElementById('carouselNav'),
  carouselNavDots = Array.from(carouselNav.children);
window.addEventListener('resize', setSlideImagePosition)
//  current slide is moved to the left when next button is clicked 
function moveSlide(track, currentSlide, targetSlide) { 
  track.style.transform = `translateX(-${targetSlide.style.left})`;
  currentSlide.classList.remove('current-slide');
  targetSlide.classList.add('current-slide');
}
nextSlideButton.addEventListener('click', function () { 
  const currentSlide = track.querySelector('.current-slide');
  const targetSlide = currentSlide.nextElementSibling;
  const currentDot = carouselNav.querySelector('.current-slide');
  const nextDot = currentDot.nextElementSibling;
  if (targetSlide) {
    moveSlide(track, currentSlide, targetSlide)
    updateCarouselDots(currentDot, nextDot)
  } else { 
    const targetSlide = slides[0];
    const nextDot = carouselNavDots[0]
    moveSlide(track, currentSlide, targetSlide)
    updateCarouselDots(currentDot, nextDot)
  }
})
previousSlideButton.addEventListener('click', function () { 
  const currentSlide = track.querySelector('.current-slide');
  const targetSlide = currentSlide.previousElementSibling;
  const currentDot = carouselNav.querySelector('.current-slide');
  const nextDot = currentDot.previousElementSibling;
  if (targetSlide) {
    moveSlide(track, currentSlide, targetSlide)
    updateCarouselDots(currentDot, nextDot)
  } else { 
    const targetSlide = slides[slides.length - 1];
    const nextDot = carouselNavDots[carouselNavDots.length - 1]
    moveSlide(track, currentSlide, targetSlide)
    updateCarouselDots(currentDot, nextDot)
  }
})
carouselNav.addEventListener('click', function (event) { 
  targetDot = event.target.closest('button');
  console.log(targetDot)
  if (!targetDot) { 
    return
  }
  const currentSlide = track.querySelector('.current-slide'),
        currentDot = carouselNav.querySelector('.current-slide'),
        targetIndex = carouselNavDots.findIndex(dot => dot === targetDot),
        targetSlide = slides[targetIndex];
  moveSlide(track, currentSlide, targetSlide);
  updateCarouselDots(currentDot, targetDot);
})
function updateCarouselDots(currentDot, targetDot) { 
  currentDot.classList.remove('current-slide');
  targetDot.classList.add('current-slide');
} 
slides.forEach(setSlideImagePosition)