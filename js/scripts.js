// var leapYear = function(year){
//  var result;
//   debugger;
//   if (year % 4 === 0 || year % 400 === 0) {
//     result = true;
// } else if (year % 100 === 0) {
//   result = false;
// } else{
//   result = false;
// }
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
    $("#result").text(result);

    //leapYear(userInput);

  });
});
