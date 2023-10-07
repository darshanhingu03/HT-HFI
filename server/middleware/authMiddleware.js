const jwt = require("jsonwebtoken");

const verify_auth = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decode = jwt.verify(token, process.env.JWT_SECRET);
    if (decode) {
      req.user_data = decode;
      next();
    }
  } catch (error) {
    return res.json({ success: false, message: "Authentication failed." });
  }
};

module.exports = { verify_auth };
