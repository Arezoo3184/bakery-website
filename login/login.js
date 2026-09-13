const authSection = document.getElementById("authSection");
const userSection = document.getElementById("userSection");

const authTitle = document.getElementById("authTitle");

const nameInput = document.getElementById("nameInput");
const emailInput = document.getElementById("emailInput");
const passwordInput = document.getElementById("passwordInput");

const authBtn = document.getElementById("authBtn");

const authMessage = document.getElementById("authMessage");

const switchBtn = document.getElementById("switchBtn");
const switchText = document.getElementById("switchText");

const userName = document.getElementById("userName");
const logoutBtn = document.getElementById("logoutBtn")


let isRegisterMode = false;


switchBtn.addEventListener("click", function () {

isRegisterMode = !isRegisterMode;

authMessage.textContent = "";

nameInput.value = "";
emailInput.value = "";
passwordInput.value = "";

if (isRegisterMode) {

authTitle.textContent = "ثبت نام";

nameInput.style.display = "block";

authBtn.textContent = "ثبت نام";

switchText.textContent = "حساب دارید؟";

switchBtn.textContent = "ورود";

} else {

authTitle.textContent = "ورود به حساب";

nameInput.style.display = "none";

authBtn.textContent = "ورود";

switchText.textContent = "حساب ندارید؟";

switchBtn.textContent = "ثبت نام";
}

});


authBtn.addEventListener("click", function () {

const name = nameInput.value.trim();
const email = emailInput.value.trim();
const password = passwordInput.value.trim();


if (isRegisterMode && name === "") {

showMessage("لطفاً نام خود را وارد کنید", "red");

return;
}

if (email === "") {

showMessage("لطفاً ایمیل را وارد کنید", "red");

return;
}

if (password === "") {

showMessage("لطفاً رمز عبور را وارد کنید", "red");

return;
}

if (isRegisterMode) {

const user = {
name: name,
email: email,
password: password
};


localStorage.setItem("user", JSON.stringify(user));

   
localStorage.setItem("isLoggedIn", "true");

showMessage("ثبت نام با موفقیت انجام شد ✅", "green");

setTimeout(function () {

showUserPage(user.name);

}, 700);

}

else {

const savedUser = localStorage.getItem("user");

   
if (!savedUser) {

showMessage(
"ابتدا باید ثبت نام کنید",
"red"
);

return;
}

const user = JSON.parse(savedUser);
  
if (
email === user.email &&
password === user.password
) {

localStorage.setItem(
"isLoggedIn",
"true"
);

showMessage(
"ورود موفق بود ✅",
"green"
);

setTimeout(function () {

showUserPage(user.name);

}, 700);

} else {

showMessage(
"ایمیل یا رمز عبور اشتباه است ❌",
"red"
);

}

}

});

 
function showMessage(message, color) {

authMessage.textContent = message;

authMessage.style.color = color;

}

   
function showUserPage(name) {

authSection.style.display = "none";

userSection.style.display = "block";

userName.textContent = name;

}

  
logoutBtn.addEventListener("click", function () {

localStorage.removeItem("isLoggedIn");

authSection.style.display = "flex";

userSection.style.display = "none";

emailInput.value = "";
passwordInput.value = "";

authMessage.textContent = "";

});

    
window.addEventListener("DOMContentLoaded", function () {

const isLoggedIn =
localStorage.getItem("isLoggedIn");

const savedUser =
localStorage.getItem("user");

if (isLoggedIn === "true" && savedUser) {

const user = JSON.parse(savedUser);

showUserPage(user.name);

}

});