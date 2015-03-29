$(function () {
    $('.code').click(function (event) {
        event.stopPropagation();
        var parentLoaderElement = $(this).siblings().first();
        var name = parentLoaderElement.attr('class');
        $('#output-html').html(parentLoaderElement[0].outerHTML);
        $('#output-css').load('stylesheets/animations/' + name + '.css');
        $('#output-header').html(name);
        $('#output').show()
    });

    $(':not(.code)').click(function () {
        $('#output').hide()
    });
});