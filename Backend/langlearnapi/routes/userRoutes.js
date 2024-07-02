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

//GET /users/:id
/**
 * @swagger
 * /api/v1/users/{id}:
 *  get:
 *    summary: Get a user by id
 *    tags: [Users]
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
 * /api/v1/users:
 *  post:
 *    summary: Create a new user
 *    tags: [Users]
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
 * /api/v1/users/{id}:
 *  put:
 *    summary: Update a user by id
 *    tags: [Users]
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
 * /api/v1/users/{id}:
 *  delete:
 *    summary: Delete a user by id
 *    tags: [Users]
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

//Get /users
/**
 * @swagger
 * /api/v1/users:
 *  get:
 *    summary: Get all users
 *    tags: [Users]
 *    description: Get all users
 *    responses:
 *      200:
 *        description: A list of users
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/User'
 *      404:
 *        description: No users were found
 */
router.get("/", userController.getUsers);

//POST /users/:id/addCoins
/**
 * @swagger
 * /api/v1/users/{id}/addCoins:
 *  post:
 *    summary: Add coins to a user by id
 *    tags: [Users]
 *    description: Add coins to a user by id
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
 *            type: object
 *            properties:
 *              coins:
 *                type: number
 *    responses:
 *      200:
 *        description: Coins were added
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/User'
 *      404:
 *        description: The user was not found
 */
router.post("/:id/addCoins", userController.addCoins);

//POST /users/:id/deductCoins
/**
 * @swagger
 * /api/v1/users/{id}/deductCoins:
 *  post:
 *    summary: Deduct coins from a user by id
 *    tags: [Users]
 *    description: Deduct coins from a user by id
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
 *            type: object
 *            properties:
 *              coins:
 *                type: number
 *    responses:
 *      200:
 *        description: Coins were deducted
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/User'
 *      404:
 *        description: The user was not found
 */

router.post("/:id/deductCoins", userController.deductCoins);

//Get /users/:id/coins

/**
 * @swagger
 * /api/v1/users/{id}/coins:
 * get:
 * summary: Get coins by user id
 * tags: [Users]
 * description: Get coins by user id
 * parameters:
 * - in: path
 * name: id
 * required: true
 * description: The user id
 * schema:
 * type: string
 * responses:
 * 200:
 * description: A user's coins
 * content:
 * application/json:
 * schema:
 * type: object
 * properties:
 * coins:
 * type: number
 * 404:
 * description: The user was not found
 */
router.get("/:id/coins", userController.getCoins);

module.exports = router;
