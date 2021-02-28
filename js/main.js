$(document).ready(() => {
    let hairstyle = $('#hairstyle');
    let decoration = $('#decoration');
    let galleryHairstyle = $('#gallery-hairstyle');
    let galleryDecoration = $('#gallery-decoration');

    galleryHairstyle.slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: false,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1101,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    initialSlide: 0
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    initialSlide: 0
                }
            }
        ]
    });

    galleryDecoration.slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: false,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1101,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    initialSlide: 0
                }
            }
        ]
    });

    $('.work-title').click((e) => {
        galleryHairstyle.slick('refresh');
        galleryDecoration.slick('refresh');
    });


    hairstyle.click((e) => {
        galleryHairstyle.css('display', 'block');
        galleryDecoration.css('display', 'none');
        hairstyle.css('border-bottom', '7px solid #00204C');
        decoration.css('border-bottom', '2px solid #BEC9CA');
    });

    decoration.click((e) => {
        galleryDecoration.css('display', 'block');
        galleryHairstyle.css('display', 'none');
        hairstyle.css('border-bottom', '2px solid #BEC9CA');
        decoration.css('border-bottom', '7px solid #00204C');
    });

    $('#reviews-gallery').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        initialSlide: 0
    });

    $('.open-modal').click((e) => {
        $('#form').css('display', 'flex');
    });
    $('#form').click((e) => {
        if (e.target.id === 'form') {
            $('#form').hide();
        }
    });
    $('.close').click((e) => {
        $('#form').hide();
    });
    $('#form-answer').click((e) => {
        if (e.target.id === 'form') {
            $('#form').hide();
        }
    });

    $('#reserved-button').on('click', function () {
        let name = $('#name');
        let phone = $('#form-phone');
        let info = $('#info');
        let hasError = false;
        name.attr("placeholder", 'Ваше имя*');
        phone.attr("placeholder", 'Ваш телефон*');
        $('.input').css('borderColor', 'rgb(255, 255, 255)');

        if (!name.val()) {
            name.css('borderColor', 'red');
            name.attr("placeholder", 'Введите ваше имя*');
            hasError = true;
        }

        if (!phone.val()) {
            phone.css('borderColor', 'red');
            phone.attr("placeholder", 'Введите ваш телефон*');
            hasError = true;
        }

        if (!hasError) {
            $('#form-answer').css('display', 'block');
            $('#form-container').css('display', 'none');
            /*
            $.ajax({
                method: "POST",
                url: '',
                data: {name: name.val(), phone: phone.val(), info: info.val()}
            })
                .done(function (message) {
                    console.log(message);
                    if (message.success) {
                        $('form').replaceWith( "<div id='newDiv'>Спасибо за вашу заявку. Мы скоро свяжемся с Вами!</div>" );
                    } else {
                        $('form').replaceWith( "<div id='newDiv'>Возникла ошибка, позвоните нам и запишитесь по телефону.</div>" );
                    }
                }); */
        }
    })

    $('#burger').click((e) => {
        $('#header').toggleClass('menu-open');
    });

    $('#header #menu .menu-item, #header-close').click((e) => {
        $('#header').removeClass('menu-open');
    });
});
