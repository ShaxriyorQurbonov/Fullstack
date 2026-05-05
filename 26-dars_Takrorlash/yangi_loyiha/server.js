const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 8000;

const users = [
  { id: 1,
    name: "Ali"
  },
  { id: 2, 
    name: "Vali" 
  },
  { id: 3, 
    name: "Soli" 
  },
];

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server ishlayapti");
});

app.get("/api/users", (req, res) => {
  res.json(users);
});

app.get("/api/user/:id", (req, res) => {
  try {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);

    if (!user) {
      return res.status(404).json({ message: "User topilmadi" });
    }

    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Xatolik yuz berdi" });
  }
});

app.post("/api/users", (req, res) => {
  try {
    let { name, age} = req.body;
    let newId = Date.now();
    let newUser = {id: newId, name, age, };

    if (!name) {
      return res.status(400).json({ message: "Name kiritilishi kerak" });
    }

    users.push(newUser);

    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: "Xatolik yuz berdi" });
  }
});

app.listen(PORT, () => {
  console.log(`Server http://localhost:${PORT} da ishlayapti`);
});
