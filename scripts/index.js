// toggle searchBar
var toggle = document.querySelector("#toggle");
var searchBar = document.querySelector(".searchBar");
toggle.onclick = function (e) {
    searchBar.classList.remove("invisible");
};
var toggle2 = document.querySelector("#toggle2");
toggle2.onclick = function (e) {
    searchBar.classList.add("invisible");
};
