const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const cors = require("cors");

// Carica variabili ambiente
dotenv.config();

// Connessione a MongoDB
connectDB();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Route di test
app.get("/", (req, res) => {
  res.send("API funzionante");
});

// Porta
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server attivo su porta ${PORT}`));
