/**
 * @swagger
 * tags:
 *   name: Slides
 *   description: Slide management
 */

/**
 * @swagger
 * /api/v1/slides:
 *   post:
 *     summary: Create a new slide
 *     tags: [Slides]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               content:
 *                 type: string
 *                 description: The content of the slide
 *               image:
 *                 type: string
 *                 description: The URL of the slide image
 *             required:
 *               - content
 *     responses:
 *       201:
 *         description: The slide was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                   description: The auto-generated ID of the slide
 *                 content:
 *                   type: string
 *                   description: The content of the slide
 *                 image:
 *                   type: string
 *                   description: The URL of the slide image
 *       400:
 *         description: Bad request
 */

/**
 * @swagger
 * /api/v1/slides:
 *   get:
 *     summary: Retrieve a list of slides
 *     tags: [Slides]
 *     responses:
 *       200:
 *         description: A list of slides
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                     description: The auto-generated ID of the slide
 *                   content:
 *                     type: string
 *                     description: The content of the slide
 *                   image:
 *                     type: string
 *                     description: The URL of the slide image
 */

/**
 * @swagger
 * /api/v1/slides/{id}:
 *   get:
 *     summary: Get a slide by ID
 *     tags: [Slides]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The slide ID
 *     responses:
 *       200:
 *         description: The slide description by ID
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                   description: The auto-generated ID of the slide
 *                 content:
 *                   type: string
 *                   description: The content of the slide
 *                 image:
 *                   type: string
 *                   description: The URL of the slide image
 *       404:
 *         description: Slide not found
 */

/**
 * @swagger
 * /api/v1/slides/{id}:
 *   put:
 *     summary: Update a slide by ID
 *     tags: [Slides]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The slide ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               content:
 *                 type: string
 *                 description: The content of the slide
 *               image:
 *                 type: string
 *                 description: The URL of the slide image
 *             required:
 *               - content
 *     responses:
 *       200:
 *         description: The slide was successfully updated
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                   description: The auto-generated ID of the slide
 *                 content:
 *                   type: string
 *                   description: The content of the slide
 *                 image:
 *                   type: string
 *                   description: The URL of the slide image
 *       400:
 *         description: Bad request
 *       404:
 *         description: Slide not found
 */

/**
 * @swagger
 * /api/v1/slides/{id}:
 *   delete:
 *     summary: Delete a slide by ID
 *     tags: [Slides]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The slide ID
 *     responses:
 *       200:
 *         description: The slide was deleted
 *       404:
 *         description: Slide not found
 */

const router = require("express").Router();
const slideController = require("../controllers/slideController");

router.post("/", slideController.createSlide);
router.get("/", slideController.getSlides);
router.get("/:id", slideController.getSlide);
router.put("/:id", slideController.updateSlide);
router.delete("/:id", slideController.deleteSlide);

module.exports = router;
