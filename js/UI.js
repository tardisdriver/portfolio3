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

let o = "font-family: Helvetica, Arial, sans-serif",
  r = o + "; font-size:32px; line-height: 1.5; color: #fff",
  a = r + "; background-color: #8000ff; padding: 4px 220px 4px 0",
  l = o + "; font-size:14px; line-height: 1.15rem",
  c = l + "; text-decoration: underline",
  u = "";

window.console.log(
  "\n%cDesign is a funny word. Some people think design means how it looks. But of course, if you dig deeper, it's really how it works. - Steve Jobs",
  a
);
