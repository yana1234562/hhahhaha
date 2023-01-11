const express = require("express");
const { ppid } = require("process");
const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`Сервер запущен. Порт сервера: ${port}`);
});

app.get("/", (req, res) => {
    res.send("Hello world!");
});

