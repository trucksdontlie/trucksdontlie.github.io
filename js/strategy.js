

if(window.location.hash) {
    $('html,body').animate({
        scrollTop: $(window.location.hash).offset().top
    });
}



var img_array = ['img/bars.svg', 'img/x.svg'];
i = 0;


function changePic() {
    i++;
    document.getElementById("buttonimg").src = img_array[i];
    if (i == img_array.length - 1) {
        i = -1;
    }
}

$(document).on('click', '.pop', function(event){
         return false;
});


$(document).on('click', 'ul > li > a', function(event){
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
});

$(document).on('click', '#side-header > span > a', function(event){
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
});


function getOffset (el) {
    const box = el.getBoundingClientRect();
    return {
        top: box.top + window.pageYOffset - document.documentElement.clientTop,
        left: box.left + window.pageXOffset - document.documentElement.clientLeft
    };
}

var totalheight;
var SHIFTheight;
var stickyNavTop;
var offset1,offset2,offset3;

var bold = "600";
var thin = "100";
var white = "#fff";
var black = "#000";

var elem1, elem2, elem3; 


redrawsidebar = function(){
        var position = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
        if (position > stickyNavTop-SHIFTheight+10) {
            navbardesk.classList.add('navbar-fixed');
            // $('side-footer').css('position') = "absolute";
        }else{
            navbardesk.classList.remove('navbar-fixed');
            // $('side-footer').css('position') = "static";
        }
                        
        if (position > offset3){
            elem1.style.fontWeight = thin; 
            elem2.style.fontWeight = thin; 
            elem3.style.fontWeight = bold; 
        }
        else{
            if (position > offset2){
                elem1.style.fontWeight = thin; 
                elem2.style.fontWeight = bold; 
                elem3.style.fontWeight = thin; 
            }
            else{
                if (position > offset1){
                    elem1.style.fontWeight = bold; 
                    elem2.style.fontWeight = thin; 
                    elem3.style.fontWeight = thin; 
                }
            }
        };
    }


document.getElementById('first-image').addEventListener("load", function(){
    stickyNavTop = getOffset(document.getElementById('nav_bar_desktop')).top
    const body = document.body;
    const html = document.documentElement;
    const height = Math.max(
        body.offsetHeight,
        body.scrollHeight,
        html.clientHeight,
        html.offsetHeight,
        html.scrollHeight
    );
    totalheight = 0.25*height;
});

docHandler = function() {
    const body = document.body;
    const html = document.documentElement;
    const height = Math.max(
        body.offsetHeight,
        body.scrollHeight,
        html.clientHeight,
        html.offsetHeight,
        html.scrollHeight
    );
    totalheight = 0.25*height;

    SHIFTheight = document.getElementById('shiftlogo').clientHeight;
    stickyNavTop = getOffset(document.getElementById('nav_bar_desktop')).top
    

    offset1 = getOffset(document.getElementById('section1')).top-200;
    offset2 = getOffset(document.getElementById('section2')).top-200;
    offset3 = getOffset(document.getElementById('section3')).top-200;

    elem1 = document.getElementById("font1");
    elem2 = document.getElementById("font2");
    elem3 = document.getElementById("font3");

    navbardesk =  document.getElementById('nav_bar_desktop');
    window.addEventListener("scroll", redrawsidebar);    
};


// if (document.readyState === 'complete' || document.readyState !== 'loading') {
//     docHandler();
// } else {
//     document.addEventListener('DOMContentLoaded', docHandler);
// }

if (window.readyState === 'complete' || window.readyState !== 'loading') {
    docHandler();
} else {
    window.addEventListener('DOMContentLoaded', docHandler);
}


$(function() {
    $('.pop').on('click', function() {
        $('.imagepreview').attr('src', $(this).find('img').attr('src'));
        $('.modal-content > .caption').text( $(this).parent().find('span').text());
        console.log($(this).parent().find('span').text());
        $('#imagemodal').modal('show');   
    });		
});
