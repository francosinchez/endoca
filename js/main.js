$(document).on("click", ".buttonClose", function() {
    $(".message").hide();
});

if(localStorage.getItem("DontShowAgain")) {
      $(".message").hide();
}
$(document).on("click", ".buttonClose", function() {
    localStorage.setItem("DontShowAgain", "true");
});

$(document).ready(function () {

    var dialog = $('#dialog');
    dialog.dialog({
        width: $(window).width(),
        height: $(window).height(),
        autoOpen: false
    });

    $(".imgLink").bind('click', function (e) {
        e.preventDefault();
        $('.dialog_content').html('<img src="' + $(this).attr('src') + '" />');
        dialog.dialog('open');
    });
    $(".ui-icon-closethick").addClass("glyphicon glyphicon-remove");
});


$(window).resize(function () {
    $('.ui-dialog').css({
            'width': $(window).width(),
            'height': $(window).height(),
            'left': '0px',
            'top':'0px'
    });
}).resize();
