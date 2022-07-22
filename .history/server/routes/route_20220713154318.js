import express from 'express';
import {addUser, getUser} from '../controller/user-controller.js';

const router = express.Router();

router.post('/adduser',addUser)
router.get('/alluser', getUser);
router.get('/:id', getThisUser);
export default router;