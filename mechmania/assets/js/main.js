
console.log("Ready");
// init controller
var controller = new ScrollMagic.Controller({globalSceneOptions: {duration: 100}});

var duration = 1000;

// build scenes
var scene = new ScrollMagic.Scene({triggerElement: "#trigger-1", duration: duration})
    .addTo(controller)

    .on("enter leave", function (e) {
        $("#frame-content").attr("src","./assets/img/svg/rp1.svg");
    });


var scene = new ScrollMagic.Scene({triggerElement: "#trigger-2", duration: duration})
    .addTo(controller)

    .on("enter leave", function (e) {
        $("#frame-content").attr("src","./assets/img/svg/rp2.svg");
    });

var scene = new ScrollMagic.Scene({triggerElement: "#trigger-3", duration: duration})
    .addTo(controller)

    .on("enter leave", function (e) {
        $("#frame-content").attr("src","./assets/img/svg/rp3.svg");
    });

var scene = new ScrollMagic.Scene({triggerElement: "#trigger-4", duration: duration})
    .addTo(controller)

    .on("enter leave", function (e) {
        $("#frame-content").attr("src","./assets/img/svg/rp4.svg");
    });

var scene = new ScrollMagic.Scene({triggerElement: "#trigger-5", duration: duration})
    .addTo(controller)

    .on("enter leave", function (e) {
        $("#frame-content").attr("src","./assets/img/svg/rp5.svg");
    });

var scene = new ScrollMagic.Scene({triggerElement: "#trigger-6", duration: duration})
    .addTo(controller)

    .on("enter leave", function (e) {
        $("#frame-content").attr("src","./assets/img/svg/rp6.svg");
    });

var scene = new ScrollMagic.Scene({triggerElement: "#trigger-7", duration: duration})
    .addTo(controller)

    .on("enter", function (e) {
        $("#frame-content").attr("src","./assets/img/svg/rp7.svg");
    });

var scene = new ScrollMagic.Scene({triggerElement: "#trigger-8", duration: 600})
    .addTo(controller)

    .on("enter", function (e) {
        $("#frame-content").attr("src","./assets/img/svg/rp8.svg");
    });

var scene = new ScrollMagic.Scene({triggerElement: "#trigger-9", duration: 600})
    .addTo(controller)

    .on("enter", function (e) {
        $("#frame-content").attr("src","./assets/img/svg/rp9.svg");
    });


var scene = new ScrollMagic.Scene({triggerElement: "#trigger-10", duration: 600})
    .addTo(controller)

    .on("enter", function (e) {
        $("#frame-content").attr("src","./assets/img/svg/rp10.svg");
    });


var scene = new ScrollMagic.Scene({triggerElement: "#trigger-11", duration: 600})
    .addTo(controller)

    .on("enter", function (e) {
        $("#frame-content").attr("src","./assets/img/svg/rp11.svg");
    });
