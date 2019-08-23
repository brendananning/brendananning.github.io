var controller;
var scenes = [];
var activeScenes = [];
var smScene;
var scrollMagicEnabled = false;
var firstTime = true;

function preventScrollOnMenuOpen(){
  //If the dropdown menu on mobile is open
  if ($(".collapse.in").length){
    $("body").css("overflow-y", "hidden");
    //If user scrolls when menu open 
    //Then closes menu without selection
    //Check if the menu has been closed after 1000msecs
    setTimeout(function(){
      preventScrollOnMenuOpen();
    }, 1500);
  } 
  //Prevent scrolling until menu is closed
  else {
    $("body").css("overflow-y", "scroll");
  }
}
function applyEffects(element){
  element.css("width", "100%");
  element.css("height", "240px");
  element.css("left", "-8px");
  element.css("top", "-18px");
  element.css("box-shadow", "-1px 3px 26px 0px rgba(0,0,0,0.75)");

  //Trigger the number fade in on element hover
  element.prev().prev().css("top", "-11px");
  element.prev().prev().css("opacity", "1");
}

function resetEffects(element){
  element.removeAttr("style");

  //For the number
  element.prev().prev().removeAttr("style");
}

function hoverEffects() {
  $(".aml").parent().hover(
    function() {
      $(".portfolio-title").stop().animate({'opacity': 0}, 200, function(){
        $(".portfolio-title").text("Melbourne Asset Management").animate({'opacity': 1}, 200);
      });
      applyEffects($(this).find('.backdrop'));
    },
    function() {
      $(".portfolio-title").stop().animate({'opacity': 0}, 200, function(){
        $(".portfolio-title").text("Portfolio").animate({'opacity': 1}, 200);
      });
      resetEffects($(this).find('.backdrop'));
    }
  );
  $(".tla").parent().hover(
    function() {
      $(".portfolio-title").stop().animate({'opacity': 0}, 200, function(){
        $(".portfolio-title").text("Government and Defence Logistics Management").animate({'opacity': 1}, 200);
      });
      applyEffects($(this).find('.backdrop'));
    },
    function() {
      $(".portfolio-title").stop().animate({'opacity': 0}, 200, function(){
        $(".portfolio-title").text("Portfolio").animate({'opacity': 1}, 200);
      });
      resetEffects($(this).find('.backdrop'));
    }
  );
  $(".qutrunning").parent().hover(
    function() {
      $(".portfolio-title").stop().animate({'opacity': 0}, 200, function(){
        $(".portfolio-title").text("Running Club of QUT").animate({'opacity': 1}, 200);
      });
      applyEffects($(this).find('.backdrop'));
    },
    function() {
      $(".portfolio-title").stop().animate({'opacity': 0}, 200, function(){
        $(".portfolio-title").text("Portfolio").animate({'opacity': 1}, 200);
      });
      resetEffects($(this).find('.backdrop'));
    }
  );
  $(".quteb").parent().hover(
    function() {
      $(".portfolio-title").stop().animate({'opacity': 0}, 200, function(){
        $(".portfolio-title").text("Exchange Club of QUT").animate({'opacity': 1}, 200);
      });
      applyEffects($(this).find('.backdrop'));
    },
    function() {
      $(".portfolio-title").stop().animate({'opacity': 0}, 200, function(){
        $(".portfolio-title").text("Portfolio").animate({'opacity': 1}, 200);
      });
      resetEffects($(this).find('.backdrop'));
    }
  );
  $(".daryl").parent().hover(
    function() {
      $(".portfolio-title").stop().animate({'opacity': 0}, 200, function(){
        $(".portfolio-title").text("Brisbane Entertainer").animate({'opacity': 1}, 200);
      });
      applyEffects($(this).find('.backdrop'));
    },
    function() {
      $(".portfolio-title").stop().animate({'opacity': 0}, 200, function(){
        $(".portfolio-title").text("Portfolio").animate({'opacity': 1}, 200);
      });
      resetEffects($(this).find('.backdrop'));
    }
  );
  $(".aaron").parent().hover(
    function() {
      $(".portfolio-title").stop().animate({'opacity': 0}, 200, function(){
        $(".portfolio-title").text("Brisbane Entertainer and DJ").animate({'opacity': 1}, 200);
      });
      applyEffects($(this).find('.backdrop'));
    },
    function() {
      $(".portfolio-title").stop().animate({'opacity': 0}, 200, function(){
        $(".portfolio-title").text("Portfolio").animate({'opacity': 1}, 200);
      });
      resetEffects($(this).find('.backdrop'));
    }
  );
  $(".food-interact").hover(
    function() {
      $(".food-background").addClass("active");
    },
    function() {
      $(".food-background").removeClass("active");
    }
  );
  $(".skill-item").click(function() {
    var thisElement = $(this);
    thisElement.css("opacity", "0");
    setTimeout( function(){
      $('skills').find("skill-item").css('opacity', '0');
      thisElement.css("opacity", "1");
    }, 1000);
  });
  $(".experience-item").click(function() {
    var thisElement = $(this);
    thisElement.css("opacity", "0");
    setTimeout( function(){
      $('experience').find("experience-item").css('opacity', '0');
      thisElement.css("opacity", "1");
    }, 1000);
  });
  // //Make skill item disappear on hover for 800ms
  // $('.skill-item')
  //   .mouseover(function() {
  //     $(this).css("opacity", "0");
  //   })
  //   .mouseout(function() {
  //     setTimeout( function(){
  //       $(this).css("opacity", "1");
  //     }, 3200);
  //   });
}

