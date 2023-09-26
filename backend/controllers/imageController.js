require("dotenv").config();
// const https = require('https');
const apiKey = process.env.API_KEY;

const getAllImages = async (req, res) => {
    const imageArr = [];
  const apiUrl = `https://api.nasa.gov/EPIC/api/natural/images?api_key=${apiKey}`;

  fetch(apiUrl)
  .then(res => res.json())
  .then(data => {
    // console.log(data)
data.forEach(res=>{
    const date = res.date.slice(0,10).split("-")
    const image = res.image
   imageArr.push([`https://epic.gsfc.nasa.gov/archive/natural/${date[0]}/${date[1]}/${date[2]}/png/${image}.png`,res])
})
    res.json(imageArr)
  })
};

module.exports = {
  getAllImages,
  // Add other exported functions
};