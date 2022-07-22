import express from 'express';
import {addUser, getUser,getThisUser, editUser, deleteUser} from '../controller/user-controller.js';

const router = express.Router();

router.post('/adduser',addUser);
router.get('/alluser', getUser);
router.get('/:id', getThisUser);
router.put('/:id', editUser);
router.delete('/:id', deleteUser);
router.post

export default router;