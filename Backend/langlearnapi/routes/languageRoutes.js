/**
 * @swagger
 * components:
 *   schemas:
 *     Language:
 *       type: object
 *       required:
 *         - name
 *         - description
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated ID of the language
 *         name:
 *           type: string
 *           description: The name of the language
 *         description:
 *           type: string
 *           description: The description of the language
 *         languageImage:
 *           type: string
 *           description: The URL of the language image
 *         courses:
 *           type: array
 *           items:
 *             type: string
 *             description: The ID of a course
 *       example:
 *         id: 60d0fe4f5311236168a109ca
 *         name: English
 *         description: A language spoken in many countries
 *         languageImage: http://example.com/image.jpg
 *         courses: []
 *
 *     LanguageResponse:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated ID of the language
 *         name:
 *           type: string
 *           description: The name of the language
 *         description:
 *           type: string
 *           description: The description of the language
 *         languageImage:
 *           type: string
 *           description: The URL of the language image
 *         courses:
 *           type: array
 *           items:
 *             type: string
 *             description: The ID of a course
 *       example:
 *         id: 60d0fe4f5311236168a109ca
 *         name: English
 *         description: A language spoken in many countries
 *         languageImage: http://example.com/image.jpg
 *         courses: []
 *
 * tags:
 *   - name: Languages
 *     description: Language management
 */

/**
 * @swagger
 * /api/v1/languages:
 *   get:
 *     summary: Retrieve a list of languages
 *     tags: [Languages]
 *     responses:
 *       200:
 *         description: A list of languages
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/LanguageResponse'
 */

/**
 * @swagger
 * /api/v1/languages/{id}:
 *   get:
 *     summary: Get a language by ID
 *     tags: [Languages]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The language ID
 *     responses:
 *       200:
 *         description: The language description by ID
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/LanguageResponse'
 *       404:
 *         description: Language not found
 */

/**
 * @swagger
 * /api/v1/languages:
 *   post:
 *     summary: Create a new language
 *     tags: [Languages]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Language'
 *     responses:
 *       201:
 *         description: The language was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/LanguageResponse'
 *       400:
 *         description: Bad request
 */

/**
 * @swagger
 * /api/v1/languages/{id}:
 *   put:
 *     summary: Update a language by ID
 *     tags: [Languages]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The language ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Language'
 *     responses:
 *       200:
 *         description: The language was successfully updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/LanguageResponse'
 *       400:
 *         description: Bad request
 *       404:
 *         description: Language not found
 */

/**
 * @swagger
 * /api/v1/languages/{id}:
 *   delete:
 *     summary: Delete a language by ID
 *     tags: [Languages]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The language ID
 *     responses:
 *       200:
 *         description: The language was deleted
 *       404:
 *         description: Language not found
 */

/**
 * @swagger
 * /api/v1/languages/{id}/courses:
 *   post:
 *     summary: Add a course to a language
 *     tags: [Languages]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The language ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               courseId:
 *                 type: string
 *                 description: The ID of the course to add
 *             required:
 *               - courseId
 *             example:
 *               courseId: 60d0fe4f5311236168a109cb
 *     responses:
 *       200:
 *         description: The course was successfully added to the language
 *       400:
 *         description: Bad request
 *       404:
 *         description: Language or course not found
 */

/**
 * @swagger
 * /api/v1/languages/{id}/courses:
 *   get:
 *     summary: Get all courses for a language
 *     tags: [Languages]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The language ID
 *     responses:
 *       200:
 *         description: List of courses for the language
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: string
 *                 description: The ID of a course
 *       404:
 *         description: Language not found
 */

/**
 * @swagger
 * /api/v1/languages/{id}/courses/{courseId}:
 *   delete:
 *     summary: Remove a course from a language
 *     tags: [Languages]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The language ID
 *       - in: path
 *         name: courseId
 *         schema:
 *           type: string
 *         required: true
 *         description: The course ID
 *     responses:
 *       200:
 *         description: The course was removed from the language
 *       404:
 *         description: Language or course not found
 */

const express = require("express");
const router = express.Router();
const languageController = require("../controllers/languageController");

router.get("/", languageController.getLanguages);
router.get("/:id", languageController.getLanguage);
router.post("/", languageController.createLanguage);
router.put("/:id", languageController.updateLanguage);
router.delete("/:id", languageController.deleteLanguage);
router.post("/:id/courses", languageController.addCourseToLanguage);
router.get("/:id/courses", languageController.getLanguageCourses);
router.delete(
  "/:id/courses/:courseId",
  languageController.removeCourseFromLanguage
);

module.exports = router;
