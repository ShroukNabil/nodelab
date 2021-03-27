const express = require("express");

const app = express();

//middleware
app.use(express.json());

const users = [
  { id: 1, name: "Ahmed" },
  { id: 2, name: "Mohamed" },
  { id:3 , name: "shrouk"}
];

app.get("/", (req, res) => {
  res.send("<h1>Welcome</h1>");
});

app.get("/users", (req, res) => {
  res.send(users);
});

app.get("/users/:id", (req, res) => {
  const { id } = req.params;
  const user = users.find((user) => user.id === +id);
  res.send(user);
});

app.post("/users", (req, res) => {
  const { name } = req.body;
  const id = users[users.length - 1].id + 1;
  users.push({id,name});
  res.send(users);
});

//edit
app.put("/users/:id", (req, res)=>{
    const {id} = req.params;
    const {name} = req.body;
    const user = users.find((user) => user.id === +id);
    //users.splice(name,1,{id,name});
    //users.push({id,name});
    user.name=name;
    res.send(users);
}); 


//delete
app.delete("/users/:id", (req, res) => {
  const { id } = req.params;
  const index = users.findIndex((index)=>index.id === +id) 
    users.splice(index, 1)      
    res.send(users);
});
  //users.pop({id});
  
  




app.listen(5000, (error) => {
  console.log("listening on port 5000");
});
