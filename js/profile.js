const currentUser =
JSON.parse(
localStorage.getItem(
"currentUser"
)
);

let users =
JSON.parse(
localStorage.getItem(
"users"
)
) || [];

document.getElementById(
"fullname"
).value =
currentUser.fullname;

document.getElementById(
"username"
).value =
currentUser.username;

document
.getElementById(
"profileForm"
)
.addEventListener(
"submit",
function(e){

e.preventDefault();

const userIndex =
users.findIndex(
u => u.id === currentUser.id
);

users[userIndex].fullname =
document.getElementById(
"fullname"
).value;

users[userIndex].username =
document.getElementById(
"username"
).value;

const newPassword =
document.getElementById(
"password"
).value;

if(newPassword !== ""){

users[userIndex].password =
newPassword;

}

localStorage.setItem(
"users",
JSON.stringify(users)
);

localStorage.setItem(
"currentUser",
JSON.stringify(
users[userIndex]
)
);

alert(
"Profile Updated"
);

});