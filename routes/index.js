import express from "express";
import { getNotifs, getNotifId, saveNotifs, updateNotifs, deleteNotifs } from "../controllers/NotificationController.js";

const router = express.Router();

//read all data
router.get('/', getNotifs); 
//read data by id
router.get('/:id', getNotifId);
//create data
router.post('/', saveNotifs);
//update data
router.patch('/:id', updateNotifs);
//delete data
router.delete('/:id', deleteNotifs);

export default router;