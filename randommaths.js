// waits for the page to be ready - everything in the function will run
$(document).ready(function () {
  // waits for the form to be submitted
  $("#randomForm").submit(function (e) {
    //   e prevents the website from refreshing
    e.preventDefault();
    // min and max get values from the element with the min & max IDs. Number converts it into numbers
    const min = Number($("#minimumnumber").val());
    const max = Number($("#maxnumber").val());
    // generates the random number using min and max
    const random = Math.floor(Math.random() * (max - min + 1)) + min;
    // changes the HTML inside of the element with the ID result
    $("#result").html(random);
  });
});
