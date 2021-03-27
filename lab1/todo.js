const { read, write } = require("./head");
const [, , option, value ,value2] = process.argv;

switch (option) {
  case "add":

    data = read();
    data.push({ id: 3, value });
    write(data);
    
    break;

  case "delete":
    
   //data.filter(value,1);
   //const newArr = data.filter((value)=>value=1);
    data = read();
    const index = data.find((index)=>index.id === +id)
    data.splice(index,1);
    write(data);
    //let newArray = data.filter(callback(Value, 1, data) {    
    //});
   console.log(data);
         
    break;

  case "edit":
    data = read();
    //data.splice(value,2)
    const user = data.find((user) => user.id === +id);
    
    data[+value-1]={value2};
    write(data);
    console.log(data);
    break;

  case "list":
    console.log(read());
    break;

  default:
    break;
}