$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })

//   $('.tooltip').tooltip("toggle");

$(document).ready(function() {
    $("#cp-btn").click(function() {
        $(".tooltip").fadeOut("fast", function(){
             $(".tooltip-inner").text("Copied!");
             $(".tooltip").fadeIn("fast");
         });
    });
});
