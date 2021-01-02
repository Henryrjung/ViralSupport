$(document).ready(function() {
      $(".create-form").on("submit", function(event) {
        event.preventDefault();
    
        var newBurger = {
          username: $("#user_name").val().trim(),
        };
    
        $.ajax("/api/burgers", {
          type: "POST",
          data: newBurger
        }).then(function() {
            console.log("created a new burger");
            location.reload();
          }
        );
    });
    
    })