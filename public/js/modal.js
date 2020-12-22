// Get the modal
var modal = document.getElementById("myModal");

// button that opens the modal
var btn = document.getElementById("myBtn");

// element that closes the modal
var span = document.getElementsByClassName("close")[0];

// opens the modal on page load
$(document).ready(function(){
 
    $(".modal").addClass("is-active");
 
});

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
  }
  
  // When the user clicks on x, modal closes
  span.onclick = function() {
      modal.style.display = "none";
    }
    
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
