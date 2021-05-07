let label= [
"Role: Parent",
"Role: Player",
"Role: Coach",
"Role: Academy",
]
let arr=[
{id: "role:player", invoice_name: "Role: Player", description: "", prices: Array(2), requires: Array(0)},
 {id: "role:parent", invoice_name: "Role: Parent", description: "", prices: Array(2), requires: Array(0)},
 {id: "role:coach", invoice_name: "Role: Coach", description: "", prices: Array(2), requires: Array(0)},
 {id: "role:academy", invoice_name: "Role: Academy", description: "", prices: Array(2), requires: Array(0)}
]
 
const arr2= arr.filter(item => item === arr[0])
// console.log(arr2);
const arr3 = arr.filter(item => item === arr[2])
const arr4 = arr2.concat(arr3)
console.log(arr4);
let label1 = label.shift()
let label2 = label.pop()
label[0] = "Player/Parent";
label[1] = "Coach/Agency";
console.log(label);

