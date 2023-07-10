function bNav_brands() {
    document.getElementById("brands_div").style.visibility = "visible";
    document.getElementById("brands_div").style.opacity = "1";
    document.getElementById("brands_div").style.marginTop = "-98px";
    document.getElementById("brands_div").style.transition = "250ms ease";
    document.getElementById("products_div").style.visibility = "hidden";
    document.getElementById("products_div").style.opacity = "0";
    document.getElementById("products_div").style.marginTop = "-110px";
    document.getElementById("products_div").style.transition = "150ms ease"
}
function bNav_products() {
    document.getElementById("products_div").style.visibility = "visible";
    document.getElementById("products_div").style.opacity = "1";
    document.getElementById("products_div").style.marginTop = "-98px";
    document.getElementById("products_div").style.transition = "250ms ease";
    document.getElementById("brands_div").style.visibility = "hidden";
    document.getElementById("brands_div").style.opacity = "0";
    document.getElementById("brands_div").style.marginTop = "-110px";
    document.getElementById("brands_div").style.transition = "150ms ease"
}
function footerOut() {
    document.getElementById("products_div").style.visibility = "hidden";
    document.getElementById("products_div").style.opacity = "0";
    document.getElementById("products_div").style.marginTop = "-110px";
    document.getElementById("products_div").style.transition = "150ms ease";
    document.getElementById("brands_div").style.visibility = "hidden";
    document.getElementById("brands_div").style.opacity = "0";
    document.getElementById("brands_div").style.marginTop = "-110px";
    document.getElementById("brands_div").style.transition = "150ms ease"
}
function Message() {
    alert("Thank You For Contacting Us")
}
