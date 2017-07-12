var leapYear = function(year){
  if ((year % 4 === 0) && (year % 100 !== 0 || year % 400 === 0)) {
    return true;
  }else{
    return false;
  }
}



$(document).ready(function(){
  $("#leap-year").submit(function(event){
    event.preventDefault();
    var userInput = parseInt($("#year").val());
    var result = leapYear(userInput);
    $(".year").text(userInput);
    if (result === false) {
      $(".not").text("not");
    } else {
      $(".not").text("");
    }
    $("#result").show();

  });
});
