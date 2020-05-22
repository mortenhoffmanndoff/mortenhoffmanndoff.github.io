var assetsReady = {

    // Collect the functions to run on document ready
    init: function() {
        this.generelFadeIn();
    },

    generelFadeIn: function() {
        $('body').fadeIn(1000)
    }
}

// Run the show on document ready!
$(function () {
    assetsReady.init();
    AOS.init();
});
