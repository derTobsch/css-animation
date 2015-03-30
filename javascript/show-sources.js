$(function () {
    $('.code').click(function (event) {
        event.stopPropagation();

        var parentLoaderElement = $(this).siblings().first();
        var name = parentLoaderElement.attr('class');

        $('#output-html').html(parentLoaderElement[0].outerHTML);
        $('#output-css').load('stylesheets/animations/' + name + '.css');
        $('#output-header').html(name);
        $('#output').show();
    });

    $(document).click(function (event) {
        if (!$(event.target).closest('#output').length) {
            $('#output').hide();
        }
    });
});