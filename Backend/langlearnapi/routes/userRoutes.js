
const userController = require("../controllers/userController");
const router = require("express").Router();


/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: The name of the user
 *         email:
 *           type: string
 *           description: The email of the user
 *         password:
 *           type: string
 *           description: The password of the user
 *         quizzes:
 *           type: array
 *           items:
 *             type: string
 *           description: The quizzes associated with the user
 *         progress:
 *           type: array
 *           items:
 *             type: string
 *           description: The progress associated with the user
 *         coins:
 *           type: number
 *           description: The number of coins the user has
 *         role:
 *           type: string
 *           description: The role of the user
 */


/**
 * @swagger
 * api/v1/users:
 *  get:
 *    summary: Get all users
 *    description: Get all users
 *    responses:
 *      200:
 *        description: List of users
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/User'
 */
router.get("/", userController.getUsers);

//GET /users/:id
/**
 * @swagger
 * api/v1/users/{id}:
 *  get:
 *    summary: Get a user by id
 *    description: Get a user by id
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        description: The user id
 *        schema:
 *          type: string
 *    responses:
 *      200:
 *        description: A user
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/User'
 *      404:
 *        description: The user was not found
 */
router.get("/:id", userController.getUser);

//POST /users
/**
 * @swagger
 * api/v1/users:
 *  post:
 *    summary: Create a new user
 *    description: Create a new user
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/User'
 *    responses:
 *      201:
 *        description: A user was created
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/User'
 *      400:
 *        description: Bad request
 */

router.post("/", userController.createUser);

//PUT /users/:id
/**
 * @swagger
 * api/v1/users/{id}:
 *  put:
 *    summary: Update a user by id
 *    description: Update a user by id
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        description: The user id
 *        schema:
 *          type: string
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/User'
 *    responses:
 *      200:
 *        description: A user was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/User'
 *      404:
 *        description: The user was not found
 */

router.put("/:id", userController.updateUser);

//DELETE /users/:id
/**
 * @swagger
 * api/v1/users/{id}:
 *  delete:
 *    summary: Delete a user by id
 *    description: Delete a user by id
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        description: The user id
 *        schema:
 *          type: string
 *    responses:
 *      200:
 *        description: A user was deleted
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/User'
 *      404:
 *        description: The user was not found
 */

router.delete("/:id", userController.deleteUser);

module.exports = router;


//Get /users



