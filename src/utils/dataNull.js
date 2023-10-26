const dataNull = (res) => {
  return res.json({
    status: "SUCCESS",
    data: null,
  });
};

module.exports = { dataNull };
