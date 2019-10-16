$(function () {
    $("#addburger").on("submit", function (event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
      var validBurger = $("#burger").val().trim();
  
      if (validBurger.length > 0) {
        //no blank names
        var newBurger = {
          burger: validBurger
        };
  
        // Send the POST request.
        $.ajax("/api/burgers", {
          type: "POST",
          data: newBurger
        }).then(
          function () {
            console.log("added new burger");
            // Reload the page to get the updated list
            location.reload();
          }
        );
      }; // if (validBurger.length
    });
  
    $(".change-burger").on("click", function (event) {
  
      var id = $(this).data("burgerid");
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: {
          devoured: true
        }
      }).then(
        function () {
          console.log("moved to devoured column");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".delete-burger").on("click", function (event) {
  
      var id = $(this).data("burgerid");
  
      // Send the DELETE request.
      $.ajax("/api/burgers/" + id, {
        type: "DELETE",
        dataType: 'text',
        error: function (e) {
          console.log('error', e)
          location.reload();
        },
        success: function (response) {
          console.log('response', response)
        }
      })
    });
  
  });