let smpo = document.querySelector(".smpo")
let overlay = document.querySelector(".overlay")

function openPage(){
    smpo.classList.add("active");
    overlay.classList.add("overlayactive");
};

function closePage(){
    smpo.classList.remove("active");
    overlay.classList.remove("overlayactive");
};