function particleJSHoverEffects(){
  //Modify particles JS colours on hover
  $('#particles-js')
    .mouseover(function() {
      const newColor = '#fff';
      $.each(pJSDom[0].pJS.particles.array, function(i,p){
        pJSDom[0].pJS.particles.array[i].color.value = newColor;
        pJSDom[0].pJS.particles.array[i].color.rgb = hexToRgb(newColor);
        pJSDom[0].pJS.particles.line_linked.color_rgb_line = hexToRgb(newColor);
      });
    })
    .mouseout(function() {
      const newColor = '#fff';
      $.each(pJSDom[0].pJS.particles.array, function(i,p){
        pJSDom[0].pJS.particles.array[i].color.value = newColor;
        pJSDom[0].pJS.particles.array[i].color.rgb = hexToRgb(newColor);
        pJSDom[0].pJS.particles.line_linked.color_rgb_line = hexToRgb(newColor);
      });
  });
}

function addWhiteNav(){
  $(".navbar-nav li a").css("color", "black");
  $(".navbar-default").css("background-color", "rgba(255,255,255,0.9)");
  $(".navbar-collapse").css("background-color", "rgba(255,255,255,0.9)");
  $(".navbar-default").css("border-top", "none");
  $(".bars .line").css("stroke", "#3b3b3b");
}
function addTransparentNav(){
  //Make navbar transparent if scroll position is on main section
  $(".navbar-nav li a").css("color", "white");
  $(".navbar-default").css("background-color", "transparent");
  $(".navbar-default").css("border-top", "none");
  $(".navbar-collapse").css("background-color", "none");
}
function addWhiteNavDesktop(){
  $(".navbar-nav li a").css("color", "black");
  $(".navbar-default").css("background-color", "#fff");
  $(".navbar-default").css("border-top", "none");
  $(".navbar-collapse").css("background-color", "none");
}
function addDarkNavDesktop(){
  $(".navbar-nav li a").css("color", "white");
  $(".navbar-default").css("background-color", "rgb(30, 25, 44)");
  $(".navbar-default").css("border-top", "none");
  $(".navbar-collapse").css("background-color", "none");
}

