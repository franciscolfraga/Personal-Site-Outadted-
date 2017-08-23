$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 700) {
        $(".balls").addClass("scrollabout");
    } else {
        $(".balls").removeClass("scrollabout");
    }
    if (scroll >= 500) {
        $(".about").addClass("style11b");
    } else {
        $(".about").removeClass("style11b");
    }
    if (scroll >= 500) {
        $(".about").addClass("scrollopacity");
    } else {
        $(".about").removeClass("scrollopacity");
    }
    if (scroll >= 1100) {
        $(".about").addClass("scroll1");
    } else {
        $(".about").removeClass("scroll1");
    }
    if (scroll >= 1175) {
        $(".about").addClass("scroll2");
    } else {
        $(".about").removeClass("scroll2");
    }
    if (scroll >= 1250) {
        $(".about").addClass("scroll3");
    } else {
        $(".about").removeClass("scroll3");
    }
    if (scroll >= 1620) {
        $(".about").addClass("scroll-achiv1");
    } else {
        $(".about").removeClass("scroll-achiv1");
    }
    if (scroll >= 1670) {
        $(".about").addClass("scroll-achiv2");
    } else {
        $(".about").removeClass("scroll-achiv2");
    }
    if (scroll >= 1720) {
        $(".about").addClass("scroll-achiv3");
    } else {
        $(".about").removeClass("scroll-achiv3");
    }
    if (scroll >= 1770) {
        $(".about").addClass("scroll-achiv4");
    } else {
        $(".about").removeClass("scroll-achiv4");
    }
    if (scroll >= 2050) {
        $(".about").addClass("scroll-edu1");
    } else {
        $(".about").removeClass("scroll-edu1");
    }
    if (scroll >= 2100) {
        $(".about").addClass("scroll-edu2");
    } else {
        $(".about").removeClass("scroll-edu2");
    }
    if (scroll >= 2150) {
        $(".about").addClass("scroll-edu3");
    } else {
        $(".about").removeClass("scroll-edu3");
    }
    if (scroll >= 2500) {
        $(".about").addClass("scroll-skill1");
    } else {
        $(".about").removeClass("scroll-skill1");
    }
    if (scroll >= 2575) {
        $(".about").addClass("scroll-skill2");
    } else {
        $(".about").removeClass("scroll-skill2");
    }
    if (scroll >= 2650) {
        $(".about").addClass("scroll-skill3");
    } else {
        $(".about").removeClass("scroll-skill3");
    }
    if (scroll >= 2725) {
        $(".about").addClass("scroll-skill4");
    } else {
        $(".about").removeClass("scroll-skill4");
    }
    if (scroll >= 0 && scroll < 700) {
        $(".balls").addClass("scrollcover");
    } else {
        $(".balls").removeClass("scrollcover");
    }
});


//from https://css-tricks.com/snippets/jquery/smooth-scrolling/
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 400);
        return false;
      }
    }
  });
});
