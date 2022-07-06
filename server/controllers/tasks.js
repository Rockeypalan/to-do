import Task from "../models/Task.js";

export const createTask = async (req, res) => {
  console.log(req.body); 
  const task = await Task.create(req.body); 
  res.status(201).json({ task }); 
};

export const getAllTasks = async (req, res) => {
  const tasks = await Task.find({});
  res.status(200).json({ tasks });
};

export const getTask = async (req, res) => {
  // console.log(req.params);
  const { id: taskID } = req.params;
  const singleTask = await Task.findOne({ _id: taskID });
  res.status(200).json({ singleTask });
};

export const updateTask = async (req, res) => {
  const { id: taskID } = req.params;
  const updatedTask = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
    new: true,
    runValidators: true,
  });
  res.status(200).send({ updatedTask });
};

export const deleteTask = async (req, res) => {
  const { id: taskID } = req.params;
  const deletedTask = await Task.findOneAndDelete({ _id: taskID });
  res.status(200).send({ deletedTask });
};