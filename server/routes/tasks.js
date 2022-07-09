import express from 'express';
import { createTask, getAllTasks, getTask, updateTask, deleteTask } from '../controllers/tasks.js';
const router = express.Router();

// http://localhost:5000/tasks

router.post('/', createTask); 

router.get('/', getAllTasks); 

router.get('/:id', getTask); 

router.post('/update', updateTask);  

router.post('/delete', deleteTask);  

export default router;