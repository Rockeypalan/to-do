import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Enter task name"],
    trim: true,
    unique: true,
    maxlength: [20, "Task name can not be more than 20 characters"],

  },
  completed: {
    type: Boolean,
    default: false,
  },
});

const Task = mongoose.model("Tasks", TaskSchema);
export default Task;