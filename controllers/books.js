const Book = require('../models/Book')

module.exports = {
  all: function(req, res) {
    Book.find().then(data_book => {
      res.status(200).json({
        message: 'list book',
        data_book
      })
    }).catch(err => {
      res.status(500).json({
        message: 'error'
      })
    })
  },
  create: function(req, res) {
    const book = new Book()
    book.isbn = req.body.isbn
    book.title = req.body.title
    book.author = req.body.author
    book.category = req.body.category
    book.stock = req.body.stock
    book.save().then(data_book => {
      res.status(201).json({
        message: 'success create data book',
        data_book
      }).catch(err => {
        res.status(500).json({
          message: 'error'
        })
      })
    })
  },
  update: function(req, res) {
    Book.updateOne({
      _id: req.params.id
    },{
      $set: {
        isbn: req.body.isbn,
        title: req.body.title,
        author: req.body.author,
        category: req.body.category,
        stock: req.body.stock
      }
    }).then(data_book => {
      res.status(200).json({
        message: 'success update data book',
        data_book
      })
    }).catch(err => {
      res.status(500).json({
        message: 'error'
      })
    })
  },
  deleteData: function(req, res) {
    Book.remove({
      _id: req.params.id
    }).then(data_book => {
      res.status(200).json({
        message: 'success delete data book',
        data_book
      })
    }).catch(err => {
      res.status(500).json({
        message: 'error'
      })
    })
  }
}