function animateNavbar(){
  //If on mobile
  if($(window).width() < 767){
    $(".navbar-default").addClass("opaque");
    $(".navbar-nav").removeClass("fade-last");
    addWhiteNav();
  }
  //If on desktop
  else {
    $(".navbar-nav").addClass("fade-last");
    //Scroll position is in About section
    if($(document).scrollTop() > 1) {
      addWhiteNavDesktop();
    }
    //Scroll position is in Main section
    else {
      //Make navbar transparent if scroll position is on main section
      addTransparentNav();
    }
    //Scroll position is in Portfolio section
    if($(document).scrollTop() > (($(".about").outerHeight()) + 10)) {
      addDarkNavDesktop();
    }
    //Scroll position is in Skills section
    if($(document).scrollTop() > (($(".about").outerHeight() + $(".portfolio").outerHeight())  + 10)) {
      addWhiteNavDesktop();     
    }
    //Scroll position is in Experience section
    if($(document).scrollTop() > (($(".about").outerHeight() + $(".portfolio").outerHeight() + $(".skills").outerHeight())  + 10)) {
      addDarkNavDesktop();
    }
    //Scroll position is in Experience section
    if($(document).scrollTop() > (($(".about").outerHeight() + $(".portfolio").outerHeight() + $(".skills").outerHeight() + $(".experience").outerHeight())  + 10)) {
      addWhiteNavDesktop();
    }
  }
}

function createGoTopArrow(){
  var target = "#home";
  var offset = 0;

  // Set the background arrow dependent on the page scroll location  
  if ($(this).scrollTop() > 70) {        // If page is scrolled more than 70px
    $('.arrow-img').css("background", "url('./files/img/icons/arrow_up.png");    // Change arrow to up
    $('.arrow').css("background", "rgba(0, 0, 0, 0.7)");    // Add background
    if($(window).width() > 767){
      setTimeout(function(){ //Add delay in case of resizing
        $('.arrow').css("bottom", "70px");
      }, 200);
    }
    target = "#home";
  } 
  else {
    $('.arrow-img').css("background", "url('./files/img/icons/arrow_down.png");    // Change arrow to down
    $('.arrow').css("background", "none");    // Remove background
    if($(window).width() > 767){
      setTimeout(function(){
        $('.arrow').css("bottom", "6px");   
      }, 200);
    }
    target = "#about";
  }
  $(window).scroll(function() {
    if ($(this).scrollTop() > 70) {        
      $('.arrow-img').css("background", "url('./files/img/icons/arrow_up.png");   
      $('.arrow').css("background", "rgba(0, 0, 0, 0.7)");  
      if($(window).width() > 767){
        setTimeout(function(){
          $('.arrow').css("bottom", "70px");  
        }, 200);
      }  
      target = "#home";
    } 
    else {
      $('.arrow-img').css("background", "url('./files/img/icons/arrow_down.png");    
      $('.arrow').css("background", "none");
      if($(window).width() > 767){
        setTimeout(function(){
          $('.arrow').css("bottom", "6px");
        }, 200);
      }
      target = "#about";
    }
  });

  $('.arrow').click(function() {      // When arrow is clicked
    //If not on desktop, make offset -51px for mobile screens to line up with top of section headers
    if($(window).width() < 767){
      offset = -52.5;
    }
    else {
      offset = 0;
    }
    $(target).velocity("scroll", { duration: 1000, offset: offset });
  });
}

//Reset the elements that require resizing
function setMainElements(){

  //Reset all styles on navbar if on desktop width
  if($(window).width() > 767) {
    $(".navbar-default").removeAttr("style");
    $(".navbar-nav li a").removeAttr("style");
    $(".navbar-collapse").removeAttr("style");
    $(".ribbon").css("animation", "none");
    $(".navbar-collapse .navbar-nav").removeClass("transparent");
  }

  var delay = 1200;

  //Check if the page has only loaded once, if yes then set elements after 1000 ms
  if(!firstTime){
    //If page has already loaded and this is new execution, set delay as 400 ms
    delay = 250;
  }
  //Debounce the height change function for the portfolio items and navbar animations
  setTimeout(function(){
    animateNavbar();
    $(".ribbon").css("top", "50%");
    $(".main").css("height", $(window).innerHeight());

    if($(window).width() < 991) {
      $(".title-text").css("top", "53%");
      $(".title-text").css("transform", "translate(0%, -53%");
    }
    else {
      $(".title-text").css("top", "49%");
      $(".title-text").css("transform", "translate(0%, -49%");
    }
    if($(window).width() < 767) {
      if($(window).height() > 450) {
        $(".title-text").css("top", "54%");
      }
      //For VERY long phones in landscape 
      else if($(window).height() < 300) {
        $(".title-text").css("top", "52%");
      }
      else {
        $(".title-text").css("top", "58%");
        $(".title-text").css("transform", "translate(0%, -58%");
      }
      //If not first time this function is executed, apply styles 
      if(!firstTime){
        $(".navbar-collapse .navbar-nav").removeClass("opaque");
        $(".navbar-collapse .navbar-nav").addClass("transparent");
      }
    }
    if($(window).width() < 479){
      $(".title-text").css("top", "52%");
      $(".title-text").css("transform", "translate(0%, -52%");
    }
    else{
      if(!firstTime){
        $(".navbar-collapse .navbar-nav").addClass("opaque");
        $(".navbar-collapse .navbar-nav").removeClass("transparent");
      }
    }
    //Set firstTime as false after first execution of function
    firstTime = false;
  }, delay);
  setTimeout(function(){
    $(".navbar-default").css("z-index", "103");
  }, delay);
}

