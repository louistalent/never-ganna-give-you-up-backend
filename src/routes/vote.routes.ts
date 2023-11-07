import express, { Router, Request, Response } from 'express';
import * as middlewares from '../middlewares/member.middlewares';
import * as controllers from "../controllers/vote.controllers";

const router: Router = express.Router();

// router.get('/', controllers.getMembers)
router.post('/', controllers.setVote)
router.post('/getmemelist', controllers.getMemeList)

// router.patch('/:member_idx', controllers.updateMember)
// router.delete('/:member_idx', controllers.deleteMember)
export default router;