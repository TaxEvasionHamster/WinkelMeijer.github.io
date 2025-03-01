const companyName = "JulianInc"; 
document.querySelectorAll('.companyName').forEach(element => {
  element.textContent = companyName;
});

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementsByClassName("main-header").style.top = "0";
  } else {
    document.getElementsByClassName("main-header").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}