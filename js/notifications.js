const notifications =
JSON.parse(
localStorage.getItem(
"notifications"
)
) || [];

const notificationList =
document.getElementById(
"notificationList"
);

if(notificationList){

if(notifications.length === 0){

notificationList.innerHTML =
"<h3>No Notifications</h3>";

}else{

notifications.forEach(notification=>{

notificationList.innerHTML += `

<div class="card">

<h3>${notification.title}</h3>

<p>${notification.message}</p>

</div>

`;

});

}

}