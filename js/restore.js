function restoreData(){

const file =
document.getElementById(
"backupFile"
).files[0];

if(!file){

alert(
"Select Backup File"
);

return;

}

const reader =
new FileReader();

reader.onload =
function(e){

const data =
JSON.parse(
e.target.result
);

Object.keys(data)
.forEach(key=>{

localStorage.setItem(
key,
JSON.stringify(
data[key]
)
);

});

alert(
"Backup Restored"
);

location.reload();

};

reader.readAsText(file);

}