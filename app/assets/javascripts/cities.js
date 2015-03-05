$(document).ready(function(){
  $('.jumbotron-header').hover(function() {
    $(this).animate({
      opacity: 0.75,
    }, 'slow');
  }, function(){
    $(this).animate({
      opacity: 1,
    }, 'slow');
  });

  $('.jumbotron-plane').hover(function(){
    $(this).animate({
      opacity: 0.75,
    }, 'slow');
  }, function(){
    $(this).animate({
      opacity: 1,
    }, 'slow');
  });

  $('.jumbotron-map').hover(function(){
    $(this).animate({
      opacity: 0.75,
    }, 'slow');
  }, function(){
    $(this).animate({
      opacity: 1,
    }, 'slow');
  });





});