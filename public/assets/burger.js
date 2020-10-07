$(function() {
    $(".change-form").on("submit", function(event) {
        event.preventDefault();
        var newBurger = $(newBurger).data("id");
        //   var newSleep = $(this).data("newsleep");

        //   var newSleepState = {
        //     sleepy: newSleep
        //   };
        var newBurger = {
            burger_name: $("#newBurger")
                .val().trim(),
            devoured: 0
        };
        // Send the PUT request.
        $.ajax("/api/burger/" + id, {
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

    $(".eatburger").on("submit", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        const id = $(this).data("id");
        const devoured = {
            devoured: 1
        };
        // Send the POST request.
        $.ajax("/api/burger/" + id, {
            type: "POST",
            data: devoured
        }).then(
            function() {
                console.log("Burger devoured");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
});