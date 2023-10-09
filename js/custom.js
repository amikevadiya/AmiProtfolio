
$(function() {
    var $item = $('nav ul li');
    
    $item.on('click', 'a', function(event) {
      var $section = $($(this).attr('href'));
      var sectionTop = $section.offset().top;   
  
      $('html, body').stop().animate({scrollTop: sectionTop}, 1000);
      
      event.preventDefault();
    });
    
    $(window).scroll(function() {
      var scrollTop = $(this).scrollTop();
      
      $item.each(function() {
        var $section = $($(this).find('a').attr('href'));
        var sectionTop = $section.offset().top - 60;
        var sectionHeight = $section.height();
        
        if (sectionTop <= scrollTop && (sectionTop + sectionHeight) > scrollTop) {
          $(this).addClass('active');
          $(this).siblings().removeClass('active');
        }
      });
    });
  });
  
// jQuery(document).ready(function($) {
//     function scrollToSection(event) {
//         event.preventDefault();
//         var $section = $($(this).attr('href')); 
//         $('html, body').animate({
//             scrollTop: $section.offset().top - 60
//         }, 1000);
//     }
//     $('[data-scroll]').on('click', scrollToSection);
// }(jQuery)); 

$(window).scroll(function(){
var sticky = $('nav'),
    scroll = $(window).scrollTop();

if (scroll >= 100) sticky.addClass('fixed-top');
else sticky.removeClass('fixed-top');
});
