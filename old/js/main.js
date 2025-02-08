const nav = document.querySelectorAll('#navbarCollapse a');

(function ($) {
    "use strict";

    // Smooth scrolling on the navbar links
    $(".navbar-nav a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();

            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 45
            }, 1500, 'easeInOutExpo');

            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a').addClass('active');
            };
            document.querySelector('.navbar-toggler').classList.add('collapsed');
            document.querySelector('#navbarCollapse').classList.remove('show');
        };
    });

    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1500, 'easeInOutExpo');
        nav.forEach(item => {
            item.classList.remove('active')
        })
        return false;
    });

    //animação para os botões dos saiba mais
    $(".scrollBtn").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();

            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 45
            }, 1500, 'easeInOutExpo');
        };
    });

    // Modal Video
    $(document).ready(function () {
        var $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });
        console.log($videoSrc);

        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        })
    });


    // Service and team carousel
    $(".service-carousel, .team-carousel").owlCarousel({
        autoplay: false,
        smartSpeed: 1500,
        margin: 30,
        dots: false,
        loop: true,
        nav: true,
        navText: [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });


    // Product carousel
    $(".product-carousel").owlCarousel({
        autoplay: false,
        smartSpeed: 1500,
        margin: 30,
        dots: false,
        loop: true,
        nav: true,
        navText: [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            768: {
                items: 3
            },
            992: {
                items: 4
            }
        }
    });


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });

    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({
            filter: $(this).data('filter')
        });
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        dots: true,
        loop: true,
        items: 1
    });
})(jQuery);

//Contact Form
document.querySelector('#sendMessageButton').addEventListener('click', () => {
    let nome, email, assunto, mensagem, text;
    nome = document.getElementById('name');
    email = document.getElementById('email');
    assunto = document.getElementById('subject');
    mensagem = document.getElementById('message');
    link = document.getElementById('sendMessageButton');

    if (nome.value == '' || email.value == '' || assunto.value == '' || mensagem.value == '') {
        link.href = '#contact',
            $('#sendMessageButton').prop('target', '_self'),
            Swal.fire({
                text: "Preencha todos os campos do formulário de contato e tente novamente!",
                icon: "error",
                buttonsStyling: !1,
                confirmButtonText: "Ok, entendido!",
                customClass: {
                    confirmButton: "btn btn-primary",
                    cancelButton: "btn btn-active-light"
                }
            }).then(() => {
                return;
            });
    } else {
        text = "";
        text += `Nome Completo: ${nome.value}%0a`;
        text += `E-mail: ${email.value}%0a`;
        text += `Assunto: ${assunto.value}%0a`;
        text += `Mensagem: ${mensagem.value}%0a`;

        link.href = 'https://wa.me/5562999435764?&text=' + text;
        $('#sendMessageButton').prop('target', '_blank')

        nome.value = '';
        email.value = '';
        assunto.value = '';
        mensagem.value = '';
    };
});

let indexCarousel = 0;

function showItem(index) {
    $('.carousel-item').each((item, i) => {
        $(item).removeClass('active');
        if (i === index) {
            $(item).addClass('active');
        }
    });
}

function nextItem() {
    indexCarousel = (indexCarousel + 1) % $('.carousel-item').length;
    showItem(indexCarousel);
}

function prevItem() {
    indexCarousel = (indexCarousel - 1 + $('.carousel-item').length) % $('.carousel-item').length;
    showItem(indexCarousel);
}

$('.carousel-control.prev').on('click', prevItem);
$('.carousel-control.next').on('click', nextItem);

// Inicializa o carousel com o primeiro item visível
showItem(indexCarousel);