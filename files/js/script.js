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
  element.css("box-shadow", "-1px 3px 26px 0px rgba(0,0,0,0.44)");

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
  $(".image-container").hover(
    function() {
      $(".gradient").css("opacity", "0");
      $(".gradient").css("transform", "scale(1.1)");
      $(".about-image").css("transform", "scale(1.1)");
    },
     function() {
      $(".gradient").css("opacity", "0.2");
      $(".gradient").css("transform", "scale(1.05)");
      $(".about-image").css("transform", "scale(1.05)");
    },
  );
  $(".testimonial-item").hover(
    function() {
      if($(window).width() > 479) {
        $(this).find('.testimonial-quote-top').css("top", "-20px");
        $(this).find('.testimonial-quote-top').css("left", "-50px");
        $(this).find('.testimonial-quote-bottom').css("bottom", "-20px");
        $(this).find('.testimonial-quote-bottom').css("right", "-20px");
      }
      $(this).find('.underline-anim').addClass("underline-before");
      $(this).find('.underline-anim').addClass("underline-after");
      $(this).css("transform", "scale(1.05)");
    },
    function() {
      if($(window).width() > 479) {
         $(this).find('.testimonial-quote-top').css("top", "-10px");
        $(this).find('.testimonial-quote-top').css("left", "-40px");
        $(this).find('.testimonial-quote-bottom').css("bottom", "-10px");
        $(this).find('.testimonial-quote-bottom').css("right", "-10px");
      }
      $(this).find('.underline-anim').removeClass("underline-before");
      $(this).find('.underline-anim').removeClass("underline-after");
      $(this).css("transform", "scale(1)");
    },
  );
  $(".package-item").hover(
    function() {
      $(this).find('.package-icon').css("opacity", "1");
      if($(window).width() < 991) {
        if($(window).width() < 767) {
          $(this).find('.package-icon').css("top", "-50px");
        }
        else {
          $(this).find('.package-icon').css("top", "140px");
          $(this).find('.package-icon').css("left", "-55px");
        }
      }
      else {
        $(this).find('.package-icon').css("left", "-70px");
      }
      $(this).find('.package-select').css("bottom", "-20px");
      $(".package-item").not(this).css("transform", "scale(0.9)");
      $(".package-item").not(this).css("opacity", "0.3");
      $(this).css("transform", "scale(1.05)");
    },
     function() {
      $(this).find('.package-icon').css("opacity", "0");
      if($(window).width() < 991) {
        if($(window).width() < 767) {
          $(this).find('.package-icon').css("top", "0px");
        }
        else {
          $(this).find('.package-icon').css("left", "0px");
        }
      }
      else {
        $(this).find('.package-icon').css("left", "0px");
      }
      $(this).find('.package-select').css("bottom", "-1px");
      $(".package-item").not(this).css("transform", "scale(1)");
      $(".package-item").not(this).css("opacity", "1");
      $(this).css("transform", "scale(1)");
    },
  );
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
  $(".navbar-default").css("padding-top", "0");
  $(".navbar-default").css("background-color", "rgba(255,255,255,1)");
  $(".navbar-default").css("box-shadow", "2px 2px 22px -4px rgba(0,0,0,0.44)");
  $(".navbar-collapse").css("background-color", "rgba(255,255,255,1)");
  $(".bars .line").css("stroke", "#3b3b3b");
  $(".logo-img").attr("src", "./files/img/logo.png");
  $(".navbar-right").css("display", "none");
}
function addWhiteNavDesktop(){
  $(".navbar-default").css("padding-top", "0");
  $(".navbar-default").css("background-color", "#fff");
  $(".navbar-default").css("box-shadow", "2px 2px 22px -4px rgba(0,0,0,0.44)");
  $(".navbar-nav li a").css("color", "black");
  $(".navbar-collapse").css("background-color", "none");
  $(".logo-img").attr("src", "./files/img/logo.png");
  $(".navbar-right").css("display", "block");
  $(".contact-icon.phone").attr("src", "./files/img/icons/phone.png");
  $(".contact-icon.email").attr("src", "./files/img/icons/email.png");
  $(".contact-icon.insta").attr("src", "./files/img/icons/instagram.png");
  $(".contact-icon.facebook").attr("src", "./files/img/icons/fb.png");
}
function addTransparentNav(){
  //Make navbar transparent if scroll position is on main section
  $(".navbar-default").css("padding-top", "20px");
  $(".navbar-default").css("background-color", "transparent");
  $(".navbar-default").css("box-shadow", "none");
  $(".navbar-nav li a").css("color", "white");
  $(".navbar-collapse").css("background-color", "none");
  $(".logo-img").attr("src", "./files/img/logo_white.png");
  $(".navbar-right").css("display", "block");
  $(".contact-icon.phone").attr("src", "./files/img/icons/phone_white.png");
  $(".contact-icon.email").attr("src", "./files/img/icons/email_white.png");
  $(".contact-icon.insta").attr("src", "./files/img/icons/instagram_white.png");
  $(".contact-icon.facebook").attr("src", "./files/img/icons/fb_white.png");
}
function animateNavbar(){
  //If on mobile
  if($(window).width() < 767){
    $(".navbar-default").addClass("opaque");
    addWhiteNav();
  }
  //If on desktop
  else {
    //Scroll position is in About section
    if($(document).scrollTop() > 1) {
      addWhiteNavDesktop();
    }
    //Scroll position is in Main section
    else {
      //Make navbar transparent if scroll position is on main section
      addTransparentNav();
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
  $('.testimonial-quote-top').removeAttr("style");
  $('.testimonial-quote-bottom').removeAttr("style");
  $('.time-label').removeAttr("style");
  $('#wedding-datepicker input').removeAttr("style");
  $('.package-icon').removeAttr("style");
  if($(window).width() < 991) {
    $(".main").css("height", $(window).innerHeight());
    $(".time-label").css("width", $("#name").outerWidth() + "px");
    $("#wedding-datepicker input").css("width", $("#name").outerWidth() + "px");
  }
  if($(window).width() < 479) {
    $(".about-image img").css("width", $(".left-container").innerWidth() - 15 + "px");
  }
  else {
    $(".about-image img").css("height", $(".left-container").outerHeight() + "px");
  }
  var scene = document.getElementById('scene');
  var scene2 = document.getElementById('scene-2');
  var scene3 = document.getElementById('scene-3');
  var scene4 = document.getElementById('scene-4');
  var parallaxInstance = new Parallax(scene);
  var parallaxInstance2 = new Parallax(scene2);
  var parallaxInstance3 = new Parallax(scene3);
  var parallaxInstance4 = new Parallax(scene4);

  // if desktop device, use DateTimePicker
  $("#timepicker").datetimepicker({
    format: "LT",
    // debug:true,
    icons: {
      up: "fa fa-chevron-up",
      down: "fa fa-chevron-down"
    }
  })
}

$(window).resize(function () { 
  // console.log('RESIZED'); 
  $(".bars").removeClass("active");
  $(".navbar-collapse").removeAttr("style");
  setMainElements();
});

function createScrollRevealEffects(){
  // var slideInConfig = {
  //   origin: 'right',
  //   duration: 700,
  //   distance: '400px',
  //   viewOffset: {
  //     bottom: 250
  //   },
  //   //If effect has already occured, remove styles applied by scrollReveal
  //   //to allow for hover transform effects to still occur
  //   afterReveal: function() {
  //     setTimeout(function(){
  //       $('.portfolio-image').removeAttr("style");
  //       //Reset the height again after removal
  //       hoverEffects();
  //     }, 1000);
  //   }
  // }
  // var fadeInConfig = {
  //   duration: 700,
  //   origin: 'right',
  //   distance: '400px',
  //   viewOffset: {
  //     top: 250
  //   },
  //   afterReveal: function() {
  //     setTimeout(function(){
  //       $('.skill-item').removeAttr("style");
  //       $('.portfolio-item').removeAttr("style");
  //       hoverEffects();
  //     }, 300);
  //   }
  // }
  // window.sr = ScrollReveal();

  // sr.reveal('.portfolio-item', slideInConfig);
  // sr.reveal('.skill-item', fadeInConfig);

  // sr.reveal($('.portfolio-image.aml').parent(),  { delay: 400  });
  // sr.reveal($('.portfolio-image.tla').parent(),  { delay: 500  });
  // sr.reveal($('.portfolio-image.qutrunning').parent(),  { delay: 600 });
  // sr.reveal($('.portfolio-image.quteb').parent(),  { delay: 700 });
  // sr.reveal($('.portfolio-image.daryl').parent(),  { delay: 800 });
  // sr.reveal($('.portfolio-image.aaron').parent(),  { delay: 900 });

  // sr.reveal('.skill-item.one',  { delay: 400  });
  // sr.reveal('.skill-item.two',  { delay: 450  });
  // sr.reveal('.skill-item.three',  { delay: 500 });
  // sr.reveal('.skill-item.four',  { delay: 650 });
  // sr.reveal('.skill-item.five',  { delay: 700 });
  // sr.reveal('.skill-item.six',  { delay: 750 });
  // sr.reveal('.skill-item.seven',  { delay: 800 });
  // sr.reveal('.skill-item.eight',  { delay: 850 });
  // sr.reveal('.skill-item.nine',  { delay: 900 });
  // sr.reveal('.skill-item.ten',  { delay: 950 });
  // sr.reveal('.skill-item.eleven',  { delay: 1000 });
  // sr.reveal('.skill-item.twelve',  { delay: 1050 });
}

function bindVelocity(){
  // bind click event to all internal page anchors
  $('a[href*="#"]').on('click', function (e) {
      // prevent default action and bubbling
      e.preventDefault();
      e.stopPropagation();
      // set target to anchor's "href" attribute
      var target = $(this).attr('href');

     
      if($(window).width() < 767){
        $('.navbar-collapse.in').collapse('hide');
      }
      if(target == "#package-one-contact") {
        $("#message").val("Hello, I'd like to book the South East Queensland package.");    
        target = "#contact";  
        setTimeout(function(){
          $( "#message" ).focus();
        }, 1200);  
      }
      if(target == "#package-two-contact") {
        $("#message").val("Hello, I'd like to book the Destination package.");    
        target = "#contact";    
        setTimeout(function(){
          $( "#message" ).focus();
        }, 1200);  
      }
      if(target == "#package-three-contact") {
        $("#message").val("Hello, I'd like to book the Sydney/Melbourne package.");    
        target = "#contact";    
        setTimeout(function(){
          $( "#message" ).focus();
        }, 1200);  
      }
      // scroll to each target
      if($(window).width() < 767){
        $(target).velocity("scroll", { duration: 1000, offset: -52.5 });
      }
      else {
        $(target).velocity("scroll", { duration: 1000, offset: -52.5 });
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
  $(function() {  
  $('.btn-animated')
    .on('mouseenter', function(e) {
      var parentOffset = $(this).offset(),
          relX = e.pageX - parentOffset.left,
          relY = e.pageY - parentOffset.top;
      $(this).find('span').css({top:relY, left:relX})
    })
    .on('mouseout', function(e) {
      var parentOffset = $(this).offset(),
          relX = e.pageX - parentOffset.left,
          relY = e.pageY - parentOffset.top;
      $(this).find('span').css({top:relY, left:relX})
    });
});
  // $(".package-header").css("width", ($(".package-item").width() + 1) + "px");
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

      setTimeout( function(){
        $(".navbar-default").css("opacity", "1");
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
var spanDateFormat = 'MMMM D yyyy';

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


$(document).click(function() {
  if($("#wedding-time").val() != "" || $("#wedding-time").val() != " "){
    $(".time-label").html($("#wedding-time").val());
  }
});

var UID = {
  _current: 0,
  getNew: function(){
    this._current++;
    return this._current;
  }
};

HTMLElement.prototype.pseudoStyle = function(element,prop,value){
  var _this = this;
  var _sheetId = "pseudoStyles";
  var _head = document.head || document.getElementsByTagName('head')[0];
  var _sheet = document.getElementById(_sheetId) || document.createElement('style');
  _sheet.id = _sheetId;
  var className = "pseudoStyle" + UID.getNew();
  
  _this.className +=  " "+className; 
  
  _sheet.innerHTML += " ."+className+":"+element+"{"+prop+":"+value+"}";
  _head.appendChild(_sheet);
  return this;
};

$(document).ready(function() {
  $('.jarallax').jarallax({
    speed: 0.2
  });

  animateNavbar();
  // add initial scenes
  addScenes(scenes);
  setMainElements();
  hoverEffects();
  createGoTopArrow();
  particleJSHoverEffects();
  createScrollRevealEffects();
  bindVelocity();

  $(window).scroll(function() { 
    animateNavbar();   
    preventScrollOnMenuOpen();
  });

  var theDate = new Date(); 
  $(".year").text(theDate.getFullYear());
});