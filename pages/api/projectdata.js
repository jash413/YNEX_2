const projectdata = require("../../shared/testData/data");

export default function handler(req, res) {
  res.status(200).json(projectdata.default);
}
