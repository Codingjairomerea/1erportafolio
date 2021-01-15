var slider = $(".slider_portfolio");
var next = $(".Slider_Next_Button");
var back = $(".Slider_Back_Button");

const about = document.getElementById("about");
const technologies = document.getElementById("technologies");
const portfolio = document.getElementById("portfolio");
const contact = document.getElementById("contact");
const aboutNavBar = document.getElementById("menuitem1");
const technologiesNavBar = document.getElementById("menuitem2");
const portfolioNavBar = document.getElementById("menuitem3");


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
const BurguerButton = document.querySelector('.burguer_button');
const ipad = window.matchMedia('screen and (max-width: 767px)');

BurguerButton.addEventListener('click', showHide)
menuItem1.addEventListener('click', showHide)
menuItem2.addEventListener('click', showHide)
menuItem3.addEventListener('click', showHide)

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
    
window.addEventListener("scroll", ()=> {
    const scrolled = window.scrollY
    const HeightAdjust = window.innerHeight/2.5
    const HeightAbout = about.offsetTop - HeightAdjust
    const HeightTechnologies = technologies.offsetTop - HeightAdjust
    const HeightPortfolio = portfolio.offsetTop - HeightAdjust
    const HeightContact = contact.offsetTop - HeightAdjust
    
    if (scrolled >= HeightAbout && scrolled < HeightTechnologies) {
        aboutNavBar.classList.add("hover_active")
        technologiesNavBar.classList.remove("hover_active")
        portfolioNavBar.classList.remove("hover_active")
    }
    else if (scrolled >= HeightTechnologies && scrolled < HeightPortfolio) {
        technologiesNavBar.classList.add("hover_active")
        aboutNavBar.classList.remove("hover_active")
        portfolioNavBar.classList.remove("hover_active")
    }
    else if (scrolled >= HeightPortfolio && scrolled < HeightContact) {
        portfolioNavBar.classList.add("hover_active")
        technologiesNavBar.classList.remove("hover_active")
        aboutNavBar.classList.remove("hover_active")
    }
    else {
        technologiesNavBar.classList.remove("hover_active")
        aboutNavBar.classList.remove("hover_active")
        portfolioNavBar.classList.remove("hover_active")
    }
})

