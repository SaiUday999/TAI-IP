document.getElementById("viewMenuLink").addEventListener("click", function(event) {
  event.preventDefault();
  document.getElementById("menuImage").style.display = "block";
});

document.getElementById("wrongOptionLink").addEventListener("click", function(event) {
  event.preventDefault();
  document.getElementById("menuImage").style.display = "none";
  document.getElementById("wrongOptionImage").style.display = "block";
});
