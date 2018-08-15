jQuery(document).ready(function($) {

    $(".scroll").click(function(event) {
        event.preventDefault();

        var defaultAnchorOffset = 0;

        var $anchor = $('#home-second-wrapper');

        var anchorOffset = $anchor.data('anchor-offset');
        if (!anchorOffset)
            anchorOffset = defaultAnchorOffset;

        $('html,body').animate({
            scrollTop: $anchor.offset().top - anchorOffset
        }, 500);
    });
});
