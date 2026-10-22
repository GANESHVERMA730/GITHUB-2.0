const getAllUsers = (req, res) => {
  res.send("All user fetched!");
};

const signup = (req, res) => {
  res.send("Signed up");
};

const login = (req, res) => {
  res.send("Logged in!");
};

const getUserProfile = (req, res) => {
  res.send("Profile fetched!");
};

const updateUserProfile = (req, res) => {
  res.send("Profile Updated!");
};

const deleteUserProfile = (req, res) => {
  res.send("Profile deleted!");
};

module.exports = {
  getAllUsers,
  signup,
  login,
  getUserProfile,
  updateUserProfile,
  deleteUserProfile,
};