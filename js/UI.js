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

//   $('.tooltip').tooltip("toggle");

$(document).ready(function() {
  $("#cp-btn").click(function() {
    $(".tooltip").fadeOut("fast", function() {
      $(".tooltip-inner").text("Copied!");
      $(".tooltip").fadeIn("fast");
    });
  });
});

// let o = "font-family: Helvetica, Arial, sans-serif",
//   x = "font-family: 'Brush Script MT',cursive";
// (r = x + "; font-size:30px; line-height: 1.2; color: #fff"),
//   (a = r + "; background-color: #8000ff; padding: 2px 0"),
//   (l = o + "; font-size:18px; line-height: 1.15rem"),
//   (c = l + "; text-decoration: underline"),
//   (u = "");
let h =
    "font-family: 'Brush Script MT',cursive; font-size:40px; color:#fff; border-radius:2px;background-color: #8000ff; padding: 2px; margin-bottom:4px;",
  i = "font-family: Helvetica, Arial, sans-serif; font-size:20px;",
  j =
    "font-family: Impact, sans serif; color:#fff; font-size:34px; border-radius:2px;background-color: #8000ff; padding: 2px;",
  k = "font-family: Helvetica, Arial, sans-serif; font-size:20px;";

window.console.log(
  "\n%cDesign%c is a funny word. \nSome people think design means how it looks. \nBut of course, if you dig deeper, it's really how it %cworks%c. - Steve Jobs %c(https://www.wired.com/1996/02/jobs-2/)",
  h,
  i,
  j,
  i,
  k
);
