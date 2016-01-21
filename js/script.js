$(document).ready(function(){
    $('.scrollspy').scrollSpy();
    $('.parallax').parallax();
    $('ul.tabs').tabs();

    var options = [
      {selector: '#projects', offset: 300, callback: 'showNavbar()'}
    ];

    Materialize.scrollFire(options);
  });

  function showNavbar(){
    $('.navbar-fixed').fadeIn("slow");
  }
