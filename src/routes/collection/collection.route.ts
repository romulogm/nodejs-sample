import express from 'express';
//const schemaValidator = require('express-joi-validator');

// // Controller
// import userController from '../../controllers/user/user.controller';

// // Schema
// import userSchema from '../../validations/schemas/user.schema';

// // Middleware
// import { isAdmin } from '../../middlewares/permission-handler.middleware';

const router = express.Router();

router.post(
  '/',
  collectionController.create,
);

// router.put(
//   '/:id',
//   collectionController.edit,
// );

// router.delete(
//   '/:id',
//   collectionController.remove,
// );

export default router;
