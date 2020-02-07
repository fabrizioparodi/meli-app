const express = require("express");
const axios = require("axios");
const router = express.Router();

const ProductDetail = require("./model/product-detail").ProductDetail;

router.get("/api/items", (req, res, next) => {
  const limit = req.query.limit || 4;
  axios
    .get(
      `https://api.mercadolibre.com/sites/MLA/search?q=${
        req.query.q
      }&limit=${limit}`
    )
    .then(response => {
      res.json(response.data);
    })
    .catch(error => {
      console.error(error.message);
      res.send(error.message);
    });
});

router.get("/api/items/:id", (req, res, next) => {
  axios
    .all([
      axios.get(`https://api.mercadolibre.com/items/${req.params.id}`),
      axios.get(`https://api.mercadolibre.com/items/${req.params.id}/description`)
    ])
    .then(
      axios.spread((itemResponse, descriptionResponse) => {
        console.log(itemResponse, descriptionResponse);
        res.send(new ProductDetail(itemResponse.data, descriptionResponse.data));
      })
    )
    .catch(error => {
      console.error(error.message);
      res.send(error.message);
    });
});

router.get("/api/items/:id/description", (req, res, next) => {
  axios
    .get(`https://api.mercadolibre.com/items/${req.params.id}/description`)
    .then(response => {
      res.json(response.data);
    })
    .catch(error => {
      console.error(error.message);
      res.send(error.message);
    });
});

module.exports = router;
