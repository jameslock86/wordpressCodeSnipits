const options= [
{id: "role:parent", invoice_name: "Role: Parent", description: "", prices: Array(2), requires: Array(0)},
{id: "role:player", invoice_name: "Role: Player", description: "", prices: Array(2), requires: Array(0)},
{id: "role:coach", invoice_name: "Role: Coach", description: "", prices: Array(2), requires: Array(0)},
{id: "role:academy", invoice_name: "Role: Academy", description: "", prices: Array(2), requires: Array(0)}]

options.map((role, index) => {
    let label = role.invoice_name.replace("Role: ", "");
    let _id = role.id;
    let _price = role.prices;
    let _name = role.invoice_name;
    return 
      
        {label} 
          value={label}
         
   
    
  })
