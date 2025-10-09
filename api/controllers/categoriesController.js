exports.getAll = async (req, res) => {
  try {
    const cats = await Categorie.findAll({ order: [["nom", "ASC"]] });
    res.json(cats);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};
