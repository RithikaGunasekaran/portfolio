function myFunction() {
    var x = document.getElementById("navjs");
    if (x.className === "nav-container") {
      x.className += " responsive";
    } else {
      x.className = "nav-container";
    }
  }