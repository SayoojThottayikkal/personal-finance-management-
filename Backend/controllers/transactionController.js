const Transaction = require("../models/Transaction");

exports.addTransaction = async (req, res) => {
  const newTx = new Transaction({ ...req.body, userId: req.userId });
  const saved = await newTx.save();
  res.json(saved);
};

exports.getTransactions = async (req, res) => {
  const txs = await Transaction.find({ userId: req.userId });
  res.json(txs);
};

exports.updateTransaction = async (req, res) => {
  const updated = await Transaction.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(updated);
};

exports.deleteTransaction = async (req, res) => {
  await Transaction.findByIdAndDelete(req.params.id);
  res.json({ msg: "Deleted" });
};
