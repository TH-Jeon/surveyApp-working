import express from 'express';
import {addUser, getUser,getThisUser, editUser, deleteUser} from '../controller/user-controller.js';

const router = express.Router();
//users
router.post('/adduser',addUser);
router.get('/alluser', getUser);
router.get('/:id', getThisUser);
router.put('/:id', editUser);
router.delete('/:id', deleteUser);
//surveys
router.post('/addsurvey', add);

export default router;