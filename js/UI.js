window.onload = function() {
  var mobile = /iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(
    navigator.userAgent.toLowerCase()
  );
  if (mobile) {
    $(".contact-info").html(
      '<p id="my-email">Email: <a href="mailto:stark.tracy@gmail.com">stark.tracy@gmail.com</a></p>'
    );
  }
};

$(function() {
  $('[data-toggle="tooltip"]').tooltip();
});

$(document).ready(function() {
  $("#cp-btn").click(function() {
    $(".tooltip").fadeOut("fast", function() {
      $(".tooltip-inner").text("Copied!");
      $(".tooltip").fadeIn("fast");
    });
  });
  if (screen.width >= 926) {
    $("#canvasOne").attr("width", 475);
  }
});

let h =
    "font-family: 'Brush Script MT',cursive; font-size:40px; color:#034dc4;",
  i = "font-family: Helvetica, Arial, sans-serif; font-size:18px;",
  j =
    "font-family: Impact, sans serif; color:#0d8400; font-size:34px; border-radius:2px;; padding: 2px;";

window.console.log(
  "\n%cDesign%c is a funny word. \nSome people think design means how it looks. But of course, if you dig deeper, it's really how it \n%cworks%c. \n- Steve Jobs (https://www.wired.com/1996/02/jobs-2/)",
  h,
  i,
  j,
  i
);
