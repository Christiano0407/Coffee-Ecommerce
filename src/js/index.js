const burger = document.getElementById(`burger`);
const nav = document.getElementById(`mobile-nav-dropdown`);
const body = document.getElementsByTagName(`body`)[0];

// event {
    
burger.addEventListener(`click`, function () {
    console.log("Burger")
    nav.classList.toggle('hide');
    body.classList.toggle('stop-scrolling');
});