var mongoose = require('mongoose')

var memoSchema = mongoose.Schema({
  title: String,
  memo_content: String
}, {
  timestamps: true
})

var Memo = mongoose.model('Memo', memoSchema)

module.exports = Memo