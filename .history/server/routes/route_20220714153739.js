import express from 'express';
import {addUser, getUser,getThisUser, editUser} from '../controller/user-controller.js';

const router = express.Router();

router.post('/adduser',addUser);
router.get('/alluser', getUser);
router.get('/:id', getThisUser);
router.put('/:id', editUser);
export default router;