$(function () {
    
    $("#burger").on("submit", function (event) {
        event.preventDefault();
        let burger = {
            burgername: $("#burgername").val()
        };
        $.ajax('/api/burger', {
            type: "POST",
            data: burger
        }).then(
            function () {
                console.log("inserted da burger");
                location.reload();
            }
        );
    });
    