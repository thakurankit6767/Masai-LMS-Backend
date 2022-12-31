const post = (model) => async (req, res) => {
  try {
    const item = await model.create(req.body);

    return res.status(201).send(item);
  } catch (e) {
    return res.status(500).json({ message: e.message, status: "Failed" });
  }
};

const get = (model) => async (req, res) => {
  const items = await model.find().lean().exec();

  return res.status(200).send({ items });
};

module.exports = {
  post,
  get,
};
