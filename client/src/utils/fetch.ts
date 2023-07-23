import {
	type TaskStatus,
	type TaskForm,
	type ListOfTasks
} from "../types";

export const addTask = async (form: TaskForm) => {
	try {
		const query = await fetch('http://localhost:8080/api/', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(form)
		})
		const response = await query.json()
		return response;
	} catch (error) {
		return error;
	}
}

export const getTasks = async () => {
	try {
		const query = await fetch(`http://localhost:8080/api`)
		const response = await query.json()
		return response.result as ListOfTasks;
	} catch (error) {
		console.log(error)
	}
}

export const getTaskByStatus = async (status: TaskStatus) => {
	try {
		const query = await fetch(`http://localhost:8080/api/status/${status}`)
		const response = await query.json()
		return response.result as ListOfTasks;
	} catch (error) {
		return error;
	}
}

export const getTaskByTitle = async (title: string) => {
	try {
		const query = await fetch(`http://localhost:8080/api/title/${title}`)
		const response = await query.json()
		return response.result as ListOfTasks;
	} catch (error) {
		return error;
	}
}

export const deleteTask = async (id: string) => {
	try {
		const query = await fetch(`http://localhost:8080/api/`, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ id })
		})
		const response = await query.json()
		return response;
	} catch (error) {
		return error;
	}
}

export const updateTaskStatus = async (id: string, status: TaskStatus) => {
	try {
		const query = await fetch(`http://localhost:8080/api/`, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ id, status })
		})
		const response = await query.json()
		return response;
	} catch (error) {
		return error;
	}
}