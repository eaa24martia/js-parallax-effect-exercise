"use strict";

let text = document.getElementById("text");
let leaf = document.getElementById("leaf");
let hill1 = document.getElementById("hill1");
let hill4 = document.getElementById("hill4");
let hill5 = document.getElementById("hill5");
let tree = document.getElementById("tree");
let tree4 = document.getElementById("tree4");

window.addEventListener("scroll", () => {
    let value = window.scrollY;

    text.style.marginTop = `${value * 2.5}px`;
    tree4.style.left = `${value * -3.0}px`;
    tree.style.left = `${value * 3.5}px`;
    hill1.style.top = `${value * 1}px`;
    hill4.style.left = `${value * -1.5}px`;
    hill5.style.left = `${value * 1.5}px`;
});

let theSong = document.getElementById("song");
let logo = document.getElementById("logo");
logo.onclick = function () {
    if(theSong.paused) {
        theSong.play();
        logo.src = "/img/pause.png";
    } else {
        theSong.pause();
        logo.src = "/img/play.png";
    }
}


let mybutton = document.getElementById("myBtn");


window.onscroll = function () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
};


function topFunction() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


mybutton.addEventListener("click", topFunction);


window.addEventListener("scroll", function () {
    let header = document.querySelector("header");

    if (window.scrollY > 300) {
        header.style.color = "#359381"; 
        header.classList.add("scrolled");
    } else {
        header.style.color = "#359381"; 
        header.classList.remove("scrolled");

    }
});

window.addEventListener("scroll", function () {
    let header = document.querySelector("header");
    let logo = document.querySelector(".logo");
    let navLinks = document.querySelectorAll(".navigation a");

    if (window.scrollY > 400) {
        header.classList.add("scrolled");
        logo.style.color = "white"; 
        navLinks.forEach(link => {
            link.style.color = "white"; 
        });
    } else {
        header.classList.remove("scrolled");
        logo.style.color = "white"; 
        navLinks.forEach(link => {
            link.style.color = "white"; 
        });
    }
});