import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Enter task name"],
    trim: true,
    maxlength: [20, "Task name can not be more than 20 characters"],
  },
});

const Task = mongoose.model("Tasks", TaskSchema);
export default Task;