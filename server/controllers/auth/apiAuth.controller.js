const User = require("../../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

class apiAuthController {
  // Controller for signup
  static signup = async (req, res) => {
    try {
      if (req.body != undefined && req.body != "undefined") {
        const exist = await User.findOne({ email: req.body.email });
        // if (exist) {
        //   return res
        //     .status(400)
        //     .json({ success: false, message: "this email is already exists" });
        // }
        const user = new User({
          username: req.body.username,
          email: req.body.email,
          password: req.body.password,
        });
        await user.save();
        return res.status(201).json({
          status: 201,
          message: "Signup successful",
        });
      }
      return res.status(500).json({
        status: 500,
        message: "Internal Server Error",
      });
    } catch (error) {
      return res.status(500).json({
        status: 500,
        message: error.message,
      });
    }
  };
  //signup done

  // Controller for admin
  static admin = async (req, res) => {
    try {
      if (req.body != undefined && req.body != "undefined") {
        const { email, password } = req.body;
        const exists = await User.findOne({ email });
        console.log("exists", exists);
        if (exists) {
          const { _id, email } = exists;
          const compare = await bcrypt.compare(password, exists.password);
          if (!compare) {
            throw new Error("Password is wrong");
          }
          const token = jwt.sign(
            {
              id: _id,
              email,
            },
            process.env.JWT_SECRET,
            {
              expiresIn: "356d",
            }
          );
          console.log("true", token);
          return res.status(200).json({
            success: true,
            data: token,
          });
        } else {
          return res.status(500).json({
            status: 500,
            message: "Admin Authentication Credential Failure",
          });
        }
      }
      return res.status(500).json({
        status: 500,
        message: "Bad Request For Admin Authentication",
      });
    } catch (error) {
      return res.status(500).json({
        status: 500,
        message: "Bad Request For Admin Authentication",
      });
    }
  };
}

module.exports = apiAuthController;
