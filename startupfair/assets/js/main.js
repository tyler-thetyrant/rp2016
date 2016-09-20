$(function() {
    var source = $("#companies-template").html();
    var template = Handlebars.compile(source);
    $.getJSON('assets/js/companies.json', function (data) {
        var html = template(data);
        $('#companies-list').html(html);
        // company_card_resize();

    });
});
