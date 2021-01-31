jQuery(function($){  
  if($.isFunction('owlCarousel')){
  $(".testimonial-carousel").owlCarousel({
    navigation : true
  });
}
  
  $('.open-menu').click(function(){
      $('.navbar').toggleClass('open');
    });
  
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
  
    
  // Testimonial carousel (uses the Owl Carousel library)
  $(".testimonial-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
  nav:true,  
  margin:30,  
    animateOut: 'fadeOut',    
  responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
  });  
$( ".owl-prev").html('<i class="fa fa-long-arrow-left"></i>');
 $( ".owl-next").html('<i class="fa fa-long-arrow-right"></i>');

  $(window).scroll(function(){
    if ($(window).scrollTop() >= 132) {
        $('.head-menu-logo').addClass('scroll-header');
    }
    else {
        $('.head-menu-logo').removeClass('scroll-header');
    }
});

});