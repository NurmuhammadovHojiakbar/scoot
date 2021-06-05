var button = document.querySelector(".toggle")
var navnav = document.querySelector(".wrapper-nav")

button.onclick=function(){
    button.classList.toggle("toggle-off")
    navnav.classList.toggle("wrapper-nav-shown")
}


var faqbutton = document.getElementsByClassName("question-button");
var i;

for (i = 0; i < faqbutton.length; i++) {
    faqbutton[i].addEventListener("click", function() {
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
        panel.style.display = "none";
    } else {
        panel.style.display = "block";
    }
    });
}