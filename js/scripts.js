
$(document).ready(function() {
  $("#blanks form").submit(function(event) {

    var food = $("#food").val();
    var band = $("#band").val();
    var animal = $("#animal").val();
    var book = $("#book").val();
    var favThings = [food, band, animal, book];


    $("ul#display").append("<li>"+ favThings[0] + "</li>");
    $("ul#display").append("<li>"+ favThings[1] + "</li>");
    $("ul#display").append("<li>"+ favThings[2] + "</li>");
    $("ul#display").append("<li>"+ favThings[3] + "</li>");

    event.preventDefault();
  });
});
