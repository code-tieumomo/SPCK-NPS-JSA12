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

// Lấy ra tham số từ URL. VD: lấy ra id => params.id
const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
});

// Kiểm tra đăng nhập
if (!localStorage.getItem("user")) {
    document.getElementById("write-post").remove();
    document.querySelector("#logout").remove();
} else {
    document.querySelector("#login").remove();
    document.querySelector("#signup").remove();
}