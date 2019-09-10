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

function hoverEffects() {
  $(".image-container").hover(
    function() {
      $(".gradient").css("opacity", "0");
      $(".gradient").css("transform", "scale(1.1)");
      $(".about-image").css("transform", "scale(1.1)");
      $(".about-image").css("box-shadow", "none");
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
      $(this).find('.package-icon').css("top", "-60px");
      $(this).find('.package-select').css("bottom", "-20px");
      $(".package-item").not(this).css("transform", "scale(0.9)");
      $(".package-item").not(this).css("opacity", "0.3");
      $(this).css("transform", "scale(1.05)");
      $(".packages p").css("opacity", "0.3");
    },
     function() {
      $(this).find('.package-icon').css("opacity", "0");
      $(this).find('.package-icon').css("top", "0px");
      $(this).find('.package-select').css("bottom", "-1px");
      $(".package-item").not(this).css("transform", "scale(1)");
      $(".package-item").not(this).css("opacity", "1");
      $(this).css("transform", "scale(1)");
      $(".packages p").css("opacity", "1");
    },
  );
  $(".social-item").hover(
    function() {
      $(this).find('.details').css("opacity", "1");
      $(this).find('.details').css("bottom", "-3px");
      $(this).find('.img').css("transform", "scale(0.95)");
      $(this).css("box-shadow", "2px 2px 22px -4px rgba(255,255,255,0.44)");
      $(this).css("background", "#fff");
      $(this).css("transform", "scale(1.05)");
    },
    function() {
      $(this).find('.details').css("opacity", "0");
      $(this).find('.details').css("bottom", "-50px");
      $(this).find('.img').css("transform", "scale(1)");
      $(this).css("box-shadow", "none");
      $(this).css("background", "none");
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
  $(".navbar-default").css("height", "50px");
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
  $(".navbar-default").css("padding-top", "30px");
  $(".navbar-default").css("height", "90px");
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
  //Remove every change first
  $('.testimonial-quote-top').removeAttr("style");
  $('.testimonial-quote-bottom').removeAttr("style");
  $('.time-label').removeAttr("style");
  $('#wedding-datepicker input').removeAttr("style");
  $(".main").removeAttr("style");
  $(".navbar-default").removeAttr("style");
  $(".navbar-collapse").removeAttr("style");
  $(".item").removeAttr("style");
  $(".jarallax-img img").removeAttr("style");
  $('.jarallax').jarallax('destroy');

  if($(window).width() < 991) {
    $(".main").css("height", $(window).innerHeight());
    // $(".time-label").css("width", $("#name").outerWidth() + "px");
    //Wait until the instafeed is initialised before setting items
    setTimeout(function(){
    //   $(".item").css("width", ($("#instafeed").width() * 0.33) + "px");
    //   $(".item").css("height", ($("#instafeed").width() * 0.33) + "px");
    //   $(".owl-item .item img").css("width", ($("#instafeed").width() * 0.33) + "px");
      $("#wedding-datepicker input").css("width", $(".time-label").outerWidth() + "px");
    }, 400);
  }
  if($(window).width() < 479) {
    $(".about-image img").css("width", $(".left-container").innerWidth() - 15 + "px");
   
  }
  else {
    $(".about-image img").css("height", $(".left-container").outerHeight() + "px");
  }
  if($(window).width() > 767) {
    var scene = document.getElementById('scene');
    var scene2 = document.getElementById('scene-2');
    var scene3 = document.getElementById('scene-3');
    var scene4 = document.getElementById('scene-4');
    var parallaxInstance = new Parallax(scene);
    var parallaxInstance2 = new Parallax(scene2);
    var parallaxInstance3 = new Parallax(scene3);
    var parallaxInstance4 = new Parallax(scene4);
  }

  // if desktop device, use DateTimePicker
  $("#timepicker").datetimepicker({
    format: "LT",
    // debug:true,
    icons: {
      up: "fa fa-chevron-up",
      down: "fa fa-chevron-down"
    }
  })
  if($(window).width() < 991) {
    $('.jarallax').jarallax({
      speed: 1.2
    });
  }
  else {
    $('.jarallax').jarallax({
      speed: 0.3
    });
  } 
  if($(window).width() < $(window).height() * 1.4) {
    $(".jarallax-img img").css("width", "auto");
    $(".jarallax-img img").css("height", "100vh");
    if($(window).width() > 479) {
      $(".jarallax-img img").css("margin-left", "-400px");
    }
  }
  if($(window).width() > $(window).height() * 1.3) {
    $(".jarallax-img img").css("width", "130%");
    $(".jarallax-img img").css("height", "auto");
    $(".jarallax-img img").css("margin-left", "-150px");
  }
  //Compensate for thin images
  if($(window).width() > $(window).height() * 1.6) {
    $(".jarallax-img img").css("width", "100%");
    if($(window).width() > 479) {
      $(".jarallax-img img").css("margin-left", "0px");
    }
  }
  $('#instafeed').instastream({
    instaToken: '4090409456.fd0e14d.ba857bbfa91848b9bb33d582a792059d',
    instaUser: '4090409456',
    instaResults: 10,
    instaMenu: 'yes'
  }); 
  // setTimeout(function(){
  //   $(".owl-stage").addClass("owl-stage-width");
  //   $(".owl-stage-width").css("width", (Math.ceil($(".owl-stage").width() / 100) * 100) + "px");
  // },400);
}

$(window).resize(function () { 
  setMainElements();
  animateNavbar();
});

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

Pace.on("done", function(){
  if ( $('.pace-progress').attr('data-progress-text') == '100%' ) {
      $('.preloader-background').fadeOut(1500);
      $('.preloader-wrap').fadeOut(1500);
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
      $(".pace .pace-progress").css("right", "0");
      setTimeout( function(){
        animateNavbar();
        $(".navbar-default").css("opacity", "1");
        $(".main-background").css("opacity", "1");
        $(".main-background").css("transform", "perspective(1px) scale(1.0)");
      }, 700);
      
      // Make sure that the header animation doesn't start until page load finishes
      setTimeout(function(){
        //create a timeline
        var displayTl = new TimelineLite();
        displayTl
          .fromTo($(".title-text"), 
                 0.4,
                 {autoAlpha: 0, x: 150},
                 {autoAlpha: 1, ease:Power1.easeOut, x: 0}
                 )
          .staggerTo($(".title-text").children(), 
                  1,
                 {opacity: 1},
                  0.5
                 )
          .staggerTo($(".better-text"), 
                  1,
                 {opacity: 1},
                  1
                 )
          //build a scene
          var contentScene = new ScrollMagic.Scene({
              triggerElement: ".main-section"
          })
          .setTween(displayTl)
          .addTo(controller);        
      }, 900);
  } 
  $(window).scroll(function(){
    $(".title-text").css("opacity", 1 - $(window).scrollTop() / 600);
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
var checkViewportTestimonialsHeaderFirst = {
  opacity: 1,
  afterReveal: function() {
      $(".testimonial-item.one").css("opacity", "1");
      $(".testimonial-item.one").css("transform", "scale(1)");
      setTimeout(function(){
        $(".testimonial-item.two").css("opacity", "1");
        $(".testimonial-item.two").css("transform", "scale(1)");
      },500);
      setTimeout(function(){
        $(".testimonial-item.three").css("opacity", "1");
        $(".testimonial-item.three").css("transform", "scale(1)");
      },1000);
  }
};
var checkViewportTestimonialsHeaderSecond = {
  opacity: 1,
  afterReveal: function() {
      $(".testimonial-item.three").css("opacity", "1");
      $(".testimonial-item.three").css("transform", "scale(1)");
      setTimeout(function(){
        $(".testimonial-item.two").css("opacity", "1");
        $(".testimonial-item.two").css("transform", "scale(1)");
      },500);
      setTimeout(function(){
        $(".testimonial-item.one").css("opacity", "1");
        $(".testimonial-item.one").css("transform", "scale(1)");
      },1000);
  }
};
var checkViewportPackagesHeaderFirst = {
  opacity: 1,
  afterReveal: function() {
    //Combine this into a function later
    $(".package-item.one").css("opacity", "1");
    $(".package-item.one").css("transform", "scale(1)");
    setTimeout(function(){
      $(".package-item.two").css("opacity", "1");
      $(".package-item.two").css("transform", "scale(1)");
    },300);
    setTimeout(function(){
      $(".package-item.three").css("opacity", "1");
      $(".package-item.three").css("transform", "scale(1)");
    },600);
  }
};
var checkViewportPackagesHeaderSecond = {
  opacity: 1,
  afterReveal: function() {
    $(".package-item.three").css("opacity", "1");
    $(".package-item.three").css("transform", "scale(1)");
    setTimeout(function(){
      $(".package-item.two").css("opacity", "1");
      $(".package-item.two").css("transform", "scale(1)");
    },300);
    setTimeout(function(){
      $(".package-item.one").css("opacity", "1");
      $(".package-item.one").css("transform", "scale(1)");
    },600);
  }
};
var checkViewportInstaHeader = {
  opacity: 1,
  viewOffset: {
    top: 200
  },
  afterReveal: function() {
    $(".instagram.block").css("padding-bottom", "80px");
    $(".instagram .container").css("margin-top", "40px");
    $(".instagram .container").css("padding-top", "30px");
    $(".instagram .container").css("padding-bottom", "20px");
    $("#instafeed").css("margin-bottom", "0");
    $("#instafeed").css("opacity", "1");
    setTimeout(function(){
      $(window).scrollTop($(window).scrollTop()+1);
    },1000);
  }
};
var checkViewportContactHeader = {
  opacity: 1,
  afterReveal: function() {
    $(".underline").css("width", $(".contact h3").width() - 20 + "px");
  }
};
function initialiseScrollReveal() {
  ScrollReveal().reveal(".testimonials .first", checkViewportTestimonialsHeaderFirst);
  ScrollReveal().reveal(".testimonials .second", checkViewportTestimonialsHeaderSecond);
  ScrollReveal().reveal(".packages .first", checkViewportPackagesHeaderFirst);
  if($(window).width() < 479){
    ScrollReveal().reveal(".packages .second", checkViewportPackagesHeaderSecond);
  }
  ScrollReveal().reveal(".jarallax.two", checkViewportInstaHeader);
  ScrollReveal().reveal(".contact h1", checkViewportContactHeader);
}

$(document).ready(function() {

  // add initial scenes
  addScenes(scenes);
  setMainElements();
  hoverEffects();
  createGoTopArrow();
  particleJSHoverEffects();
  bindVelocity();
  initialiseScrollReveal();
  $(window).scroll(function() { 
    animateNavbar();   
    preventScrollOnMenuOpen();
  });
  $('#instafeed').instastream({
    instaToken: '4090409456.fd0e14d.ba857bbfa91848b9bb33d582a792059d',
    instaUser: '4090409456',
    instaResults: 10,
    instaMenu: 'yes'
  }); 
  var theDate = new Date(); 
  $(".year").text(theDate.getFullYear());
});