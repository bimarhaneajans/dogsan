$(document).ready(function() {
"use strict";

// OWL CAROUSELS
$("#bg-slider").owlCarousel({
	slideSpeed : 300,
	autoPlay : true,
	pagination : false,
	singleItem:true

});

$("#cap-slider").owlCarousel({
	slideSpeed : 400,
	singleItem:true,
	autoPlay : true,
	pagination : false
});

$("#time-plan").owlCarousel({
	slideSpeed : 400,
	singleItem:true,
	autoPlay : false,
	pagination : false,
	navigation : true,
	navigationText:["<",">"]
})

$("#tweet-slider").owlCarousel({
	slideSpeed : 400,
	singleItem:true,
	autoPlay : true,
	pagination : false
});

// Sticky Header 
$('.sticky-header').waypoint('sticky');

});

// Scroll page on click
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

// Isotope Plugin
$( function() {
"use strict";
  // init Isotope
  var $container = $('#container').isotope({
    itemSelector: '.item',
    layoutMode: 'fitRows'
      });
  
  // bind filter button click
  $('#filters').on( 'click', 'a', function() {
    var filterValue = $( this ).attr('data-filter');
    // use filterFn if matches value
    filterValue = filterFns[ filterValue ] || filterValue;
    $container.isotope({ filter: filterValue });
  });
  // change is-checked class on buttons
  $('#filters a').click(function(){
        $('#filters .current').removeClass('current');
        $(this).addClass('current');
 
        var selector = $(this).attr('data-filter');
        $container.isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
         });
         return false;
    }); 
  
});

