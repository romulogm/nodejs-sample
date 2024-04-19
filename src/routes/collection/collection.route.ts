import express from 'express';
//const schemaValidator = require('express-joi-validator');

// Controller
import collectionController from '../../controllers/collection/collection.controller';

// // Schema
// import userSchema from '../../validations/schemas/user.schema';

// // Middleware
// import { isAdmin } from '../../middlewares/permission-handler.middleware';

const router = express.Router();

router.post(
  '/',
  //schemaValidator(userSchema.login),
  collectionController.create,
);

router.put(
  '/',
  //schemaValidator(userSchema.login),
  collectionController.update,
);

// router.delete(
//   '/collection',
//   //schemaValidator(userSchema.login),
//   collectionController.delete,
// );

router.get(
  '/',
  //schemaValidator(userSchema.login),
  collectionController.list,
);

export default router;
