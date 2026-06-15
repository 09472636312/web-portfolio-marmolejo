let notifications =
JSON.parse(
localStorage.getItem(
"notifications"
)
) || [];

const form =
document.getElementById(
"announcementForm"
);

form.addEventListener(
"submit",
function(e){

e.preventDefault();

const notification = {

id: Date.now(),

title:
document.getElementById(
"title"
).value,

message:
document.getElementById(
"message"
).value

};

notifications.push(
notification
);

localStorage.setItem(
"notifications",
JSON.stringify(
notifications
)
);

alert(
"Announcement Posted"
);

location.reload();

});

const announcementList =
document.getElementById(
"announcementList"
);

notifications.forEach(
notification=>{

announcementList.innerHTML += `

<div class="card">

<h3>${notification.title}</h3>

<p>${notification.message}</p>

</div>

`;

});