const hand = document.querySelector(".hand");
document.addEventListener("mousemove", (e) => {
  var mouseX = e.pageX;
  var mouseY = e.pageY;
  hand.style.left = mouseX + "px";
  hand.style.top = mouseY + "px";
});

const image1 = document.querySelector(".image1");
const image2 = document.querySelector(".image2");

image1.onclick = () => {
  image1.classList.toggle("highlight");
  image2.classList.toggle("hide");
};

image2.onclick = () => {
  image2.classList.toggle("highlight");
  image1.classList.toggle("hide");
};
