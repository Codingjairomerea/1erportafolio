var slider = $(".slider_portfolio");
var next = $(".Slider_Next_Button");
var back = $(".Slider_Back_Button");

$(".slider_portfolio section:last").insertBefore(
    ".slider_portfolio section:first");
    
//Show the first image by subtracting 100 % of the Vw    
slider.css('margin-left', '-'+100+'%')

function moveRigth () {
    slider.animate({marginLeft:'-'+200+'%'}, 
    700, function() {
    $(".slider_portfolio section:first").insertAfter(".slider_portfolio section:last");
    slider.css('margin-left', '-'+100+'%')
    });
    }

function moveLeft () {
    slider.animate({marginLeft:0}, 
    700, function() {
    $(".slider_portfolio section:last").insertBefore(".slider_portfolio section:first");
    slider.css('margin-left', '-'+100+'%')
    });
    }
    
    
next.on('click', function () {
    moveRigth ()
});

back.on('click', function () {
    moveLeft ()
});