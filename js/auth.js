// ==========================
// REGISTER
// ==========================

const registerForm =
document.getElementById(
"registerForm"
);

if(registerForm){

registerForm.addEventListener(
"submit",
function(e){

e.preventDefault();

let users =
JSON.parse(
localStorage.getItem(
"users"
)
) || [];

const fullname =
document.getElementById(
"fullname"
).value;

const username =
document.getElementById(
"username"
).value;

const password =
document.getElementById(
"password"
).value;

// Check if username exists

const existingUser =
users.find(
user =>
user.username === username
);

if(existingUser){

alert(
"Username already exists!"
);

return;

}

const newUser = {

id: Date.now(),

fullname: fullname,

username: username,

password: password,

role: "user",

createdAt:
new Date()
.toLocaleString()

};

users.push(newUser);

localStorage.setItem(
"users",
JSON.stringify(users)
);

if(typeof addLog === "function"){

addLog(
fullname,
"Registered Account"
);

}

alert(
"Registration Successful"
);

window.location.href =
"login.html";

});

}

// ==========================
// LOGIN
// ==========================

const loginForm =
document.getElementById(
"loginForm"
);

if(loginForm){

loginForm.addEventListener(
"submit",
function(e){

e.preventDefault();

const username =
document.getElementById(
"username"
).value;

const password =
document.getElementById(
"password"
).value;

const users =
JSON.parse(
localStorage.getItem(
"users"
)
) || [];

const user =
users.find(
u =>
u.username === username &&
u.password === password
);

if(!user){

alert(
"Invalid Username or Password"
);

return;

}

localStorage.setItem(
"currentUser",
JSON.stringify(user)
);

if(typeof addLog === "function"){

addLog(
user.fullname,
"Logged In"
);

}

alert(
"Login Successful"
);

if(user.role === "admin"){

window.location.href =
"admin-dashboard.html";

}else{

window.location.href =
"user-dashboard.html";

}

});

}

// ==========================
// LOGOUT
// ==========================

function logout(){

const currentUser =
JSON.parse(
localStorage.getItem(
"currentUser"
)
);

if(currentUser){

if(typeof addLog === "function"){

addLog(
currentUser.fullname,
"Logged Out"
);

}

}

localStorage.removeItem(
"currentUser"
);

window.location.href =
"login.html";

}

// ==========================
// CHECK LOGIN
// ==========================

function checkLogin(){

const currentUser =
JSON.parse(
localStorage.getItem(
"currentUser"
)
);

if(!currentUser){

window.location.href =
"login.html";

}

}

// ==========================
// ADMIN ONLY
// ==========================

function checkAdmin(){

const currentUser =
JSON.parse(
localStorage.getItem(
"currentUser"
)
);

if(
!currentUser ||
currentUser.role !== "admin"
){

alert(
"Access Denied"
);

window.location.href =
"login.html";

}

}

// ==========================
// USER ONLY
// ==========================

function checkUser(){

const currentUser =
JSON.parse(
localStorage.getItem(
"currentUser"
)
);

if(
!currentUser ||
currentUser.role !== "user"
){

alert(
"Access Denied"
);

window.location.href =
"login.html";

}

}

// ==========================
// CREATE DEFAULT ADMIN
// ==========================

(function(){

let users =
JSON.parse(
localStorage.getItem(
"users"
)
) || [];

const adminExists =
users.some(
user =>
user.role === "admin"
);

if(!adminExists){

users.push({

id: 1,

fullname:
"System Administrator",

username:
"admin",

password:
"admin123",

role:
"admin",

createdAt:
new Date()
.toLocaleString()

});

localStorage.setItem(
"users",
JSON.stringify(users)
);

}

})();