$(document).ready(function() {
  // var age = parseInt(prompt("How old are you?"));

  // if (age > 18) {
  //   $('#over18').show();
  // } else if (age === 18) {
  //   alert("Vote for Trout");
  //   $('#over18').show();
  // } else {
  //   $('#under18').show();
  // }


  $("form#voting").submit(function(event) {
    event.preventDefault();
    var idea = $("form#ideologyid").val();
    if (idea === "Liberal") {
      alert("congratulations, you're a democrat!");
    }
    else if (choice === "anti-abortion") {
      alert("congrats, you're a republican");
    }

  });

});
