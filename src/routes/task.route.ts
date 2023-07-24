import { Router, Request, Response, NextFunction } from "express";
import { createTask, selectAllTask, filterByStatus, filterByTitle, softDeleteTask, updateTask } from "../controller/task.controller";
import { StatusParamSchema } from "../services/schema";

const router = Router();

router.get('/', async (req, res) => {
    const result = await selectAllTask();
    if (result.success) return res.send(result);
    res.status(500).send(result.error);
})

router.get('/title/:title', async (req, res) => {
    const result = await filterByTitle(req.params);
    res.send(result);
});

router.get('/status/:status', async (req, res) => {
    const { status } = req.params;
    const validate = StatusParamSchema.safeParse({ status });
    if (!validate.success) return res.status(400).send({ error: validate.error.issues[0].message });
    const result = await filterByStatus(req.params);
    return res.send(result);
});

router.post('/', async (req, res) => {
    const result = await createTask(req.body);
    if (result.success) return res.send(result);
    return res.status(500).send(result.error);
});

router.patch('/', async (req, res) => {
    const { id, status } = req.body;
    const validate = StatusParamSchema.safeParse({ status });
    if (!validate.success) return res.status(400).send({ error: validate.error.issues[0].message });
    const result = await updateTask({ id, status });
    res.send(result);
});

router.delete('/', async (req, res) => {
    const result = await softDeleteTask(req.body);
    res.send(result);
});

export default router;

