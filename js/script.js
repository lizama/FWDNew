/*window.onload = function() {
  var menuTog = document.getElementById('menuToggle');
  var navBar = document.getElementById('navBar');
  var menu = document.getElementById('menu');

  if (menuTog !== null) {
    menuTog.addEventListener('click', togNav);
  }

  if (navBar !== null) {
    window.addEventListener('scroll', fixNav);
  }
};

function fixNav() {
  var head = document.getElementById('head');
  var pushBack = document.getElementById('pushBack');
  var headBot;

  if (head !== null) {
    headBot = head.getBoundingClientRect().bottom;
  }

  if (pushBack !== null) {
    if (headBot > 0) {
      navBar.style.position = 'static';
      pushBack.style.height = '0em';

    } else {
      navBar.style.position = 'fixed';


      pushBack.style.height = '4em';
      $('#menu').css('background-color', 'yellow');

    }
  }
}

function togNav() {
  var navMenu = document.getElementById('menu');

  if (navMenu !== null) {

    if (navMenu.className === "showing") {
      navMenu.className = "";
    } else {
      navMenu.className = "showing";
    }
  }
}
*/

/*----------NavBars scripts --------------*/
$(document).ready(function(){
    var altura = $('#navBar').offset().top; //saber altura

    var singup = $('.sing-up');///right bar
    var navBar = $('.navbar-default');/// resto de navbar izquierda


    altura -=60;
    alert(altura);

    singup.addClass('sing-upt');
    navBar.addClass('navbar-defaultt');

    $(window).on('scroll',function(){
        if ( $(window).scrollTop() > altura) {
            $('.menu').removeClass('menuu');

            //Transparencia de barra
            singup.removeClass('sing-upt');
            navBar.removeClass('navbar-defaultt');

            $('.menu').addClass('menu-fixed');

        }
        else {
            $('.menu').removeClass('menu-fixed');

            //Transparencia
            singup.addClass('sing-upt');
            navBar.addClass('navbar-defaultt');



        }


    });

/*
///----------------Width pagina ------------------
var windowWidth = $(window).width();
alert(windowWidth);
    $(window).resize(function() {
        alert(windowWidth);
       if(screen.width == window.innerWidth){

           alert(windowWidth);
           alert("you are on normal page with 100% zoom");
       } else if(screen.width > window.innerWidth){
           alert("you have zoomed in the page i.e more than 100%");
       } else {
           alert("you have zoomed out i.e less than 100%");
       }
    });

});*/
