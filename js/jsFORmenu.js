
function openNav2() {
  document.getElementById("mySidenav2").style.width = "170px";
}

function closeNav2() {
  document.getElementById("mySidenav2").style.width = "0";
}



function openMenu(evt, menuName){
    var i, menu;
    menu = document.getElementsByClassName("sideAnchor");
    for (i = 0; i < menu.length; i++) {
    menu[i].className = menu[i].className.replace(" active-tab", " ");
    }
    
    menus = document.getElementsByClassName("menudiv");
  for (i = 0; i < menus.length; i++) {
    menus[i].style.display = "none";
  }


    document.getElementById(menuName).style.display = "block";
    evt.currentTarget.className += " active-tab";
}
