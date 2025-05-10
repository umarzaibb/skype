import express from 'express';
import { registerUser } from '../controllers/authentication.js';
import wrapAsync from '../utils/wrapAsync.js';

const router = express.Router({ mergeParams: true });

//Routes
router.route("/register").post(wrapAsync(registerUser));

export default router;