import express from 'express';
import { createTask, getAllTasks, getTask, updateTask, deleteTask } from '../controllers/tasks.js';
const router = express.Router();

// http://localhost:5000/tasks

router.post('/', createTask); 

router.get('/', getAllTasks); 

router.get('/:id', getTask); 

router.put('/:id', updateTask);  

router.delete('/:id', deleteTask);  

export default router;