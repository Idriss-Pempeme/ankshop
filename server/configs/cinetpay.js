const axios = require("axios");

const CinetPay = axios.create({
  baseURL: "https://api-checkout.cinetpay.com/v2", // Use sandbox or production baseURL as needed
  headers: {
    "Content-Type": "application/json"
  }
});

module.exports = CinetPay;
