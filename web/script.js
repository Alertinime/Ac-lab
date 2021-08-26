loadRequest = new XMLHttpRequest;

loadRequest.onload = function(){
  console.log("hello");
}

loadRequest.open("GET", "test.txt");
loadRequest.send();

const $ = selector => {
  return document.querySelector(selector);
};

//1 (hide)
var img_hide= document.createElement("img");
img_hide.src = "https://picsum.photos/1920/1080";
document.getElementsByClassName("hide")[0].appendChild(img_hide);
//2 (prev)
var img_prev = document.createElement("img");
img_prev.src = "https://picsum.photos/1920/1080";
document.getElementsByClassName("prev")[0].appendChild(img_prev);
//3 (act)
var img_act = document.createElement("img");
img_act.src = "ressources/acs.jpg";
document.getElementsByClassName("act")[0].appendChild(img_act);
//4 (next)
var img_next = document.createElement("img");
img_next.src = "https://picsum.photos/1920/1080";
document.getElementsByClassName("next")[0].appendChild(img_next);
//5 (next new-next)
var img_next_new = document.createElement("img");
img_next_new.src = "https://picsum.photos/1920/1080";
document.getElementsByClassName("next new-next")[0].appendChild(img_next_new);

function next() {


  if ($(".hide")) {
    temp_img = document.getElementsByClassName("hide")[0].firstChild
    $(".hide").remove(); 
  }

  /* Step */

  if ($(".prev")) {
    $(".prev").classList.add("hide");

    $(".prev").classList.remove("prev");
  }

  $(".act").classList.add("prev");

  $(".act").classList.remove("act");

  $(".next").classList.add("act");
  $(".next").classList.remove("next");

  /* New Next */

  $(".new-next").classList.remove("new-next");


  const addedEl = document.createElement('li');

  $(".list").appendChild(addedEl);
  addedEl.classList.add("next","new-next");
  document.getElementsByClassName("next new-next")[0].appendChild(temp_img);

}

function prev() {
  temp_img2 = document.getElementsByClassName("new-next")[0].firstChild
  $(".new-next").remove();
    
  /* Step */

  $(".next").classList.add("new-next");

  $(".act").classList.add("next");
  $(".act").classList.remove("act");

  $(".prev").classList.add("act");
  $(".prev").classList.remove("prev");

  /* New Prev */

  $(".hide").classList.add("prev");
  $(".hide").classList.remove("hide");

  const addedEl = document.createElement('li');

  $(".list").insertBefore(addedEl, $(".list").firstChild);
  addedEl.classList.add("hide");
  document.getElementsByClassName("hide")[0].appendChild(temp_img2);
}

slide = element => {
  /* Next slide */
  
  if (element.classList.contains('next')) {
    next();
    
  /* Previous slide */
    
  } else if (element.classList.contains('prev')) {
    prev();
  }
}

const slider = $(".list"),
      swipe = new Hammer($(".swipe"));

slider.onclick = event => {
  slide(event.target);
}

swipe.on("swipeleft", (ev) => {
  next();
});

swipe.on("swiperight", (ev) => {
  prev();
});