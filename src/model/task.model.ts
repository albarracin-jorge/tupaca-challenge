import mongoose from "mongoose";
import { TaskModelType } from "../types";

const { Schema } = mongoose;

const TaskSchema = new Schema<TaskModelType>({
    title: { type: String, required: true, trim: true, unique: false },
    description: { type: String, required: true },
    status: { type: String, required: true, default: 'Por hacer' },
    enable: { type: Boolean, required: true, default: true },
    date: { type: Date, default: Date.now },
})

export const Task = mongoose.models.Task || mongoose.model("Task", TaskSchema);