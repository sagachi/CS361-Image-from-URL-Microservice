import express from "express";
import fetch from "node-fetch";

const app = express();
const PORT = 3002;

app.get("/image", async (req, res) => {
  try {
    const imageUrl = req.query.url;

    // If ?url is missing or invalid, return early
    if (!imageUrl || !imageUrl.startsWith("http")) {
      return res.status(400).json({ error: "Invalid or missing image URL" });
    }

    const response = await fetch(imageUrl, { redirect: "follow" });

    if (!response.ok) {
      return res.status(400).json({ error: "Failed to fetch image" });
    }

    const contentType = response.headers.get("content-type");
    if (!contentType || !contentType.startsWith("image/")) {
      return res.status(400).json({ error: "URL did not return an image" });
    }

    res.setHeader("Content-Type", contentType);
    response.body.pipe(res);
    
  } catch (err) {
    console.error("Error:", err.message);
    return res.status(500).json({ error: "Internal server error" });
  }
});


app.listen(PORT, () => {
  console.log(`Image microservice running on port ${PORT}`);
});
