const express = require("express");
const cors = require("cors");
const axios = require("axios");
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());
const apiKey = process.env.API_KEY;
app.get("/api/data", async (req, res) => {
  try {
    const response = await axios.get(`https://gnews.io/api/v4/search?q=example&apikey=${apiKey}`);
    res.json(response.data); 
  } catch (error) {
    console.error('Error fetching data from API:', error);
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
