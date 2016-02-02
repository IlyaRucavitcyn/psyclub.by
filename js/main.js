$(function () {
    var windowWidth,
        windowHeight,
        winRatio,
        imgRatio = 4 / 3,
        $photoHolder = $('#photo-holder'),
        $imageFrame = $('.image-frame'),
        $visualContainer = $('.visual-container'),
        $img = $('.image-frame img'),
        $leftSection = $(".left-section"),
        $rightSection = $('.right-section'),
        $infoDefault = $('.info-default');

    function setDimentions() {
        windowWidth = $(window).width();
        windowHeight = $(window).height();


        $photoHolder.height(windowHeight);
        $imageFrame.width(windowWidth).height(windowHeight);

        if (!$visualContainer.hasClass('slided')) {
            $imageFrame.css("left", -windowWidth * 0.25);
        }

        winRatio = windowWidth / windowHeight;

        if (winRatio > imgRatio) {
            $img.css({
                width: windowWidth,
                height: 'auto',
                marginLeft: '',
                marginTop: (windowHeight - windowWidth / imgRatio) / 2
            })
        } else {
            console.log($img.height(), $imageFrame.height());
            $img.css({
                width: 'auto',
                height: windowHeight,
                marginLeft: (windowWidth - windowHeight * imgRatio) / 2,
                marginTop: ''
            });
        }
    }

    function setElementLeft(element, marginLeft) {
        element.css("left", marginLeft);
    }

    function slideImage(a, aWidth, b, bWidth) {
        a.css("width", aWidth);
        b.css("width", bWidth);
    }

    setDimentions();
    $(window).on("resize", setDimentions);

    $visualContainer.on("click", '.left-section, .left-section .sideline', function () {
        var activeFlag = $leftSection.hasClass("active"),
            imageFrameLeft = activeFlag ? -windowWidth * 0.25 : '0px',
            infoLeft = activeFlag ? '50%' : '20px',
            infoTransition = activeFlag ? 'translateX(-50%)' : 'translateX(0%)',
            aWidth = activeFlag ? '50%' : "100%",
            bWidth = activeFlag ? '50%' : '0';

        $leftSection.toggleClass("active");

        $rightSection.removeClass("active");

        slideImage($leftSection, aWidth, $rightSection, bWidth);

        setElementLeft($imageFrame, imageFrameLeft);

        $('.info-default').css({
            left: infoLeft,
            transform: infoTransition,
        });

        $visualContainer.toggleClass('slided');
    })


    $visualContainer.on("click", '.right-section, .right-section .sideline', function () {
        var activeFlag = $rightSection.hasClass("active"),
            imageFrameLeft = -$(window).width() * 0.25,
            infoLeft = activeFlag ? '50%' : windowWidth - 20 + 'px',
            infoTransition = activeFlag ? 'translateX(-50%)' : 'translateX(-100%)',
            aWidth = activeFlag ? '50%' : "100%",
            bWidth = activeFlag ? '50%' : '0';


        if (activeFlag) {
            setElementLeft($imageFrame, imageFrameLeft);
        } else {
            setElementLeft($('.image-frame.left'), imageFrameLeft * 2);
            setElementLeft($('.image-frame.right'), "0px");
        }
        $rightSection.toggleClass("active");

        $leftSection.removeClass("active");

        slideImage($rightSection, aWidth, $leftSection, bWidth);

        $('.info-default').css({
            left: infoLeft,
            transform: infoTransition,
        });

        $visualContainer.toggleClass('slided');
    })

    $leftSection.on('mouseenter', '.sideline', function () {
        slideImage($leftSection, "80%", $rightSection, "20%");
    })
    $leftSection.on('mouseleave', '.sideline', function (e) {
        if (e.pageX >= $leftSection.width()) {
            slideImage($leftSection, "80%", $rightSection, "20%");
            return;
        }
        slideImage($leftSection, "100%", $rightSection, "0%");
    })

    $rightSection.on('mouseenter', '.sideline', function () {
        slideImage($rightSection, "80%", $leftSection, "20%");
    })
    $rightSection.on('mouseleave', '.sideline', function (e) {
        if (e.pageX <= ($(window).width() - $rightSection.width())) {
            slideImage($rightSection, "80%", $leftSection, "20%");
            return;
        }
        slideImage($rightSection, "100%", $leftSection, "0%");
    })

    $(".header").sticky({
               topSpacing: 0
           });

    $(window).on('load', function () {
      $('.loading').removeClass('loading')
    });

    $('.scroll-button').on('click', function () {
      $('body').animate({scrollTop:windowHeight},1000)
    })
});
