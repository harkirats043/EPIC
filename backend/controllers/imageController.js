
require("dotenv").config();
const https = require('https');
const apiKey = 'kbB2NJ9E3cmLyeyTzNvhO7hRynvpbnVzWwDDD3Ds';

const getAllImages = async (req, res) => {
  const apiUrl = `https://api.nasa.gov/EPIC/api/natural/images?api_key=${apiKey}`;
  
  const fetchData = (url, apiKey) => {
    return new Promise((resolve, reject) => {
      const req = https.get(`${url}?api_key=${apiKey}`, (res) => {
        let data = Buffer.from([]);

        res.on('data', (chunk) => {
          data = Buffer.concat([data, chunk]);
        });

        res.on('end', () => {
          resolve(data);
        });
      });

      req.on('error', (error) => {
        reject(error);
      });

      req.end();
    });
  };

  try {
    const data = await fetchData(apiUrl, apiKey);
    // Send the image data as response
    res.writeHead(200, {
      'Content-Type': 'image/png',
      'Content-Length': data.length
    });
    res.end(data, 'binary');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

module.exports = {
  getAllImages,
  // Add other exported functions
};
