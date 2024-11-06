const UserSchema = require("./../models/user.model");
const jwt = require("jsonwebtoken");

const generateToken = (user) => {
  return jwt.sign(
    {
      id: user._id,
      isAdmin: user.role === "admin",
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "1h",
    }
  );
};
exports.generateToken = generateToken; 

exports.register = async (username, password) => {
  const user = await UserSchema.create({ username, password });
  return user;
};

exports.login = async (username, password) => {
  const user = await UserSchema.findOne({ username });
  if (user && (await user.matchPassword(password))) {
    return { user, token: generateToken(user)};
  }
  return null;
};
