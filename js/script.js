$(document).ready(function(){
    $('.scrollspy').scrollSpy();
    $('.parallax').parallax();
    $('ul.tabs').tabs();

    var options = [
      {selector: '#about', offset: 250, callback: 'fixNavbar()'}
    ];

    Materialize.scrollFire(options);
  });

  function fixNavbar(){
    $('.navbar').addClass('navbar-fixed').removeClass('navbar');
    $('ul.table-of-contents > li').children().css("color", "white");
    $('nav').removeClass("transparent").addClass("teal lighten-3");
  }
