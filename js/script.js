const page = document.getElementsByClassName("page-wrap");
var activePage;
const nav = document.getElementsByClassName("topnav"); 
var activeNav;
const modal = document.getElementsByClassName("modal");
var activeModal;

var content;
var activeContent; 
var xContent;
var tab;
var activeTab;
var xTabs;

var images;
var imgIndex;  

const button = document.getElementById("scroll-up-btn");

bytSida();

function displayNav() {
    activeNav.classList.toggle("display-topnav");
}

function bytSida(sida, lang) { 
    if (lang == 'sv') {
        activePage = page[1];
        page[0].classList.remove("active");
        activeNav = nav[1];
        activeModal = modal[1];
    } else {
        activePage = page[0];
        page[1].classList.remove("active");
        activeNav = nav[0];
        activeModal = modal[0];
    }
    activePage.classList.add("active");

    images = activeModal.getElementsByClassName("modal-img")
    content = activePage.getElementsByClassName("content");
    tab = activePage.getElementsByClassName("nav-links"); 
    xContent = content.length;
    xTabs = tab.length;
    /*****/
    console.log(activePage.id);

    switch(sida) {
        case 's0':
            activeContent = content[0];
            activeTab = tab[0];
            break;
        case 's1':
            activeContent = content[1];
            activeTab = tab[1];
            break;
        case 's2':
            activeContent = content[2];
            activeTab = tab[2];
            break;
        case 's3':
            activeContent = content[3];
            activeTab = tab[3];
            break;
        case 's4':
            activeContent = content[4];
            activeTab = tab[4];
            break;
        default:
            activeContent = content[0];
            activeTab = tab[0];
    }

    /*****/
    console.log(activeTab.id);

    for (i = 0; i < xContent; i++) {
        content[i].classList.remove("active");
    }
    activeContent.classList.add("active");

    for (i = 0; i < xTabs; i++) {
        tab[i].classList.remove("active");
    }
    activeTab.classList.add("active");


    activeNav.classList.remove("display-topnav");
    scrollUp();
}

window.onscroll = function() {
    showBtn();
}
function showBtn() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
}

function scrollUp() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// Gallery
function displayModal() {
    activeModal.classList.toggle("active");
}
function openThisImg(n) { 
    showImg(imgIndex = n); 
}
function changeImg(n) { 
    showImg(imgIndex += n); 
}
function showImg(n) {
    const xImages = images.length;

    for (i = 0; i < xImages; i++) {  
        images[i].style.display = "none"; 
    }
    if (n > xImages) {
        imgIndex = 1 
    }
    if (n < 1) { 
        imgIndex = xImages 
    }
    images[imgIndex-1].style.display = "block"; 
}