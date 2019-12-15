function myFunction(imgs) {
  var bigImg = document.getElementById("bigImg");
  var imgText = document.getElementById("imgtext");
  bigImg.src = imgs.src;
  imgText.innerHTML = imgs.alt;
  bigImg.parentElement.style.display = "block";
}
