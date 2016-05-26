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


$(document).ready(function(){
    var altura = $('#navBar').offset().top; //saber altura

    
    altura -=60;
    alert(altura);



    $(window).on('scroll',function(){
        if ( $(window).scrollTop() > altura) {
            $('.menu').removeClass('menuu');


            $('.menu').addClass('menu-fixed');

        }
        else {
            $('.menu').removeClass('menu-fixed');
        }

    });
});
