let inventory =
JSON.parse(
localStorage.getItem(
"inventory"
)
) || [];

const form =
document.getElementById(
"inventoryForm"
);

form.addEventListener(
"submit",
function(e){

e.preventDefault();

inventory.push({

id: Date.now(),

itemName:
document.getElementById(
"itemName"
).value,

quantity:
document.getElementById(
"quantity"
).value,

status:
document.getElementById(
"status"
).value

});

localStorage.setItem(
"inventory",
JSON.stringify(inventory)
);

location.reload();

});

const table =
document.getElementById(
"inventoryTable"
);

inventory.forEach((item,index)=>{

table.innerHTML += `

<tr>

<td>${item.itemName}</td>

<td>${item.quantity}</td>

<td>${item.status}</td>

<td>

<button
onclick="deleteItem(${index})">
Delete
</button>

</td>

</tr>

`;

});

function deleteItem(index){

inventory.splice(index,1);

localStorage.setItem(
"inventory",
JSON.stringify(inventory)
);

location.reload();

}