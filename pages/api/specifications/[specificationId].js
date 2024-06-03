const specificationData = require("../../../shared/testData/specifications");

export default function handler(req, res) {
  const { specificationId } = req.query;
  const specifications = specificationData.default.filter(
    (specification) =>
      specification.projectId.toString() === specificationId.toString()
  );
  if (specifications) {
    res.status(200).json(specifications);
  } else {
    res
      .status(404)
      .json({
        message: `Specification with Specification ID ${specificationId} not found.`,
      });
  }
}
