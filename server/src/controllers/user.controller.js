const UserService = require("../services/user.service");

// Register new user
exports.register = async (req, res, next) => {
  const { username, password } = req.body;

  try {
    const user = await UserService.register(username, password);
    res.status(201).json({
      _id: user._id,
      username: user.username,
      isAdmin: user.role === 'admin',
      token: UserService.generateToken(user), // Call the token generation function from the service
    });
  } catch (error) {
    next(error);
  }
};

// Login
exports.login = async (req, res, next) => {
  const { username, password } = req.body;

  try {
    const result = await UserService.login(username, password);
    if (result) {
      res.json({
        _id: result.user._id,
        username: result.user.username,
        isAdmin: result.user.role === 'admin',
        token: result.token,
      });
    } else {
      res.status(401).json({ error: "Invalid credentials" });
    }
  } catch (error) {
    next(error);
  }
};
