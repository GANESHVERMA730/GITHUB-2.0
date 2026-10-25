const createIssue = (req, res) => {
  res.send("Issue created!");
};

const updateIsssueById = (req, res) => {
  res.send("Issue Updated!");
};

const deleteIssueById = (req, res) => {
  res.send("Issue deleted!");
};

const getAllIssues = (req, res) => {
  res.send("All Issues Fetched!");
};

const getIssueById = (req, res) => {
  res.send("Issue Details Fetched!");
};

module.exports = {
  createIssue,
  updateIsssueById,
  deleteIssueById,
  getAllIssues,
  getIssueById,
};