// Check if the screen width is less than or equal to 768 pixels
function isMobileScreen() {
    return window.innerWidth <= 768;
  }
  
  // Open or close modal on tap on mobile screens
  document.addEventListener("click", function(event) {
    if (isMobileScreen()) {
      var modal = document.getElementById("modal");
      if (modal.classList.contains("open")) {
        modal.classList.remove("open");
        document.body.style.overflow = ""; // Enable scrolling on the background content
      } else {
        modal.classList.add("open");
        document.body.style.overflow = "hidden"; // Prevent scrolling on the background content
      }
    }
  });
  