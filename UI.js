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

let o = "font-family: Helvetica, Arial, sans-serif", 
r = o + "; font-size:32px; line-height: 1.5; color: #fff",
a = r + "; background-color: #8000ff; padding: 4px 220px 4px 0",
l = o + "; font-size:14px; line-height: 1.15rem",
c = l + "; text-decoration: underline",
u = "";

window.console.log("\n%cHello There", a);
