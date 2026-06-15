const inventory =
JSON.parse(
localStorage.getItem(
"inventory"
)
) || [];

const table =
document.getElementById(
"inventoryTable"
);

inventory.forEach(item=>{

table.innerHTML += `

<tr>

<td>${item.itemName}</td>

<td>${item.quantity}</td>

<td>${item.status}</td>

</tr>

`;

});