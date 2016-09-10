
console.log("Ready");


// init controller
var controller = new ScrollMagic.Controller();
var frame_offset = ($('#frame').height())/2;
var scene = new ScrollMagic.Scene({triggerElement: "#trigger1", duration: 5000})
var current_slide = 1;

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

    if(progress >= 0 && progress < 0.09) { // 1
        if(current_slide == 1) return;
        current_slide = 1;
        $("#frame-content").attr("src","./assets/img/svg/rp1.svg");
        $("#frame-content-title").html("<p class='single-pulse'>This is you and your team</p>");
        $("#frame-content-subtitle").html("<p class='single-pulse'>You’ll be working in a team of up to four people</p>");
    } else if(progress >= 0.09 && progress < 0.18) { // 2
        if(current_slide == 2) return;
        current_slide = 2;
        $("#frame-content").attr("src","./assets/img/svg/rp2.svg");

    } else if(progress >= 0.18 && progress < 0.27) { // 3
        if(current_slide == 3) return;
        current_slide = 3;
        $("#frame-content").attr("src","./assets/img/svg/rp3.svg");
        $("#frame-content-title").html("<p class='single-pulse'>And this is your sprite</p>");
        $("#frame-content-subtitle").html("<p class='single-pulse'>You’ll have a team of three bots that you’re going to control. These bot teams are going to battle other bot teams.</p>");
    } else if(progress >= 0.27 && progress < 0.36) { // 4
        if(current_slide == 4) return;
        current_slide = 4;
        $("#frame-content").attr("src","./assets/img/svg/rp4.svg");
    } else if(progress >= 0.36 && progress < 0.45) { // 5
        if(current_slide == 5) return;
        current_slide = 5;
        $("#frame-content").attr("src","./assets/img/svg/rp5.svg");
    } else if(progress >= 0.45 && progress < 0.54) { // 6
        if(current_slide == 6) return;
        current_slide = 6;
        $("#frame-content").attr("src","./assets/img/svg/rp6.svg");
        $("#frame-content-title").html("<p class='single-pulse'>You’re going to train her</p>");
        $("#frame-content-subtitle").html("<p class='single-pulse'>You’re going to have 24 hours to write an AI to control these bots.</p>");
    } else if(progress >= 0.54 && progress < 0.63) { // 7
        if(current_slide == 7) return;
        current_slide = 7;
        $("#frame-content").attr("src","./assets/img/svg/rp7.svg");
    } else if(progress >= 0.63 && progress < 0.72) { // 8
        if(current_slide == 8) return;
        current_slide = 8;
        $("#frame-content").attr("src","./assets/img/svg/rp8.svg");
    } else if(progress >= 0.72 && progress < 0.81) { // 9
        if(current_slide == 9) return;
        current_slide = 9;
        $("#frame-content").attr("src","./assets/img/svg/rp9.svg");
    } else if(progress >= 0.81 && progress < 0.90) { // 10
        if(current_slide == 10) return;
        current_slide = 10;
        $("#frame-content").attr("src","./assets/img/svg/rp10.svg");
        $("#frame-content-title").html("<p class='single-pulse'>Battle against other teams</p>");
        $("#frame-content-subtitle").html("<p class='single-pulse'>At the end of the 24 hours, we’ll judge your AIs. This will be done by a tournament style showdown of the various teams of bots. Best AI wins.</p>");
        $(".frame-scroll-indicator").show();
    } else if(progress >= 0.90 && progress <= 1) { // 11
        if(current_slide == 11) return;
        current_slide = 11;
        $(".frame-scroll-indicator").hide();
        $("#frame-content").attr("src","./assets/img/svg/rp11.svg");
    }

};