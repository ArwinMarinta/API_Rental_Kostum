const checkParam = async (req, res, next) => {
  const { id_rental, nama_kostum, ukuran } = req.query;

  if (id_rental && !Number.isInteger(parseInt(id_rental))) {
    return res.status(400).json({ error: "Invalid id_rental" });
  }
  if (nama_kostum && typeof nama_kostum !== "string") {
    return res.status(400).json({ error: "Invalid nama kostum" });
  }
  if (ukuran && typeof ukuran !== "string") {
    return res.status(400).json({ error: "Invalid ukuran" });
  }

  next();
};

module.exports = checkParam;
