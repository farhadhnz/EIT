function openContent(evt, contentName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(contentName).style.display = "block";
    // evt.currentTarget.className += " active";
  }


  // function closeNav(){
  //   var navBar = document.getElementById("sidebar");

  //   navBar.style.display = 'none';
  // }