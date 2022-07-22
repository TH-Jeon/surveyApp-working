import express from 'express';
//import {addUser, getUser,getThisUser, editUser, deleteUser} from '../controller/user-controller.js';
import {addSurvey, getSurvey, deleteSurvey, getThisSurvey, editSurvey} from '../controller/survey-controller.js';
import { addTfQuestion, getQuestion} from '../controller/tfquestion-controller.js'
const router = express.Router();
//users
//router.post('/adduser',addUser);
//router.get('/alluser', getUser);
//router.get('/:id', getThisUser);
//router.put('/:id', editUser);
//router.delete('/:id', deleteUser);
//surveys

router.post('/addtfquestion', addTfQuestion);
router.get('/allquestion/:id', getQuestion);

router.post('/addsurvey', addSurvey);
router.get('/allsurvey', getSurvey);
router.delete('/survey/:id', deleteSurvey);
router.get('/editsurvey/:id', getThisSurvey);
router.put('/editsurvey/:id', editSurvey);



export default router;