function showMenu() {
  document.getElementById("menu").classList.toggle("menu");
}

document.addEventListener("scroll", animate);

function animate() {
  let element = document.getElementById("demoanimation");
  let elementHeight = element.clientHeight;
  let windowHeight = window.innerHeight;
  let scrollY = window.scrollY || window.pageYOffset;
  // get current scroll position (distance from the top of the page to the bottom of the current viewport)
  var scrollPosition = scrollY + windowHeight;
  // get element position (distance from the top of the page to the bottom of the element)
  var elementPosition =
    element.getBoundingClientRect().top + scrollY + elementHeight;
  if (elementPosition < scrollPosition) {
    element.classList.add("demo");
  } else {
    element.classList.remove("demo");
  }
}
// carousel
let active = 0;
let imgShow = document.getElementsByClassName("carousel_items");
let img = document.querySelectorAll(".carousel_items img");
let prevBtn = document.getElementById("prevbtn");
let nextBtn = document.getElementById("nextbtn");
nextBtn.addEventListener("click", nextImg);
prevBtn.addEventListener("click", prevImg);
function nextImg() {
  if (active < img.length-1) {
    active++;
    imgShow[0].style.transform = "translateX(-" + active + "00%)";
  } else {
    active = 0;
    imgShow[0].style.transform = "translateX(-" + active + "00%)";
  }
}
function prevImg() {
  active--;
  imgShow[0].style.transform = "translateX(-" + active + "00%)";
}
// setInterval(() => {
//   nextImg();
// }, 5000);
