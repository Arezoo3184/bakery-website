const searchBarContainerEl = document.querySelector(".search-bar-container");

const magnifierEl = document.querySelector(".magnifier");

 magnifierEl.addEventListener("click", () => {
   searchBarContainerEl.classList.toggle("active");
 });

const searchInput = document.querySelector(".search-input");
const searchBtn = document.querySelector(".magnifier");


function searchProducts() {
const keyword = searchInput.value.trim().toLowerCase();

// اگر چیزی وارد نشده بود
if (!keyword) {
// همه محصولات رو نشون بده
document.querySelectorAll(".product").forEach(p => p.style.display = "block");
return;
}

const products = document.querySelectorAll(".product");
let found = [];

products.forEach(product => {
const name = product.querySelector("h3")?.innerText || "";
const isMatch = name.toLowerCase().includes(keyword);

// نمایش یا مخفی کردن
product.style.display = isMatch ? "block" : "none";

if (isMatch) found.push(name);
});

// نمایش نتیجه به کاربر
if (found.length === 0) {
alert("❌ هیچ محصولی با این کلمه پیدا نشد!");
}
}

// رویداد کلیک روی دکمه جستجو
searchBtn.addEventListener("click", searchProducts);

// رویداد فشردن Enter
searchInput.addEventListener("keypress", function(e) {
if (e.key === "Enter") {
searchProducts();
}
});

// رویداد تایپ (فیلتر زنده)
searchInput.addEventListener("input", function() {
const keyword = this.value.trim().toLowerCase();

if (!keyword) {
document.querySelectorAll(".product").forEach(p => p.style.display = "block");
return;
}

document.querySelectorAll(".product").forEach(product => {
const name = product.querySelector("h3")?.innerText || "";
product.style.display = name.toLowerCase().includes(keyword) ? "block" : "none";
});
});






////////////////////////////////////////////////////////////////////////////
const products = document.querySelectorAll(".product");

const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

let currentPage = 0;

const productsPerPage = 4;

function showProducts() {

products.forEach((product, index) => {

const start = currentPage * productsPerPage;
const end = start + productsPerPage;

if (index >= start && index < end) {
product.style.display = "block";
} else {
product.style.display = "none";
}

});
}

nextBtn.addEventListener("click", () => {

if ((currentPage + 1) * productsPerPage < products.length) {
currentPage++;
showProducts();
}

});

prevBtn.addEventListener("click", () => {

if (currentPage > 0) {
currentPage--;
showProducts();
}

});

showProducts();

const heartButtons = document.querySelectorAll(".heart-btn");

heartButtons.forEach((button) => {

button.addEventListener("click", () => {

if (button.textContent === "♡") {
button.textContent = "♥";
} else {
button.textContent = "♡";
}

});

});


const emailinput= document.getElementById("emailinput")
const discountbtn=document.getElementById("discountbtn")
const discountmessage=document.getElementById("discountmessage")

discountbtn.addEventListener("click", ()=>{
    const email=emailinput.value.trim()
    if(email !==""){
        discountmessage.textContent="تخفیف اعمال شد"
        discountmessage.style.color="black"
        discountmessage.style.display="block"
    }else{
        discountmessage.textContent="لطفا ایمیل خود را وارد کنید"
        discountmessage.style.color="black"
        discountmessage.style.display="block"
    }
    if( !email.includes("@") || !email.in(".")){
        discountmessage.textContent="ایمیل وارد شده صحیح نیست"
         discountmessage.style.display="block"
return
    }
})

const cartBtns=document.querySelectorAll(".cart-btn")

cartBtns.forEach(btn => {
    btn.addEventListener("click",()=>{
    window.location.href="cart/cart.html"
 } )
});