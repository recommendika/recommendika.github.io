function openNav() {
  document.getElementById("mySidenav1").style.width = "100%";
  document.getElementById("main").style.display = "none";
}

function closeNav() {
  document.getElementById("mySidenav1").style.width = "0";
  document.getElementById("main").style.display = "block";
}



function openCat(evt, catName){
    var i, category,discipline,listContent, tablinks;
    category = document.getElementsByClassName("category");
    for (i = 0; i < category.length; i++){
        category[i].style.display = 'none';
    }
    discipline = document.getElementsByClassName("discipline");
    for (i = 0; i < discipline.length; i++){
        discipline[i].style.display = 'none';
    }
    listContent = document.getElementsByClassName("listContent");
  for (i = 0; i < listContent.length; i++) {
    listContent[i].style.display = "none";
  }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" activeBtn", "");
    }
    document.getElementById(catName).style.display = "block";
    evt.currentTarget.className += " activeBtn";


}
function openDis(evt, disName){
    var i, discipline, tablinks;
    discipline = document.getElementsByClassName("discipline");
    for (i = 0; i < discipline.length; i++){
        discipline[i].style.display = 'none';
    }
    listContent = document.getElementsByClassName("listContent");
  for (i = 0; i < listContent.length; i++) {
    listContent[i].style.display = "none";
  }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" activeBtn", "");
    }
    document.getElementById(disName).style.display = "block";
    evt.currentTarget.className += " activeBtn";

}
function openMainList(evt, listName) {
  var i, listContent, tablinks;
  listContent = document.getElementsByClassName("listContent");
  for (i = 0; i < listContent.length; i++) {
    listContent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" activeBtn", "");
  }
  document.getElementById(listName).style.display = "block";
  evt.currentTarget.className += " activeBtn";
}



