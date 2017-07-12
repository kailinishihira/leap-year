var leapYear = function(year){

  debugger;
  if (year % 4 === 0) {
    return true;
} else
  return false;
}



$(document).ready(function(){
  $("#leap-year").submit(function(event){
    event.preventDefault();
    var userInput = parseInt($("#year").val());
    var result = leapYear(userInput);
    $("#result").text(result);

    //leapYear(userInput);

  });
});
