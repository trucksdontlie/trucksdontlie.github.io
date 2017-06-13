var menuheight = 0;
var lastScrollTop = 0;



$(document).ready(function() {
  heightFix();


});

$(window).resize(heightFix);
$(window).scroll(onScroll);

function heightFix() {
  menuheight = $('.menu').height();
  $('.menu-pushfix').height(menuheight);
  var h = 0;

  $('.heightfix').each(function() {
    var th = $(this).outerHeight();
    if (th > h) {
        h = th;
    }
  });

  $('.heightfix').outerHeight();

}

function onScroll(event) {

  var st = $(window).scrollTop();
  if (st > lastScrollTop){
       if(st > menuheight) {
         $('.menu').css({
           'transform': 'translate3d(0, -200px, 0)'
         });
       }
   } else {
      // upscroll code
      $('.menu').css({
        'transform': 'translate3d(0, 0, 0)'
      });
   }
   lastScrollTop = st;

}

