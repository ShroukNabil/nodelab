const fs = require("fs")

const read = () => {
  const data = fs.readFileSync("list.json", {encoding:"utf-8"})
  return JSON.parse(data)
}

const write = (data) => {
  fs.writeFileSync("list.json", JSON.stringify(data))
}


module.exports = {
  read,
  write,
  
}