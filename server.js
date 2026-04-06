const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Rudralj122ma@",
    database: "college_events"
});

db.connect(err => {
    if (err) {
        console.log("DB Error:", err);
    } else {
        console.log("MySQL Connected ✅");
    }
});

app.post("/register", (req, res) => {
    const { full_name, event_name } = req.body;

    const sql = "INSERT INTO registrations (full_name, event_name) VALUES (?, ?)";

    db.query(sql, [full_name, event_name], (err) => {
        if (err) return res.send(err);
        res.send({ message: "Registration successful ✅" });
    });
});

app.listen(3000, () => {
    console.log("Server running on port 3000 🚀");
});