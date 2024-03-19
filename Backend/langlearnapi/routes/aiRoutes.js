
const aiController = require('../controllers/aiController');
const router = require('express').Router();

//GET /quiz/:language/:difficulty
/**
 * @swagger
 * /api/v1/ai/quiz/{language}/{difficulty}:
 *  get:
 *    summary: Get a quiz by language and difficulty
 *    description: Get a quiz by language and difficulty
 *    parameters:
 *      - in: path
 *        name: language
 *        required: true
 *        description: The language of the quiz
 *        schema:
 *          type: string
 *      - in: path
 *        name: difficulty
 *        required: true
 *        description: The difficulty of the quiz
 *        schema:
 *          type: string
 *    responses:
 *      200:
 *        description: A quiz
 *        content:
 *          application/json:
 *            schema:
 *             type: object
 */


router.get('/quiz/:language/:difficulty', aiController.getQuiz);




//GET /chat/:language/:question
/**
 * @swagger
 * /api/v1/ai/chat/{language}/{question}:
 *  get:
 *    summary: Get a chat response by language and question
 *    description: Get a chat response by language and question
 *    parameters:
 *      - in: path
 *        name: language
 *        required: true
 *        description: The language of the chat
 *        schema:
 *          type: string
 *      - in: path
 *        name: question
 *        required: true
 *        description: The question for the chat
 *        schema:
 *          type: string
 *    responses:
 *      200:
 *        description: A chat response
 *        content:
 *          application/json:
 *           schema:
 *             type: object
 */

router.get('/chat/:language/:question', aiController.getChat);



/**
 * @swagger
 * /api/v1/ai/translate/{fromLanguage}/{toLanguage}/{text}:
 *  get:
 *    summary: Get a translation by language and text
 *    description: Get a translation by language and text
 *    parameters:
 *      - in: path
 *        name: fromLanguage
 *        required: true
 *        description: The language to translate from
 *        schema:
 *          type: string
 *      - in: path
 *        name: toLanguage
 *        required: true
 *        description: The language to translate to
 *        schema:
 *          type: string
 *      - in: path
 *        name: text
 *        required: true
 *        description: The text to translate
 *        schema:
 *          type: string
 *    responses:
 *      200:
 *        description: A translation
 *        content:
 *          application/json:
 *            schema:
 *             type: object
 */

router.get('/translate/:fromLanguage/:toLanguage/:text', aiController.getTranslate);

module.exports = router;