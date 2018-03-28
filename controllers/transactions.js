const Transaction = require('../models/Transaction')

module.exports = {
  all: function(req, res) {
    Transaction.find().populate('booklist').exec().then(data_trans => {
      res.status(200).json({
        message: 'list data transaction',
        data_trans
      })
    }).catch(err => {
      res.status(500).json({
        message: 'error'
      })
    })
  },
  create: function(req, res) {
    var transaction = new Transaction(req.body);
    transaction.memberid = req.body.memberid
    transaction.days = req.body.days
    transaction.price = req.body.price,
    transaction.booklist = req.body.booklist
    transaction.save().then(data_trans => {
      res.status(201).json({
        message: 'success create data transaction',
        data_trans
      })
    }).catch(err => {
      res.status(500).json({
        message: 'error'
      })
    })
  },
  update: function(req, res) {
    Transaction.updateOne({
      _id: req.params.id
    },{
      $set: {
        memberid: req.body.memberid,
        days: req.body.days,
        price: req.body.price,
        booklist: req.body.booklist,
      }
    }).then(data_trans => {
      res.status(200).json({
        message: 'success update data transaction',
        data_trans
      })
    }).catch(err => {
      res.status(500).json({
        message: 'error'
      })
    })
  },
  deleteData: function(req, res) {
    Transaction.remove({
      _id: req.params.id
    }).then(data_trans => {
      res.status(200).json({
        message: 'success delete data transaction',
        data_trans
      })
    }).catch(err => {
      res.status(500).json({
        message: 'error'
      })
    })
  }
}
