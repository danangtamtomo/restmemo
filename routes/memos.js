var express = require('express')
var router = express.Router()
const MemoController = require('../controllers/MemoController')

router.get('/', MemoController.getMemos)
router.get('/:id', MemoController.getMemo)
router.post('/', MemoController.createMemo)
router.put('/:id', MemoController.updateMemo)
router.delete('/:id', MemoController.deleteMemo)


router.get('/index', MemoController.getMemoIndex)

module.exports = router