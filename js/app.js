var x = window.matchMedia("(max-width: 900px)")

function openNav() {
    if (x.matches) { // If media query matches
        document.getElementById("mySidenav").style.width = "100%";
        document.getElementById("mySidenav").style.transition = "0s";
        // document.getElementById("main").style.marginLeft = "100%";
    } else {
        document.getElementById("mySidenav").style.width = "350px";
        document.getElementById("mySidenav").style.transition = "0.5s";
        // document.getElementById("main").style.marginLeft = "350px";
    }
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    // document.getElementById("main").style.marginLeft = "0";
}