/* Set the width of the sidebar to 250px (show it) */
// function openNav() {
//     var collapsible = document.getElementById("sidebar");
//     var showCollapsible = new bootstrap.Collapse(myCollapse, {
//       toggle: false
//     })
//   }
  
//   /* Set the width of the sidebar to 0 (hide it) */
//   function closeNav() {
//     document.getElementById("sidebar").style.width = "0";
//   }

// document.addEventListener("DOMContentLoaded", function(){
//   var btn = document.getElementById("sidebarCollapse");
//   var element = document.getElementById("sidebar");

//   // Create a collapse instance, toggles the collapse element on invocation
//   var sidebar = new bootstrap.Collapse(element);

//   btn.addEventListener("click", function(){
//       sidebar.toggle();
//   });
// });

function opencloseNav() {
  var x = document.getElementById("sidebar");
  if (x.style.display === "none") {
  x.style.display = "block";
  } else {
  x.style.display = "none";
  }
}

// fdafaf
// function openNav() {
//   document.getElementById("mySidebar").style.width = "250px";
// }