
function unhide() {
   var delay = setTimeout(function(){
      $(".menu-handle").removeClass("hide-handler");
   }, 1500);
}

$(function() {

    $('.flip').click(function(){
        $(this).find('.card').toggleClass('flipped');
        return false;
    });

    var curAct = 0;
    var prevAct = 0;

    $(".menu-handle").on('click', function() {
      //$(".menu-handle").toggleClass("handle-left");
      $(".half-menu").toggleClass("handle-half-menu");
      $("#nav-icon1").toggleClass('open');
    });

    $("#bringdown1").on('click', function(){
      $(".first-panel").toggleClass("normal-margin");
    });

    $("#bringdown2").on('click', function(){
      $(".second-panel").toggleClass("normal-margin");
    });


    $("#me-01").on('click', function(){
      preAct = curAct;
      curAct = 1;
      activeNav(1);
    });

    $("#me-02").on('click', function(){
      preAct = curAct;
      curAct = 2;
      activeNav(2);
    });

    $("#me-03").on('click', function(){
      preAct = curAct;
      curAct = 3;
      activeNav(3);
    });

    $("#me-04").on('click', function(){
      preAct = curAct;
      curAct = 4;
      activeNav(4);
    });

    $("#me-05").on('click', function(){
      preAct = curAct;
      curAct = 5;
      activeNav(5);
    });

    $(".gondo").on('click', function(){
      $(".logo-holder").toggleClass("logo-holder-normal-margin");
    });

    $("#wo1").on('click', function(){
      $(".work-with-passion").addClass("passion-height");
      $(".hexagon1").toggleClass("hexnor");
      $(".workimg1").toggleClass("img-cls");
    });

    $("#wo2").on('click', function(){
      $(".work-with-passion").addClass("passion-height");
      $(".hexagon2").toggleClass("hexnor");
      $(".workimg2").toggleClass("img-cls");
    });

    $("#wo3").on('click', function(){
      $(".work-with-passion").addClass("passion-height");
      $(".hexagon3").toggleClass("hexnor");
      $(".workimg3").toggleClass("img-cls");
    });

    function activeNav(num) {
      for(var i=0; i<=5; i++) {
        $(".image-div").removeClass("me-0" + i);
      $(".hidden-title-h1-" + i).removeClass("opac");
      $(".hidden-title-h2-" + i).removeClass("opac");
      $(".circle-bg-halfwhite-" + i).removeClass("bgchange");

      if(i>0) {
        $("#me-0" + i + " span").addClass("opac-0");
        $("#me-0" + i + " span").removeClass("opac-1");
        
        $(".glass-0" + i).addClass("glass-opac-0");
        $(".glass-0" + i).removeClass("glass-opac");

        $(".mustaches-0" + i).addClass("mustaches-opac-0");
        $(".mustaches-0" + i).removeClass("mustaches-opac");

        $(".i" + i).removeClass("rotate-left");
        $(".i" + i).addClass("rotate-right");
      }
      }
      
      $("#me-0" + num + " span").addClass("opac-1");

      $(".glass-0" + num).removeClass("glass-opac-0");
      $(".glass-0" + num).addClass("glass-opac");

      $(".mustaches-0" + num).removeClass("mustaches-opac-0");
      $(".mustaches-0" + num).addClass("mustaches-opac");

      $(".circle-bg-halfwhite-" + num).addClass("bgchange");
      $(".image-div").addClass("me-0" + num);
      $(".image-div").addClass("rotateInUpRight");

      
      
    $(".hidden-title-h1-" + num).addClass("opac");
    $(".hidden-title-h2-" + num).addClass("opac");

    //alert(preAct + " " + curAct);

    $(".i" + preAct).removeClass("rotate-left");
    $(".i" + preAct).addClass("rotate-right");
    $(".i" + curAct).addClass("rotate-left");
    }


  });

unhide();

$(document).ready(function(){
  $('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
    
  });
});