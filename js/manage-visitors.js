let visitors =
JSON.parse(
localStorage.getItem(
"visitors"
)
) || [];

const visitorTable =
document.getElementById(
"visitorTable"
);

displayVisitors();

function displayVisitors(){

visitorTable.innerHTML = "";

visitors.forEach((visitor,index)=>{

visitorTable.innerHTML += `

<tr>

<td>${visitor.tenantName}</td>

<td>${visitor.visitorName}</td>

<td>${visitor.relationship}</td>

<td>${visitor.visitDate}</td>

<td>${visitor.status}</td>

<td>

<button
onclick="checkOut(${index})">
Check Out
</button>

</td>

</tr>

`;

});

}

function checkOut(index){

visitors[index].status =
"Checked Out";

localStorage.setItem(
"visitors",
JSON.stringify(visitors)
);

displayVisitors();

}