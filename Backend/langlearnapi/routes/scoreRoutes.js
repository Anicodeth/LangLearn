
const scoreController = require('../controllers/scoreController');

const router = require('express').Router();

router.post('/', scoreController.createScore);
router.get('/:id', scoreController.getScore);
router.get('/', scoreController.getScores);
router.put('/:id', scoreController.updateScore);
router.delete('/:id', scoreController.deleteScore);
router.post('/:id', scoreController.addScoreToUser);

module.exports = router;