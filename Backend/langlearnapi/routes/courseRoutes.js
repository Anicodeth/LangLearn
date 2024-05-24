/**
 * @swagger
 * components:
 *   schemas:
 *     Course:
 *       type: object
 *       required:
 *         - languageId
 *         - name
 *         - description
 *         - difficulty
 *       properties:
 *         languageId:
 *           type: string
 *           description: The ID of the language the course belongs to
 *         name:
 *           type: string
 *           description: The name of the course
 *         description:
 *           type: string
 *           description: The description of the course
 *         difficulty:
 *           type: string
 *           enum: [Beginner, Intermediate, Advanced]
 *           description: The difficulty level of the course
 *         courseImage:
 *           type: string
 *           description: The URL of the course image
 *         slides:
 *           type: array
 *           items:
 *             type: string
 *             description: The ID of a slide in the course
 *       example:
 *         languageId: 60d0fe4f5311236168a109ca
 *         name: "Introduction to Programming"
 *         description: "A beginner-friendly course on programming"
 *         difficulty: "Beginner"
 *         courseImage: "http://example.com/course.jpg"
 *         slides: []
 *
 *     CourseResponse:
 *       type: object
 *       properties:
 *         languageId:
 *           type: string
 *           description: The ID of the language the course belongs to
 *         name:
 *           type: string
 *           description: The name of the course
 *         description:
 *           type: string
 *           description: The description of the course
 *         difficulty:
 *           type: string
 *           enum: [Beginner, Intermediate, Advanced]
 *           description: The difficulty level of the course
 *         courseImage:
 *           type: string
 *           description: The URL of the course image
 *         slides:
 *           type: array
 *           items:
 *             type: string
 *             description: The ID of a slide in the course
 *       example:
 *         languageId: 60d0fe4f5311236168a109ca
 *         name: "Introduction to Programming"
 *         description: "A beginner-friendly course on programming"
 *         difficulty: "Beginner"
 *         courseImage: "http://example.com/course.jpg"
 *         slides: []
 *
 * tags:
 *   - name: Courses
 *     description: Course management
 */

/**
 * @swagger
 * /api/v1/courses:
 *   get:
 *     summary: Retrieve a list of courses
 *     tags: [Courses]
 *     responses:
 *       200:
 *         description: A list of courses
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/CourseResponse'
 */

/**
 * @swagger
 * /api/v1/courses/{id}:
 *   get:
 *     summary: Get a course by ID
 *     tags: [Courses]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The course ID
 *     responses:
 *       200:
 *         description: The course description by ID
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CourseResponse'
 *       404:
 *         description: Course not found
 */

/**
 * @swagger
 * /api/v1/courses:
 *   post:
 *     summary: Create a new course
 *     tags: [Courses]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Course'
 *     responses:
 *       201:
 *         description: The course was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CourseResponse'
 *       400:
 *         description: Bad request
 */

/**
 * @swagger
 * /api/v1/courses/{id}:
 *   put:
 *     summary: Update a course by ID
 *     tags: [Courses]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The course ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Course'
 *     responses:
 *       200:
 *         description: The course was successfully updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CourseResponse'
 *       400:
 *         description: Bad request
 *       404:
 *         description: Course not found
 */

/**
 * @swagger
 * /api/v1/courses/{id}:
 *   delete:
 *     summary: Delete a course by ID
 *     tags: [Courses]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The course ID
 *     responses:
 *       200:
 *         description: The course was deleted
 *       404:
 *         description: Course not found
 */

/**
 * @swagger
 * /api/v1/courses/title/{title}:
 *   get:
 *     summary: Get a course by title
 *     tags: [Courses]
 *     parameters:
 *       - in: path
 *         name: title
 *         schema:
 *           type: string
 *         required: true
 *         description: The title of the course
 *     responses:
 *       200:
 *         description: The course description by title
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CourseResponse'
 *       404:
 *         description: Course not found
 */

/**
 * @swagger
 * /api/v1/courses/{id}/slides:
 *   post:
 *     summary: Add a slide to a course
 *     tags: [Courses]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The course ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               slideId:
 *                 type: string
 *                 description: The ID of the slide to add
 *             required:
 *               - slideId
 *             example:
 *               slideId: 60d0fe4f5311236168a109cb
 *     responses:
 *       200:
 *         description: The slide was successfully added to the course
 *       400:
 *        description: Bad request
 *      404:
 *       description: Course or slide not found
 */

router.get("/", courseController.getAllCourses);
router.post("/", courseController.createCourse);
router.get("/:id", courseController.getCourse);
router.put("/:id", courseController.updateCourse);
router.delete("/:id", courseController.deleteCourse);
router.get("/title/:title", courseController.getCourseByTitle);
router.post("/:id/slide", courseController.addSlideToCourse);
router.post("/:id/slides", courseController.addSlideToCourse);
router.delete("/:id/slides/:slideId", courseController.removeSlideFromCourse);
router.get("/:id/slides", courseController.getSlidesForCourse);

module.exports = router;