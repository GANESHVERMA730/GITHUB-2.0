const createRepository = (req, res) => {
  res.send("Repository created!");
};

const getAllRepositories = (req, res) => {
  res.send("All Repositories fetched!");
};

const fetchRepositoryByID = (req, res) => {
  res.send("Repository Detailes fetched!!");
};

const fetchRepositoryByName = (req, res) => {
  res.send("Repository Details Fetched!!");
};

const fetchRepositoriesForCurrentUser = (req, res) => {
  res.send("Repositories for Logges in User fetched");
};

const updateRepositoryByID = (req, res) => {
  res.send("Repository updated!");
};

const toggleVisibilityById = (req, res) => {
  res.send("Visibility Toggled!");
};

const deleteRepositoryByID = (req, res) => {
  res.send("Repository Deleted!");
};
module.exports = {
  createRepository,
  getAllRepositories,
  fetchRepositoryByID,
  fetchRepositoryByName,
  fetchRepositoriesForCurrentUser,
  updateRepositoryByID,
  toggleVisibilityById,
  deleteRepositoryByID,
};
