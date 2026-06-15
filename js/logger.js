function addLog(user,action){

let logs =
JSON.parse(
localStorage.getItem(
"activityLogs"
)
) || [];

logs.push({

id: Date.now(),

user:user,

action:action,

date:
new Date()
.toLocaleString()

});

localStorage.setItem(
"activityLogs",
JSON.stringify(logs)
);

}