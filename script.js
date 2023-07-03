document.onkeydown = function (e) {
  console.log("key code is :", e.keyCode);
  if (e.keyCode == 38) {
    dino = document.querySelector(".dino");
    dino.classList.add("animateDino");
    setTimeout(() => {
      dino.classList.remove("animateDino");
    }, 700);
  }
};
setInterval(() => {
  dino = document.querySelector(".dino");
  gameOver = document.querySelector(".gameOver");
  obstacle = document.querySelector(".obstacle");
  dx = window.getComputedStyle(dino, null).getPropertyValue("left");
  dy = window.getComputedStyle(dino, null).getPropertyValue("top");
  ox = window.getComputedStyle(obstacle, null).getPropertyValue("left");
  oy = window.getComputedStyle(obstacle, null).getPropertyValue("top");
  offSetX = Math.abs(dx - ox);
  offSetY = Math.abs(dy - oy);
  if (offSetX < 93 && offSetY < 52) {
    gameOver.style.visibility;
  }
}, 100);
