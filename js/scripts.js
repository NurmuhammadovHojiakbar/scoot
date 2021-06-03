var button = document.querySelector(".toggle")
var navnav = document.querySelector(".wrapper-nav")

button.onclick=function(){
    button.classList.toggle("toggle-off")
    navnav.classList.toggle("wrapper-nav-shown")
}