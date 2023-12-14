const menuIcon = document.getElementsByClassName("menu_icon")[0];
const mobileMenuDiv = document.getElementsByClassName("mobile_menu")[0];

const searchBtn = document.getElementsByClassName("search_icon")[0];
const searchBox = document.getElementsByClassName("search_container")[0];

const loginBtn = document.getElementsByClassName("login_icon")[0];
const loginBox = document.getElementsByClassName("login_container")[0];

menuIcon.addEventListener("click", () => {
    mobileMenuDiv.classList.toggle("actives");
    loginBox.classList.remove("actives");
    searchBox.classList.remove("actives");
});

searchBtn.onclick = () => {
    searchBox.classList.toggle("actives");
    loginBox.classList.remove("actives");
    mobileMenuDiv.classList.remove("actives");
};

loginBtn.onclick = () => {
    loginBox.classList.toggle("actives");
    searchBox.classList.remove("actives");
    mobileMenuDiv.classList.remove("actives");
};

window.onscroll = () => {
    mobileMenuDiv.classList.remove("actives");
}

