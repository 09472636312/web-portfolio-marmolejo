const logs =
JSON.parse(
localStorage.getItem(
"activityLogs"
)
) || [];

const logsTable =
document.getElementById(
"logsTable"
);

logs.forEach(log=>{

logsTable.innerHTML += `

<tr>

<td>${log.date}</td>

<td>${log.user}</td>

<td>${log.action}</td>

</tr>

`;

});