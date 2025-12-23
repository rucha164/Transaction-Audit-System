const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Transaction = require("../models/Transaction");

/* ================== TRANSFER MONEY ================== */
router.post("/transfer", async (req, res) => {
  const { senderId, receiverId, amount } = req.body;

  try {
    const sender = await User.findById(senderId);
    const receiver = await User.findById(receiverId);

    if (!sender || !receiver) {
      return res.status(400).json({ error: "User not found" });
    }

    if (sender.balance < amount) {
      return res.status(400).json({ error: "Insufficient balance" });
    }

    sender.balance -= amount;
    receiver.balance += amount;

    await sender.save();
    await receiver.save();

    await Transaction.create({
      senderId,
      receiverId,
      amount,
      status: "SUCCESS"
    });

    res.json({ message: "Transfer Successful" });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/* ================== GET ALL USERS ================== */
router.get("/users", async (req, res) => {
  try {
    const users = await User.find({}, { _id: 1, name: 1, balance: 1 });
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
