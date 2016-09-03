var images = [
    "./assets/img/svg/rp1.svg",
    "./assets/img/svg/rp2.svg",
    "./assets/img/svg/rp3.svg",
    "./assets/img/svg/rp4.svg",
    "./assets/img/svg/rp5.svg",
    "./assets/img/svg/rp6.svg",
    "./assets/img/svg/rp7.svg",
    "./assets/img/svg/rp8.svg",
    "./assets/img/svg/rp9.svg",
    "./assets/img/svg/rp10.svg",
    "./assets/img/svg/rp11.svg"
];

$(document).ready(function() {

   $(window).scroll(function() {
      var curr_height = $(window).scrollTop();
      var total_height = $(window).height();
      var frame_breakpoint = total_height/11;

      var custom_floor = function(value, roundTo) {
         return Math.floor(value / roundTo) * roundTo;
      };

      var curr_idx = Math.floor(custom_floor(curr_height, frame_breakpoint)/(frame_breakpoint*2));
       
      if (curr_idx < 12) {
          $('#frame-img').attr("src", images[curr_idx]);
      }
   });
});


//
// var obj = {curImg: 0};
//
// var tween = TweenMax.to(obj, 2,
//     {
//         curImg: images.length - 1,
//         roundProps: "curImg",
//         repeat: 0,
//         immediateRender: true,
//         ease: Linear.easeNone,
//         onUpdate: function() {
//             $('#frame-img').attr("src", images[obj.curImg]);
//         }
//     });
//
// var controller = new ScrollMagic.Controller();
//
// var scene = new ScrollMagic.Scene({
//     triggerElement: '#trigger', duration: 300
// }).addTo(controller);
