$(window).scroll(function() {
    var scroll = $(window).scrollTop() + window.innerHeight;

    if (scroll >= 1050 && scroll < 3800) {
        $(".balls").addClass("scrollabout");
    } else {
        $(".balls").removeClass("scrollabout");
    }
    if (scroll >= 1050) {
        $(".about").addClass("style11b");
    } else {
        $(".about").removeClass("style11b");
    }
    if (scroll >= 1050) {
        $(".about").addClass("scrollopacity");
    } else {
        $(".about").removeClass("scrollopacity");
    }
    if (scroll >= 1800) {
        $(".about").addClass("scroll1");
    } else {
        $(".about").removeClass("scroll1");
    }
    if (scroll >= 1875) {
        $(".about").addClass("scroll2");
    } else {
        $(".about").removeClass("scroll2");
    }
    if (scroll >= 1950) {
        $(".about").addClass("scroll3");
    } else {
        $(".about").removeClass("scroll3");
    }
    if (scroll >= 2300) {
        $(".about").addClass("scroll-achiv1");
    } else {
        $(".about").removeClass("scroll-achiv1");
    }
    if (scroll >= 2370) {
        $(".about").addClass("scroll-achiv2");
    } else {
        $(".about").removeClass("scroll-achiv2");
    }
    if (scroll >= 2440) {
        $(".about").addClass("scroll-achiv3");
    } else {
        $(".about").removeClass("scroll-achiv3");
    }
    if (scroll >= 2510) {
        $(".about").addClass("scroll-achiv4");
    } else {
        $(".about").removeClass("scroll-achiv4");
    }
    if (scroll >= 2650) {
        $(".about").addClass("scroll-edu1");
    } else {
        $(".about").removeClass("scroll-edu1");
    }
    if (scroll >= 2725) {
        $(".about").addClass("scroll-edu2");
    } else {
        $(".about").removeClass("scroll-edu2");
    }
    if (scroll >= 2850) {
        $(".about").addClass("scroll-edu3");
    } else {
        $(".about").removeClass("scroll-edu3");
    }
    if (scroll >= 2925) {
        $(".about").addClass("scroll-edu4");
    } else {
        $(".about").removeClass("scroll-edu4");
    }
    if (scroll >= 3000) {
        $(".about").addClass("scroll-edu5");
    } else {
        $(".about").removeClass("scroll-edu5");
    }
    if (scroll >= 3300) {
        $(".about").addClass("scroll-skill1");
    } else {
        $(".about").removeClass("scroll-skill1");
    }
    if (scroll >= 3375) {
        $(".about").addClass("scroll-skill2");
    } else {
        $(".about").removeClass("scroll-skill2");
    }
    if (scroll >= 3450) {
        $(".about").addClass("scroll-skill3");
    } else {
        $(".about").removeClass("scroll-skill3");
    }
    if (scroll >= 3525) {
        $(".about").addClass("scroll-skill4");
    } else {
        $(".about").removeClass("scroll-skill4");
    }
    if (scroll >= 3800 ) {
        $(".documents").addClass("myhrb");
        $(".about").addClass("changebg");
        $(".contacts").addClass("bgbcsdocs");
    } else {
        $(".documents").removeClass("myhrb");
        $(".about").removeClass("changebg");
        $(".contacts").removeClass("bgbcsdocs");
    }
    if(scroll >= 3800 && scroll< 4400){
      $(".balls").addClass("scrollabout1");
    } else{
      $(".balls").removeClass("scrollabout1");
    }
    if (scroll >= 3950) {
        $(".documents").addClass("revealtable");
    } else {
        $(".documents").removeClass("revealtable");
    }
    if (scroll >= 4400) {
        $(".contacts").addClass("bgbcscont");
        $(".balls").addClass("scrollabout2");
    } else {
        $(".contacts").removeClass("bgbcscont");
        $(".balls").removeClass("scrollabout2");
    }

    if (scroll >= 0 && scroll < 1050) {
        $(".balls").addClass("scrollcover");
    } else {
        $(".balls").removeClass("scrollcover");
    }
    if($(window).scrollTop()==0){
      $(".balls").addClass("scrollcover");
      $(".balls").removeClass("scrollabout");
    } else{
        if( (scroll >= 1050 && scroll < 3800)){
          $(".balls").addClass("scrollabout");
        } else {
          $(".balls").removeClass("scrollabout");
        }
        if( scroll < 1050){
          $(".balls").addClass("scrollcover");
        } else {
          $(".balls").removeClass("scrollcover");
        }
    }
});
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 600);
        return false;
      }
    }
  });
});
