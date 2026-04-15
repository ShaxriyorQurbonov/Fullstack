const express = require("express");
const fs = require("fs");
const app = express();
const PORT = 3000;
app.use(express.json());

app.get("/", (req, res) => {
    res.send("<h1>Hello World</h1>");
});

app.get("/users", (req, res) => {
    let users = getusers();
    res.json(users);
}); 

app.post ("/users", (req, res) => {
    try {
        console.log(req.body);
        res.json({message: "User created successfully"});
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Internal Server Error"});
    }
});

function getusers() {
    try {
        let users = fs.readFileSync("users.json", "utf-8");
        return JSON.parse(users);
    } catch (error) {
        console.error( error);
        
    }
}
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});