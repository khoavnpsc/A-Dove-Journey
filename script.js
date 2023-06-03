// First, query all necessary html div.
let container = document.querySelector('.container');
let nav_left = document.getElementById("left-button")
let nav_right = document.getElementById("right-button")
let size = 1020;
let page_width = document.getElementsByClassName('row')[0].offsetWidth;
let cliff1 = document.querySelector('.cliff1');
let cliff2 = document.querySelector('.cliff2');
let doves = document.querySelector('.doves');

// Implement functionalities for navigation buttons
nav_left.onclick = function () {
    container.scrollTop = Math.floor((container.scrollTop - 100) / size) * size;
}

nav_right.onclick = function () {
    container.scrollTop = Math.ceil((container.scrollTop + 100) / size) * size;
}

// Functions to move asserts, creating the parallax effect. 
function moveSun(x) {
    document.querySelector('.sun').style.left = (560 / (page_width - size)) * x + x + 'px';
}

function moveClouds(x) {
    clouds = document.querySelector('.clouds');
    if (x >= 1020 && x <= 2040) {
        clouds.style.left = -510 + x + 'px';
        clouds.style.top = Math.floor(-(x - 1020) / 2) + 'px';
    } else if (x < 1020) {
        clouds.style.left = Math.floor(x / 2) + 'px';
        clouds.style.top = 0;
    } else {
        clouds.style.left = Math.floor((x + 1020) / 2) + 'px';
        clouds.style.top = -510 + 'px';
    }
}

function moveCliff(x) {
    if (x >= 1020 && x <= 2040) {
        cliff1.style.left = x + 'px';
        cliff2.style.left = x + 'px';
        doves.style.left = x + 'px';
        cliff1.style.top = -x + 1020 + 'px';
        cliff2.style.top = -x + 2040 + 'px';
        doves.style.top = -x + 2040 + 'px';
    } else if (x < 1020) {
        cliff1.style.left = '1020px';
        cliff2.style.left = '1020px';
        doves.style.left = '1020px';
        cliff1.style.top = '0';
        cliff2.style.top = '1020px';
        doves.style.top = '1020px';
    } else {
        cliff1.style.left = '2040px';
        cliff2.style.left = '2040px';
        doves.style.left = '2040px';
        cliff1.style.top = '-1020px';
        cliff2.style.top = '0';
        doves.style.top = '0';
    }
}

function moveSea(x) {
    if (x < 1020) {
        document.querySelector('.sea').style.left = '1020px';
        document.querySelector('.sea').style.top = '1020px';
    } else if (x >= 1020 && x < 2040) {
        document.querySelector('.sea').style.left = x + 'px';
        document.querySelector('.sea').style.top = -x + 2040 + 'px';
    } else {
        document.querySelector('.sea').style.left = '2040px';
        document.querySelector('.sea').style.top = '0';
    }
}

function moveTank(x) {
    document.querySelector('.tank').style.left = 0.5 * x + 3060 + 'px';
    document.querySelector('.chat-bubble').style.left = 0.5 * x + 3550 + 'px';
}

function moveMountain(x) {
    document.querySelector('.mountain').style.left = 0.25 * x + 4590 + 'px';
}

// Implement what will happen when the user scrolls the page
container.onscroll = function() {
    let x = container.scrollTop;
    nav_left.style.left = x + 40 + 'px';
    nav_right.style.left = x + 840 + 'px';
    moveSun(x);
    moveSea(x);
    moveCliff(x);
    moveTank(x);
    moveMountain(x);
    moveClouds(x);
}