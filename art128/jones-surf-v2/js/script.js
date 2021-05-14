document.addEventListener('DOMContentLoaded', function () {

    var myMenuButton = document.querySelector('.menu-button');
    var myMainMenu = document.querySelector('.site-header .site-navigation');
    myMenuButton.addEventListener('click', function () {
        myMainMenu.classList.toggle('expanded');
    });

});

