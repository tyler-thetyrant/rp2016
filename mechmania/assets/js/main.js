
console.log("Ready");


// init controller
var controller = new ScrollMagic.Controller();
var frame_offset = ($('#frame').height())/2;
var scene = new ScrollMagic.Scene({triggerElement: "#trigger1", duration: 3000})

$(function () { // wait for document ready
    // build scene
    update_frame_offset();
    console.log(frame_offset);
    scene.setPin("#pin1").triggerHook(0.5).offset(frame_offset).on("progress", function(event) {
        swap_images(event.progress);
    }).addTo(controller);
});

$(window).scroll(function() {
    // console.log(frame_offset);
});

$(window).resize(function() {
    update_frame_offset();
});

update_frame_offset = function() {
    frame_offset = ($('#frame').height())/2;
    scene.offset(frame_offset);
};

swap_images = function(progress) {
    if(progress >= 0 && progress < 0.09) {
        $("#frame-content").attr("src","./assets/img/svg/rp1.svg");
    } else if(progress >= 0.09 && progress < 0.18) {
        $("#frame-content").attr("src","./assets/img/svg/rp2.svg");
    } else if(progress >= 0.18 && progress < 0.27) {
        $("#frame-content").attr("src","./assets/img/svg/rp3.svg");
    } else if(progress >= 0.27 && progress < 0.36) {
        $("#frame-content").attr("src","./assets/img/svg/rp4.svg");
    } else if(progress >= 0.36 && progress < 0.45) {
        $("#frame-content").attr("src","./assets/img/svg/rp5.svg");
    } else if(progress >= 0.45 && progress < 0.54) {
        $("#frame-content").attr("src","./assets/img/svg/rp6.svg");
    } else if(progress >= 0.54 && progress < 0.63) {
        $("#frame-content").attr("src","./assets/img/svg/rp7.svg");
    } else if(progress >= 0.63 && progress < 0.72) {
        $("#frame-content").attr("src","./assets/img/svg/rp8.svg");
    } else if(progress >= 0.72 && progress < 0.81) {
        $("#frame-content").attr("src","./assets/img/svg/rp9.svg");
    } else if(progress >= 0.81 && progress < 0.90) {
        $("#frame-content").attr("src","./assets/img/svg/rp10.svg");
    } else if(progress >= 0.90 && progress <= 1) {
        $("#frame-content").attr("src","./assets/img/svg/rp11.svg");
    }

};


// var duration = 500;
//
// // build scenes
// var scene = new ScrollMagic.Scene({triggerElement: "#trigger-1", duration: duration})
//     .addTo(controller)
//
//     .on("enter leave", function (e) {
//
//         $("#frame-content").attr("src","./assets/img/svg/rp1.svg");
//     });
//
//
// var scene = new ScrollMagic.Scene({triggerElement: "#trigger-2", duration: duration})
//     .addTo(controller)
//
//     .on("enter leave", function (e) {
//         $("#frame-content").attr("src","./assets/img/svg/rp2.svg");
//     });
//
// var scene = new ScrollMagic.Scene({triggerElement: "#trigger-3", duration: duration})
//     .addTo(controller)
//
//     .on("enter leave", function (e) {
//         $("#frame-content").attr("src","./assets/img/svg/rp3.svg");
//     });
//
// var scene = new ScrollMagic.Scene({triggerElement: "#trigger-4", duration: duration})
//     .addTo(controller)
//
//     .on("enter leave", function (e) {
//         $("#frame-content").attr("src","./assets/img/svg/rp4.svg");
//     });
//
// var scene = new ScrollMagic.Scene({triggerElement: "#trigger-5", duration: duration})
//     .addTo(controller)
//
//     .on("enter leave", function (e) {
//         $("#frame-content").attr("src","./assets/img/svg/rp5.svg");
//     });
//
// var scene = new ScrollMagic.Scene({triggerElement: "#trigger-6", duration: duration})
//     .addTo(controller)
//
//     .on("enter leave", function (e) {
//         $("#frame-content").attr("src","./assets/img/svg/rp6.svg");
//     });
//
// var scene = new ScrollMagic.Scene({triggerElement: "#trigger-7", duration: duration})
//     .addTo(controller)
//
//     .on("enter", function (e) {
//         $("#frame-content").attr("src","./assets/img/svg/rp7.svg");
//     });
//
// var scene = new ScrollMagic.Scene({triggerElement: "#trigger-8", duration: duration})
//     .addTo(controller)
//
//     .on("enter", function (e) {
//         $("#frame-content").attr("src","./assets/img/svg/rp8.svg");
//     });
//
// var scene = new ScrollMagic.Scene({triggerElement: "#trigger-9", duration: duration})
//     .addTo(controller)
//
//     .on("enter", function (e) {
//         $("#frame-content").attr("src","./assets/img/svg/rp9.svg");
//     });
//
//
// var scene = new ScrollMagic.Scene({triggerElement: "#trigger-10", duration: 600})
//     .addTo(controller)
//
//     .on("enter", function (e) {
//         $("#frame-content").attr("src","./assets/img/svg/rp10.svg");
//         $(".scroll-indicator").show();
//     });
//
//
// var scene = new ScrollMagic.Scene({triggerElement: "#trigger-11", duration: 600})
//     .addTo(controller)
//
//     .on("enter", function (e) {
//         $("#frame-content").attr("src","./assets/img/svg/rp11.svg");
//         $(".scroll-indicator").hide();
//     });
