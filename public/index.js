document.addEventListener("DOMContentLoaded", function () {
    new TypeIt("#writtenTop", {
      speed: 500,
      strings: [""],
    }).go();
  });


  $(window).on('load', function(){
    setTimeout(function(){ $('h2').fadeIn(2500)},3000);
  }) 