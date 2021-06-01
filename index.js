toggleInfoDiv();

function toggleInfoDiv() {
  var x = document.getElementById("info-icons");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}