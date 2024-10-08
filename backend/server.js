const express = require("express");
const cors = require("cors");
const axios = require("axios");
const { API_KEY } = require("./config");
const app = express();
const port = 5000;


app.use(cors());
app.use(express.json());
app.get("/api/data", async (req, res) => {
  try {
    const response = await axios.get(`https://gnews.io/api/v4/search?q=example&apikey=${API_KEY}`);
    res.json(response.data); 
  } catch (error) {
    console.error('Error fetching data from API:', error);
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});

app.listen(port, () => {
  console.log(`Server running on 5000`);
});
