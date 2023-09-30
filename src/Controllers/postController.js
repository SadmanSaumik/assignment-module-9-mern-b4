exports.create = async (req, res) => {
  res.status(200).json({ status: "success", data: "Create" });
};

exports.read = async (req, res) => {
  res.status(200).json({ status: "success", data: "Read" });
};

exports.update = async (req, res) => {
  res.status(200).json({ status: "success", data: "Update" });
};

exports.delete = async (req, res) => {
  res.status(200).json({ status: "success", data: "Delete" });
};
