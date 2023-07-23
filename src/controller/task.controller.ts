import { Task } from "../model/task.model";
import { connection } from "../conn";
import {
    TaskCreateParam, TaskCreateParamSchema, TaskDeleteParam, TaskDeleteParamSchema, TaskFilterStatusParam, TaskFilterTitleParamSchema, TaskFilterTitleParam, TaskFilterStatusParamSchema, TaskUpdateParam, TaskUpdateParamSchema
} from "../services/schema";

export const createTask = async (body: TaskCreateParam) => {

    try {
        TaskCreateParamSchema.parse(body);
        await connection();
        const { title, description } = body;
        await Task.create({ title, description });
        console.log(`creando...`);

        return { success: true };
    } catch (error) {
        console.log(error);

        return { success: false, error };
    }
};

export const selectAllTask = async () => {
    try {
        await connection();
        const result = await Task.find({ enable: true });
        return { success: true, result };
    } catch (error) {
        return { success: false, error };
    }
};

export const filterByStatus = async (body: TaskFilterStatusParam) => {
    try {
        TaskFilterStatusParamSchema.parse(body);
        await connection();
        const result = await Task.find({ status: body.status, enable: true });
        return { success: true, result };
    } catch (error) {
        return { success: false, error };
    }
};

export const filterByTitle = async (body: TaskFilterTitleParam) => {
    try {
        TaskFilterTitleParamSchema.parse(body);
        await connection();
        const regex = new RegExp(`^${body.title}`, "i");
        console.log(regex);

        const result = await Task.find({ title: regex, enable: true });
        return { success: true, result };
    } catch (error) {
        return { success: false, error };
    }
};

export const updateTask = async (body: TaskUpdateParam) => {
    try {
        TaskUpdateParamSchema.parse(body);
        await connection();
        const { id, status } = body;
        await Task.updateOne({ _id: id }, { status });
        return { success: true };
    } catch (error) {
        return { success: false, error };
    }
};

export const softDeleteTask = async (body: TaskDeleteParam) => {
    try {
        TaskDeleteParamSchema.parse(body);
        await connection();
        const { id } = body;
        await Task.updateOne({ _id: id }, { enable: false });
        return { success: true };
    } catch (error) {
        return { success: false, error };
    }
};

