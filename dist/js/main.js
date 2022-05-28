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
                touchDrag: false,
                pullDrag: false,
                startPosition: 1,
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
        //image click to detail
        $(".detail-image").on("click", function(e) {
            const imageurl = $(this).attr("src");
            $("#myModal").addClass("active");
            $("body").addClass("no-scroll");
            $("#detailed-image").attr("src", imageurl);
            console.info("sñlkdñl")
        });
        //Click para cerrar modal de la galería
        $("#myModal .close").on("click", function() {
            $("#myModal").removeClass("active");
            $("body").removeClass("no-scroll");
        });
        //Click en el menú principal
        $(".item-main-menu").on("click", function() {
            $(".item-main-menu").removeClass("active");
            $(this).addClass("active");
        });
    });
})(jQuery);