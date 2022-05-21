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
        //Gallery filter
        const galleryFilter = $("ul.proyects-gallery--filter li");
        if (galleryFilter) {
            galleryFilter.on("click", function(e) {
                e.preventDefault();
                const identy = $(this).attr("data-attr-filter");
                galleryFilter.removeClass("active");
                $(this).addClass("active");
                $(".proyects-gallery--category").removeClass("active");
                $(".proyects-gallery--category#" + identy).addClass("active")
            });
        }
    });
})(jQuery);