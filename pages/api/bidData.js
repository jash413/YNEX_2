const bidData = require("../../shared/testData/bidsData");

export default function handler(req, res) {
  res.status(200).json(bidData.default);
}
