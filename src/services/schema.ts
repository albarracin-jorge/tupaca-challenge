import { z } from "zod";

//Create schema
export const TaskCreateParamSchema = z.object({
    title: z.string(),
    description: z.string(),
});

export type TaskCreateParam = z.infer<typeof TaskCreateParamSchema>;


//Update status schema
export const TaskUpdateParamSchema = z.object({
    id: z.string(),
    status: z.string(),
});

export type TaskUpdateParam = z.infer<typeof TaskUpdateParamSchema>;


//Soft delete schema
export const TaskDeleteParamSchema = z.object({
    id: z.string(),
});

export type TaskDeleteParam = z.infer<typeof TaskDeleteParamSchema>;


//Filter status schema
export const TaskFilterStatusParamSchema = z.object({
    status: z.string(),
});

export type TaskFilterStatusParam = z.infer<typeof TaskFilterStatusParamSchema>;


//Filter title schema
export const TaskFilterTitleParamSchema = z.object({
    title: z.string(),
});

export type TaskFilterTitleParam = z.infer<typeof TaskFilterTitleParamSchema>;


//Route query schema
export const StatusParamSchema = z.object({
    status: z.literal("Por hacer").or(z.literal("En progreso")).or(z.literal("Hecho"))
});

export type StatusParam = z.infer<typeof StatusParamSchema>;