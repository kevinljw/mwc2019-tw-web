var x = window.matchMedia("(max-width: 900px)")

function openNav() {
    if (x.matches) { // If media query matches
        document.getElementById("mySidenav").style.width = "100%";
        document.getElementById("mySidenav").style.transition = "0s";
        document.getElementById("main").style.marginLeft = "100%";
    } else {
        document.getElementById("mySidenav").style.width = "350px";
        document.getElementById("mySidenav").style.transition = "0.5s";
        document.getElementById("main").style.marginLeft = "350px";
    }
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

// function addListItem() {
//     var innerHTML = document.getElementById("class").innerHTML;
//     document.getElementById("class").innerHTML = innerHTML + `<ul class="class">
//     <div class="line"></div>
//     <a href="./8class.html">Smart Agriculture</a>
//     <a href="./8class.html">Smart Education</a>
//     <a href="./8class.html">Smart Energy</a>
//     <a href="./8class.html">Smart Governance</a>
//     <a href="./8class.html">Smart Healthcare</a>
//     <a href="./8class.html">Smart Retail</a>
//     <a href="./8class.html">Smart Tourism</a>
//     <a href="./8class.html">Smart Transportation</a>
// </ul>`;