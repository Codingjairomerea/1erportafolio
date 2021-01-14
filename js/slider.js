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

const menu = document.querySelector('.menu');
const menuItem1 = document.querySelector('.menuitem1');
const menuItem2 = document.querySelector('.menuitem2');
const menuItem3 = document.querySelector('.menuitem3');
console.log(menu);
const BurguerButton = document.querySelector('.burguer_button');
console.log(BurguerButton);
console.log(window.matchMedia('screen and (max-width: 767px)'));
const ipad = window.matchMedia('screen and (max-width: 767px)');

BurguerButton.addEventListener('click', showHide)
menuItem1.addEventListener('click', showHide)
menuItem2.addEventListener('click', showHide)
menuItem3.addEventListener('click', showHide)

ipad.addListener(media_menu)
media_menu(ipad);

function media_menu(event) {    
    if (event.matches) {
BurguerButton.addEventListener('click', showHide)
    }
    else {            
BurguerButton.removeEventListener('click', showHide)
    }
};

function showHide() {
    if (menu.classList.contains('is_active')) {
menu.classList.remove('is_active') 
    }        
    else 
menu.classList.add('is_active')
    };