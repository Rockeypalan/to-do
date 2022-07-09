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
  const { _id, name } = req.body;
  Task
        .findByIdAndUpdate(_id, { name })
        .then(() => res.set(201).send("Updated Successfully..."))
        .catch((err) => console.log(err));
};

    

export const deleteTask = async (req, res) => {
  const { _id } = req.body;
  Task
        .findByIdAndDelete(_id)
        .then(() => res.set(201).send("Deleted Successfully..."))
        .catch((err) => console.log(err));
};

    