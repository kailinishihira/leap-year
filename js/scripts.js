var leapYear = function(year){
  return false;
}



$(document).ready(function(){
  $("#leap-year").submit(function(event){
    event.preventDefault();
    var userInput = parseInt($("#year").val());
    var result = leapYear(year);
    $("#result").text(result);

    leapYear(userInput);

  });
});
