const Memo = require('../models/Memo')

var MemoController = {}

MemoController.getMemos = function(req, res, next) {
  Memo.find({})
    .then(function(memos) {
      res.send(memos)
    })
}

MemoController.getMemo = function(req, res, next) {
  Memo.find({
      _id: req.params.id
    })
    .then(function(memo) {
      res.send(memo)
    })
}

MemoController.createMemo = function(req, res, next) {
  var memo = new Memo(req.body)
  memo.save()
    .then(function(memo) {
      res.send({
        status: 'Ok',
        message: 'New memo has been created',
        memo: memo
      })
    })
    .catch(function(err) {
      res.send({
        status: 'Error',
        message: err
      })
    })
}

MemoController.updateMemo = function(req, res, next) {
  Memo.update({
      _id: req.params.id
    }, {
      $set: req.body
    })
    .then(function(err, memo) {
      res.send({
        status: 'Ok',
        message: `The memo has been updated`,
        updated_memo: memo
      })
    })
}

MemoController.deleteMemo = function(req, res, next) {
  Memo.remove({
      _id: req.params.id
    })
    .then(function() {
      res.send({
        status: 'Ok',
        message: `The memo has been deleted`
      })
    })
    .catch(function(err) {
      if (err) {
        res.send({
          status: 'Error',
          message: err
        })
      }
    })
}

MemoController.getMemoIndex = function(req, res, next) {
  res.render('memos/index')
}
module.exports = MemoController