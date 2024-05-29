const bidData = require("../../shared/testData/bidsData");

export default function handler(req, res) {
  const { bidId } = req.query;
  const bid = bidData.default.find(
    (bid) => bid.bid_id.toString() === bidId.toString()
  );
  if (bid) {
    res.status(200).json(bid);
  } else {
    res.status(404).json({ message: `Bid with Bid ID ${bidId} not found.`});
  }
}
