const asyncHandler = require('../middleware/asyncHandler');
const Transaction = require('../models/TransactionModel');

// @desc    Get all transactions
// @route   GET /transactions
// @access  Public
const getTransactions = asyncHandler(async (req, res) => {
    const transactions = await Transaction.find({});
    res.status(201).json(transactions);
});

// // @desc    Add a transaction
// // @route   POST /transactions
// // @access  Private/Admin
// exports.addTransaction = asyncHandler(async (req, res) => {
//     const { text, amount } = req.body;
//     const transaction = await Transaction.create({ text, amount });
//     res.status(201).json(transaction);
// });

// // @desc    Update a transaction
// // @route   PUT /transactions/:id
// // @access  Private/Admin
// exports.updateTransaction = asyncHandler(async (req, res) => {
//     const { text, amount } = req.body;
//     const transaction = await Transaction.findById(req.params.id);
//     if (transaction) {
//         transaction.text = text;
//         transaction.amount = amount;
//         const updatedTransaction = await transaction.save();
//         res.json(updatedTransaction);
//     } else {
//         res.status(404);
//         throw new Error('Transaction not found');
//     }
// });

// // @desc    Delete a transaction
// // @route   DELETE /transactions/:id
// // @access  Private/Admin
// exports.deleteTransaction = asyncHandler(async (req, res) => {
//     const transaction = await Transaction.findById(req.params.id);
//     if (transaction) {
//         await transaction.remove();
//         res.json({ message: 'Transaction removed' });
//     } else {
//         res.status(404);
//         throw new Error('Transaction not found');
//     }
// });

module.exports = {
    getTransactions,
    // addTransaction,
    // updateTransaction,
    // deleteTransaction,
};