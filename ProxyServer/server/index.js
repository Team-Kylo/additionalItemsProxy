const express = require('express');
const app = express();
const axios = require('axios');

require('dotenv').config();
const port = process.env.PROXY_PORT;
app.use(express.urlencoded({ extended: true }));

app.use(express.static('./public'));

// app.get('/images/:id', (req, res) => {
//   const id = req.params.id
//   // additional items
//   axios.get(`http://localhost:3004/images/${id}`)
//     .then((response) => {
//       // console.log(response);
//       res.status(200).json(response.data);
//     });
// });

app.get('/details/:id', (req, res) => {
  const id = req.params.id
  // additional items
  axios.get(`http://localhost:3002/details/${id}`)
    .then((response) => {
      console.log(response);
      res.status(200).json(response.data);
    });
});

app.get('/reviews/:id', (req, res) => {
  const id = req.params.id
  // additional items
  axios.get(`http://localhost:3003/reviews/${id}`)
    .then((response) => {
      console.log(response);
      res.status(200).json(response.data);
    });
});

app.get('/additional/:id', (req, res) => {
  const id = req.params.id
  // additional items
  axios.get(`http://localhost:3004/additional/${id}`)
    .then((response) => {
      // console.log(response);
      res.status(200).json(response.data);
    });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})