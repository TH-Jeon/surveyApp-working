import express from 'express';
import {addUser, getUser,getThisUser} from '../controller/user-controller.js';

const router = express.Router();

router.post('/adduser',addUser);
router.get('/alluser', getUser);
router.get('/:id', getThisUser);
router.post('');
export default router;