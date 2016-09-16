$(function() {
    var source = $("#companies-template").html();
    var template = Handlebars.compile(source);
    $.getJSON('assets/js/companies.json', function (data) {
        var html = template(data);
        $('#companies-list').html(html);
        // company_card_resize();
    });

    // $( window ).resize(function() {
    //     company_card_resize();
    // });
});

// company_card_resize = function() {
//     var max_height = Math.max.apply(null, $(".company-card").map(function(){
//         return $(this).height();
//     }).get());
//     console.log(max_height);
//     $('.company-card').height(max_height)
// };