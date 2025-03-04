/* Searchbar in menu Ziele*/
function menuSearchZiele() {
  // Declare variables
  var input, filter, ul, li, a, i;
  input = document.getElementById("searchZiele");
  filter = input.value.toUpperCase();
  ul = document.getElementById("menuZiele");
  li = ul.getElementsByTagName("li");

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

/* Searchbar in menu Abschlüsse */
function menuSearchAbschlüsse() {
  // Declare variables
  var input, filter, ul, li, a, i;
  input = document.getElementById("searchAbschlüsse");
  filter = input.value.toUpperCase();
  ul = document.getElementById("menuAbschlüsse");
  li = ul.getElementsByTagName("li");

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