$(window).resize(function () { 
  // console.log('RESIZED'); 
  $(".bars").removeClass("active");
  setMainElements();
});

function createScrollRevealEffects(){
  var slideInConfig = {
    origin: 'right',
    duration: 700,
    distance: '400px',
    viewOffset: {
      bottom: 250
    },
    //If effect has already occured, remove styles applied by scrollReveal
    //to allow for hover transform effects to still occur
    afterReveal: function() {
      setTimeout(function(){
        $('.portfolio-image').removeAttr("style");
        //Reset the height again after removal
        hoverEffects();
      }, 1000);
    }
  }
  var fadeInConfig = {
    duration: 700,
    origin: 'right',
    distance: '400px',
    viewOffset: {
      top: 250
    },
    afterReveal: function() {
      setTimeout(function(){
        $('.skill-item').removeAttr("style");
        $('.portfolio-item').removeAttr("style");
        hoverEffects();
      }, 300);
    }
  }
  window.sr = ScrollReveal();

  sr.reveal('.portfolio-item', slideInConfig);
  sr.reveal('.skill-item', fadeInConfig);

  sr.reveal($('.portfolio-image.aml').parent(),  { delay: 400  });
  sr.reveal($('.portfolio-image.tla').parent(),  { delay: 500  });
  sr.reveal($('.portfolio-image.qutrunning').parent(),  { delay: 600 });
  sr.reveal($('.portfolio-image.quteb').parent(),  { delay: 700 });
  sr.reveal($('.portfolio-image.daryl').parent(),  { delay: 800 });
  sr.reveal($('.portfolio-image.aaron').parent(),  { delay: 900 });

  sr.reveal('.skill-item.one',  { delay: 400  });
  sr.reveal('.skill-item.two',  { delay: 450  });
  sr.reveal('.skill-item.three',  { delay: 500 });
  sr.reveal('.skill-item.four',  { delay: 650 });
  sr.reveal('.skill-item.five',  { delay: 700 });
  sr.reveal('.skill-item.six',  { delay: 750 });
  sr.reveal('.skill-item.seven',  { delay: 800 });
  sr.reveal('.skill-item.eight',  { delay: 850 });
  sr.reveal('.skill-item.nine',  { delay: 900 });
  sr.reveal('.skill-item.ten',  { delay: 950 });
  sr.reveal('.skill-item.eleven',  { delay: 1000 });
  sr.reveal('.skill-item.twelve',  { delay: 1050 });
}

function bindVelocity(){
  // bind click event to all internal page anchors
  $('a[href*="#"]').on('click', function (e) {
      // prevent default action and bubbling
      e.preventDefault();
      e.stopPropagation();
      // set target to anchor's "href" attribute
      var target = $(this).attr('href');

      if(target == "#home" || target == "#about" || target == "#portfolio" 
        || target == "#skills" || target == "#experience" || 
        target == "#contact" || target == "#about2") {

        //If arrow up or arrow down pressed, convert ID to actual ID instead of toggling menu bar active class
        if(target == "#about2"){
          target = "#about";
        }
        else {
          if($(window).width() < 767){
            $('.navbar-collapse.in').collapse('hide');
            document.getElementById('bars').classList.toggle('active');
          }
        }
      }
      // scroll to each target
      if($(window).width() < 767){
        $(target).velocity("scroll", { duration: 1000, offset: -52.5 });
      }
      else {
        $(target).velocity("scroll", 1000);
      }
  });
}
function destroyScrollMagic() {
  wipeAnimation = null;
  smScene.destroy();
  smScene = null;
  controller.destroy();
  controller = null;
  console.log('destroyed');
}

