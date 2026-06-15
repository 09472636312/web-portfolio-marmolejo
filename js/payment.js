const paymentForm =
document.getElementById(
"paymentForm"
);

if(paymentForm){

paymentForm.addEventListener(
"submit",
function(e){

e.preventDefault();

const currentUser =
JSON.parse(
localStorage.getItem(
"currentUser"
)
);

let payments =
JSON.parse(
localStorage.getItem(
"payments"
)
) || [];

payments.push({

id: Date.now(),

userId:
currentUser.id,

fullname:
currentUser.fullname,

amount:
document.getElementById(
"amount"
).value,

method:
document.getElementById(
"method"
).value,

date:
new Date()
.toLocaleDateString(),

status:"Paid"

});

localStorage.setItem(
"payments",
JSON.stringify(payments)
);

alert(
"Payment Successful"
);

paymentForm.reset();

});

}