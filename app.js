$(document).ready(function(){

  $(".ab").each(function(){

    var cl = $(this).clone(true);
    var offset = $(this).offset();
    var margin_t = parseFloat($(this).css("margin-top"));
    var margin_l = parseFloat($(this).css("margin-left"));


    cl.css({
      "position": "absolute",
      "top": offset.top - margin_t,
      "left": offset.left - margin_l,
    });

    cl.appendTo("body");

    if($(this).css("text-align") === "center"){
      var halfway = ($(window).width() / 2) - (cl.width() / 2) - parseFloat($(this).css("padding-left"));
      cl.css("left", halfway);
    }

    if($(this).css("text-align") === "right"){
      var alltheway = $(window).width() - cl.width() - (parseFloat($(this).css("padding-right"))) - ((parseFloat($("body").css("margin-right"))) * 2) - 2;
      cl.css("left", alltheway);
    }

    var h = cl.height() + parseFloat($(this).css("padding-top")) + parseFloat($(this).css("padding-bottom"));
    var w = cl.width() + parseFloat($(this).css("padding-left")) + parseFloat($(this).css("padding-right"));

    //make elements
    cl.prepend("<div id='left' style='width:3px;height:0;background-color:red;position:absolute;left:-3px;top:"+h+"px;'></div>");
    cl.prepend("<div id='bottom' style='width:0;height:3px;background-color:red;position:absolute;left:"+(w+3)+"px;top:"+h+"px;'></div>");
    cl.prepend("<div id='right' style='width:3px;height:0;background-color:red;position:absolute;left:"+w+"px;top:0;'></div>");
    cl.prepend("<div id='top' style='width:0;height:3px;background-color:red;position:absolute;left:-3px;top:-3px;'></div>");

    $(this).css("color", "white");

  });

});

$(".ab").mouseenter(function(){

  var w = $(this).width() + parseFloat($(this).css("padding-left")) + parseFloat($(this).css("padding-right")) + 6;
  var h = $(this).height() + parseFloat($(this).css("padding-top")) + parseFloat($(this).css("padding-bottom"));
  var children = $(this).children()

  $(children[0]).css({
    "transition": "width .5s",
    "transition-timing-function": "ease-in-out",
    "width": w
  });

  $(children[1]).css({
    "transition": "height .5s",
    "transition-timing-function": "ease-in-out",
    "height": h
  });

  $(children[2]).css({
    "transition": "width .5s, left .5s",
    "width": w,
    "left" : "-3px"
  });

  $(children[3]).css({
    "transition": "height .5s, top .5s",
    "height": h,
    "top" : 0
  });

}).mouseleave(function(){

  var w = $(this).width() + parseFloat($(this).css("padding-left")) + parseFloat($(this).css("padding-right")) + 3;
  var h = $(this).height() + parseFloat($(this).css("padding-top")) + parseFloat($(this).css("padding-bottom"));
  var children = $(this).children();

  $(children[0]).css({
    "transition": "width .5s",
    "transition-timing-function": "ease-in-out",
    "width": 0
  });

  $(children[1]).css({
    "transition": "height .5s",
    "transition-timing-function": "ease-in-out",
    "height": 0
  });

  $(children[2]).css({
    "transition": "width .5s, left .5s",
    "width": 0,
    "left" : w
  });

  $(children[3]).css({
    "transition": "height .5s, top .5s",
    "height": 0,
    "top" : h
  });

})

$(window).resize(function(){

  $(".ab").each(function(){

    if($(this).css("position") === "absolute" && $(this).css("text-align") === "center"){
      var halfway = ($(window).width() / 2) - ($(this).width() / 2) - parseFloat($(this).css("padding-left"));
      $(this).css("left", halfway);
    }

  })

})