var controller = new ScrollMagic.Controller();
var scenes = [];
var activeScenes = [];

scenes.push(function(){
return new ScrollMagic.Scene({
  triggerElement: '#pinContainer',
  triggerHook: 'onLeave'
})
.setPin('#pin')
.addTo(controller);
});

function addScenes(newScenes) {
// reset active scenes
activeScenes = [];
// loop over each scene and add/re-add
newScenes.forEach(function (newScene, index) {
  if (typeof newScene === 'function') {
    // add the new scene
    var newScene = newScene();
    // push it to our active scenes array
    activeScenes.push(newScene);
  }
});
}

// debounced re-size event - less destroying and re-adding scenes
var timeoutDuration = 400;
var resizeTimeout = null;
window.addEventListener('resize', function(event) {
if (resizeTimeout) {
  clearTimeout(resizeTimeout);
}
resizeTimeout = setTimeout(function() {
  // loop over each active scene
  activeScenes.forEach(function (scene, index) {
    // make sure scene wasn't null
    if (scene) {
      // destroy active scene
      scene.destroy(true);
    }
  });
  // after we have destroyed old scenes, re-add them
  addScenes(scenes);
}, timeoutDuration);
});

Pace.restart();
Pace.on("done", function(){
  $(".image-container").hover(
    function() {
      $(".gradient").css("opacity", "0");
      $(".gradient").css("transform", "scale(1.1)");
      $(".about-image").css("transform", "scale(1.1)");
    },
     function() {
      $(".gradient").css("opacity", "0.5");
      $(".gradient").css("transform", "scale(1.05)");
      $(".about-image").css("transform", "scale(1.05)");
    },
  );
  $(".testimonial-item").hover(
    function() {
      $(this).find('.testimonial-quote-top').css("top", "-20px");
      $(this).find('.testimonial-quote-top').css("left", "-50px");
      $(this).find('.testimonial-quote-bottom').css("bottom", "-20px");
      $(this).find('.testimonial-quote-bottom').css("right", "-20px");
      $(this).css("transform", "scale(1.05)");
      $(this).css("box-shadow", "none");
    },
     function() {
      $(this).find('.testimonial-quote-top').css("top", "-10px");
      $(this).find('.testimonial-quote-top').css("left", "-40px");
      $(this).find('.testimonial-quote-bottom').css("bottom", "-10px");
      $(this).find('.testimonial-quote-bottom').css("right", "-10px");
      $(this).css("transform", "scale(1)");
      $(this).css("box-shadow", "2px 2px 22px -4px rgba(0,0,0,0.75)");
    },
  );
  $(".package-item").hover(
    function() {
      $(this).find('.package-icon').css("top", "-50px");
      $(this).find('.package-icon').css("transform", "translate(-50%) scale(1.2)");
      $(".package-item").not(this).css("transform", "scale(0.9)");
      $(".package-item").not(this).css("opacity", "0.3");
      $(this).css("transform", "scale(1.05)");
      $(this).css("border", "1px solid #9b9b9b");
    },
     function() {
      $(this).find('.package-icon').css("top", "-20px");
      $(this).find('.package-icon').css("transform", "translate(-50%) scale(1)");
      $(".package-item").not(this).css("transform", "scale(1)");
      $(".package-item").not(this).css("opacity", "1");
      $(this).css("transform", "scale(1)");
      $(this).css("border", "1px solid #1e65ae");
    },
  );
  if ( $('.pace-progress').attr('data-progress-text') == '100%' ) {
      $('.preloader-wrap').fadeOut(1000);
      $('.ribbon').css("animation", "slide 0.6s forwards");
      // $('.ribbon').css("-webkit-animation", "slide 0.6s forwards");
      var counter = 0;

      //Only activate once
      $(window).scroll(function() { 
        if($(document).scrollTop() > 20 && $(window).width() > 767 && counter < 1){
          $(".navbar-default").addClass("opaque");
          $(".navbar-collapse .navbar-nav").addClass("opaque");
          $(".arrow").addClass("opaque");
          counter = 1;
        }
      });

      $(".about-image img").css("height", $(".left-container").outerHeight() + "px");
      setTimeout( function(){
        $(".main-background").css("opacity", "1");
        $(".main-background").css("transform", "perspective(1px) scale(1.0)");
      }, 700);

      // Make sure that the header animation doesn't start until page load finishes
      setTimeout(function(){
        $(".title-text").each(function(index){
        
        //create a timeline
        var displayTl = new TimelineLite();
        displayTl
          .fromTo(this, 
                 0.4,
                 {autoAlpha: 0, x: 150},
                 {autoAlpha: 1, ease:Power1.easeOut, x: 0}
                 )
          .staggerTo(this.getElementsByClassName("fade"), 
                  2,
                 {opacity: 1},
                  0.5
                 )
          .staggerTo(this.getElementsByClassName("fade"), 
                  2,
                 {opacity: 1},
                  0.5
                 )
          //build a scene
          var contentScene = new ScrollMagic.Scene({
              triggerElement: ".panel"
          })
          .setTween(displayTl)
          .addTo(controller);        
        });
      }, 900);
  } 
  $(window).scroll(function(){
    $(".title-text").css("opacity", 1 - $(window).scrollTop() / 500);
  });
});

