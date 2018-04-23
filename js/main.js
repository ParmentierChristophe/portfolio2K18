var loader = document.getElementById("overlay");
var app = document.getElementById("app");
var delayInMilliseconds = 2500; //1 second

$(function(){
  setTimeout(function() {
    $('#overlay').fadeTo( "slow", 0 );
    loader.style.display = 'none';
    $('#app').fadeIn("slow");

    app.style.display = 'block';

}, delayInMilliseconds);


});




(function($) {

 var VerticalSlide = {

  setting: {
   delta: 0,
   currentIndex: 0,
   scrollInit: 40,
   slides: $('.slide'),
   numSlides: $('.slide').length,
  },


  init: function() {
   s = this.setting;
   this.events();
  },

  events: function() {
   s.slides.on({
    'DOMMouseScroll mousewheel': VerticalSlide.handleScroll
   });
   $(document).keyup(function(e) {
  // Left or back arrows
  if ((e.which === 37) ||  (e.which === 38)){
    VerticalSlide.prevSlide();
  }
  // Down or right
  if ((e.which === 39) ||  (e.which === 40)) {
    VerticalSlide.nextSlide();
  }
});
  },



  handleScroll: function(e) {

   // Scroll up
   if (e.originalEvent.detail < 0 || e.originalEvent.wheelDelta > 0) {

    s.delta--;

    if (Math.abs(s.delta) >= s.scrollInit) {
     VerticalSlide.prevSlide();
    }
   }

   // ScrollDown
   else {

    s.delta++;

    if (s.delta >= s.scrollInit) {
     VerticalSlide.nextSlide();
    }
   }

   return false;
  },


  showSlide: function() {
   s.delta = 0;

   s.slides.each(function(i, slide) {

    $(slide).toggleClass('is-active', (i === s.currentIndex));



   });
  },

    prevSlide: function(){

      // first slide, go to last
      if (s.currentIndex <= 0) {
        s.currentIndex = s.numSlides;
      }
      s.currentIndex--;

      VerticalSlide.showSlide();
    },


    nextSlide: function(){

      s.currentIndex++;

      // last slide, go to first
      if (s.currentIndex >= s.numSlides) {
        s.currentIndex = 0;
      }

      VerticalSlide.showSlide();
    },

 };

 VerticalSlide.init();


})(jQuery);
