const bar = document.getElementById("bar");
const navbar = document.getElementById("navbar");
const close = document.getElementById("close");
const addAlert = document.getElementById("add-to-cart");
const shopNow = document.getElementById("shopNow");



addAlert.addEventListener("click" , () => {

    alert("Your Product is Add in the product Section ");
});



if (bar) {
    bar.addEventListener("click" , () => {
        navbar.classList.add("active");
    });
}

if (close) {
    close.addEventListener("click" , () => {
        navbar.classList.remove("active");
    });
}