import express from "express";

const PORT = 4000

const app = express()

const handleHome = (req, res) => res.send("gggg")

app.get("/", handleHome)

const handleListening = () => console.log(`http://localhost:${PORT})`)

app.listen(PORT, handleListening)

console.log("fff")