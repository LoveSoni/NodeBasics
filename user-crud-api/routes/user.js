
const express = require('express');
const userController = require('../controller/user');
const router = express.Router();


/**
 * @swagger
 * /users:
 *  get:
 *    tags:
 *      - Read
 *    description: Use to get the users list
 *    responses:
 *      '200':
 *        description: Complete users list
 */
router.get('/users', userController.getUerList)


/**
* @swagger
* /users/{userId}:
*    get:
*      tags:
*       - Read
*      summary: Find user by id
*      description: Returns a single user
*      operationId: getUserById
*      parameters:
*        - name: userId
*          in: path
*          description: ID of user to return
*          required: true
*          schema:
*            type: integer
*            format: int64
*      responses:
*        '200':
*          description: successful operation
*        '400':
*          description: Invalid ID supplied
*        '404':
*          description: User  not found
*/
router.get('/users/:userId', userController.getUserDetails);

/**
* @swagger
* /users:
*    post:
*      tags:
*       - Create
*      summary: Create a new user
*      description: add new user info
*      requestBody:
*        - name: userId
*          in: path
*          description: ID of user to return
*          required: true
*          schema:
*            type: integer
*            format: int64
*      responses:
*        '200':
*          description: successful operation
*        '400':
*          description: Invalid ID supplied
*        '404':
*          description: User  not found
*/
router.post('/users', userController.createUser);

router.delete('/users/:userId', userController.deleteUser);

router.put('/users/:userId',)

exports.userRouter = router;