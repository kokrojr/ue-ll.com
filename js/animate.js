// ANIMATE JS

const slideShowTimer = 5000;

const animateContainers = document.querySelectorAll('.animate-container');

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
            console.log("element not observed.");
        }
    });
}, { threshold: 0.3 });

animateContainers.forEach(container => {
    observer.observe(container);
    console.log("container is being observed.");
});

// SCROLL JS

const navigationHeight =  document.querySelector('.navigation').offsetHeight;
document.documentElement.style.setProperty("--scroll-padding", navigationHeight - 22 + "px");

// SIDE MENU JS
const btnOpenSideMenu = document.querySelector('#side-menu-btn');
const btnCloseSideMenu = document.querySelector('#close-btn');
const sideMenu = document.querySelector('#side-menu'); // side menu container
const sideMenuContents = document.querySelector('#side-menu-contents'); // side menu contents
const body = document.querySelector("body");
const fadeInUpElements = sideMenu.querySelectorAll('.fadeInUp');
const fadeInRightElements = sideMenu.querySelectorAll('.fadeInRight');

btnOpenSideMenu.addEventListener("click", function () {
    sideMenu.classList.remove('hide-side-menu')
    body.style.overflow = "hidden"; // prevent scrolling
    setTimeout(()=> {
        sideMenuContents.classList.add('show-sm-contents');
    }, 100);
});

btnCloseSideMenu.addEventListener("click", function () {
    const row1SideMenu = sideMenu.querySelector('.row-1');
    const row2SideMenu = sideMenu.querySelector('.row-2');
    // Animate Out
    fadeInUpElements.forEach(element => {
        element.classList.remove('fadeInUp');
        element.classList.add('fadeOutDown');
    });

    setTimeout(() => {
        row1SideMenu.style.opacity = 0;
        row2SideMenu.style.opacity = 0;
    },500);

    setTimeout(() => {
        // After Anaimation
        sideMenuContents.classList.remove('show-sm-contents');
        fadeInUpElements.forEach((element) => {
            element.classList.remove("fadeOutDown");
            element.classList.add("fadeInUp");
        });
    },800)
    
    setTimeout(()=> {
        row1SideMenu.style.opacity = 1;
        row2SideMenu.style.opacity = 1;
        // Close Side Menu
        sideMenu.classList.add('hide-side-menu')
        body.style.overflow = "auto"; // allow scrolling
    }, 1000);
});

sideMenu.addEventListener("click", function () {
    const row1SideMenu = sideMenu.querySelector('.row-1');
    const row2SideMenu = sideMenu.querySelector('.row-2');
    // Animate Out
    fadeInUpElements.forEach(element => {
        element.classList.remove('fadeInUp');
        element.classList.add('fadeOutDown');
    });

    setTimeout(() => {
        row1SideMenu.style.opacity = 0;
        row2SideMenu.style.opacity = 0;
    },500);

    setTimeout(() => {
        // After Anaimation
        sideMenuContents.classList.remove('show-sm-contents');
        fadeInUpElements.forEach((element) => {
            element.classList.remove("fadeOutDown");
            element.classList.add("fadeInUp");
        });
    },800)
    
    setTimeout(()=> {
        row1SideMenu.style.opacity = 1;
        row2SideMenu.style.opacity = 1;
        // Close Side Menu
        sideMenu.classList.add('hide-side-menu')
        body.style.overflow = "auto"; // allow scrolling
    }, 1000);
});