$(document).ready(function() {
   console.log("ready");

   $(window).scroll(function() {
      var curr_height = $(window).scrollTop();
      var total_height = $(window).height();
      var frame_breakpoint = total_height/11;

      var custom_floor = function(value, roundTo) {
         return Math.floor(value / roundTo) * roundTo;
      };

      var curr_idx = Math.floor(custom_floor(curr_height, frame_breakpoint)/(frame_breakpoint*2)) + 1;

      console.log(curr_idx);

      if (curr_idx < 12) {
         $('.frame').html('<img src="./assets/img/svg/rp' + curr_idx + '.svg">');
      }
   });
});