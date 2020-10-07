$(function() {
    $(".create-form").on("submit", function(event) {
        event.preventDefault();

        var newBurger = {
            burger_name: $("#burger")
                .val().trim(),
            devoured: 0
        };
        // Send the POST request.
        $.ajax("/api/burgers/", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
                console.log("Added new burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".change-burger").on("click", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();
        var newdevoured = $(this).data("newdevoured");
        const id = $(this).data("id");
        const devoured = {
            devoured: newdevoured
        };
        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: devoured
        }).then(
            function() {
                console.log("Burger devoured");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".delete-burger").on("click", function(event) {
        // Make sure to preventDefault on a submit event.
        const id = $(this).data("id");
        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "DELETE",

        }).then(
            function() {
                console.log("Burger deleted");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
});




module.exports = burgers;