$(document).ready(function() {
  $("#userInfo").submit(function(event) {
    var userInfos = ["fav1", "fav2", "fav3", "fav4"];

    userInfos.forEach(function (userInfo) {
      var userInput = $("input#" + userInfo).val();
      $("." + userInfo).text(userInput);

      // var newArray = [];
      // newArray.push(userInfos[1]);
      // $("#fav1").text(newArray[2]);
      // console.log(newArray);
    });
    $("#results").show();


    // The goal: 2,1,3
    // var cloneArray = userInfos.slice();
    // var cloneArray.pop; // cuts off fourth element and returns it, e.g [1,2,3]
    // var cloneArray.reverse // [3,2,1]
    // var cloneArray.command // cut off first element and return it [2,1]
    // // how to fucking stick the cut off the end of this bitch?




    event.preventDefault();
  });

});
