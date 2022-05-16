(function($) {
    $(document).ready(function() {
        //jquery base
        const bestProjects = $(".owl-carousel");
        if (bestProjects) {
            bestProjects.owlCarousel({
                loop: true,
                margin: 50,
                autoWidth: true,
                nav: true,
                navContainer: $(".best-proyects__carousel-nav"),
                center: true,
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 2
                    },
                    1000: {
                        items: 4
                    },
                    1400: {
                        items: 4
                    }
                }
            })
        }
    });
})(jQuery);