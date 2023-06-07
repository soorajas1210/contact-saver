const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const mysql = require("mysql2");
const cors = require("cors");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "srj@mysql",
  database: "crud_contact",
});

app.use(cors());
app.use(express.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.get('/api/get', (req,res)=>{
const sqlGet = "SELECT * FROM contact_db"
db.query(sqlGet,(error,result)=>{
    res.send(result)
})

})

app.get("/", (req, res) => {
//   const sqlInsert =
//     "INSERT INTO contact_db (name,email,contact) VALUES('Sooraj','srj@gmail.com', '9875674321')";
//   db.query(sqlInsert, (err, result) => {
//     console.log("err", err);
//     console.log("result", result);
//     res.send("podey");
//   });
});

app.listen(5000, () => {
  console.log("server is running at port 5000");
});
