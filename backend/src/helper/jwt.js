const jwt = require("jsonwebtoken");

const sign = (payload) => jwt.sign(payload, "hacker");
const verify = (token) => jwt.verify(token, "hacker");

module.exports = {
  sign,
  verify,
};
