
$(document).ready(function() {


    var flavors = ['strawberry', 'chocolate', 'vanilla'];
      $("img.strawberry").click(function() {
        flavors.forEach(function(flavor) {
           alert('I love ' + flavor + '!');
         });

    var word = ["c","h","o","c","o"];
    $("img.chocolate").click(function() {
      word.forEach(function(letter) {
        alert("Spelling " + letter + "!");
      });
    });

    event.preventDefault();
});
});