var dateSelect     = $('#wedding-datepicker');
var dateDepart     = $('#start-date');
var spanDepart     = $('.date-depart');
var spanDateFormat = 'ddd, MMMM D yyyy';

dateSelect.datepicker({
  autoclose: true,
  format: "mm/dd",
  maxViewMode: 0,
  startDate: "now"
}).on('change', function() {
  var start = $.format.date(dateDepart.datepicker('getDate'), spanDateFormat);
  spanDepart.text(start);
});

var weddingTime = $('#wedding-time');

if (/Mobi/.test(navigator.userAgent)) {
  // if mobile device, use native pickers
  $(".date input").attr("type", "date");
  $(".time input").attr("type", "time");
} 
else {
  // if desktop device, use DateTimePicker
  $("#timepicker").datetimepicker({
    format: "LT",
    icons: {
      up: "fa fa-chevron-up",
      down: "fa fa-chevron-down"
    }
  })
}
$(document).click(function() {
  console.log($("#wedding-time").val());
  $(".time-label").html($("#wedding-time").val());
});


$( document ).ready(function() {

  if($(window).width() < 991) {
    $(".main").css("height", $(window).innerHeight());
  }
  $(".bars").removeClass("active");
  $('.jarallax').jarallax({
    speed: 0.2
  });

  // add initial scenes
  addScenes(scenes);
  setMainElements();
  hoverEffects();
  createGoTopArrow();
  animateNavbar();
  particleJSHoverEffects();
  createScrollRevealEffects();
  bindVelocity();

  $(window).scroll(function() { 
    animateNavbar();   
    preventScrollOnMenuOpen();
  });

  //Ensure that the arrow-down and navbar elements have an opacity of 1 at all times
  //following the fade in animation
  setTimeout(function(){
    $(".navbar-collapse .navbar-nav").removeClass("transparent");
    if($(window).width() < 767){
      $(".navbar-default").addClass("opaque");
      $(".navbar-collapse .navbar-nav").removeClass("opaque");
      $(".navbar-collapse .navbar-nav").addClass("transparent");
    }
    else{
      $(".navbar-default").addClass("opaque");
      $(".navbar-collapse .navbar-nav").addClass("opaque");
      $(".navbar-collapse .navbar-nav").removeClass("transparent");
    }
    $(".navbar-brand").addClass("opaque");
    $(".arrow-down").addClass("opaque");
  }, 6000);

  var theDate = new Date(); 
  $(".year").text(theDate.getFullYear());
});