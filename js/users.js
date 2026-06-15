let users =
JSON.parse(
localStorage.getItem("users")
) || [];

const usersTable =
document.getElementById(
"usersTable"
);

displayUsers();

function displayUsers(){

usersTable.innerHTML = "";

users.forEach((user,index)=>{

usersTable.innerHTML += `

<tr>

<td>${user.id}</td>

<td>${user.fullname}</td>

<td>${user.username}</td>

<td>${user.role}</td>

<td>

<button
onclick="deleteUser(${index})">
Delete
</button>

<button
onclick="changeRole(${index})">
Change Role
</button>

</td>

</tr>

`;

});

}

document
.getElementById("addUserForm")
.addEventListener(
"submit",
function(e){

e.preventDefault();

const newUser = {

id: Date.now(),

fullname:
document.getElementById(
"fullname"
).value,

username:
document.getElementById(
"username"
).value,

password:
document.getElementById(
"password"
).value,

role:
document.getElementById(
"role"
).value

};

users.push(newUser);

localStorage.setItem(
"users",
JSON.stringify(users)
);

alert("User Added");

location.reload();

});

function deleteUser(index){

if(confirm(
"Delete this user?"
)){

users.splice(index,1);

localStorage.setItem(
"users",
JSON.stringify(users)
);

displayUsers();

}

}

function changeRole(index){

users[index].role =
users[index].role === "user"
? "admin"
: "user";

localStorage.setItem(
"users",
JSON.stringify(users)
);

displayUsers();

}

document
.getElementById("searchUser")
.addEventListener(
"keyup",
function(){

const keyword =
this.value.toLowerCase();

const rows =
document.querySelectorAll(
"#usersTable tr"
);

rows.forEach(row=>{

row.style.display =
row.innerText
.toLowerCase()
.includes(keyword)
? ""
: "none";

});

});