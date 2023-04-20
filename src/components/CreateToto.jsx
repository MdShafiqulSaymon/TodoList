import React from "react";
import TodoList from "./TodoList";
import { useState } from "react";
import swal from "sweetalert";
export default function CreateToto() {
	const [todo, setTodo] = useState({ title: "", done: false });
	const [todoArr, setTodoArr] = useState([]);
	let todos = JSON.parse(localStorage.getItem("todos")) || [];

	const onChange = (event) => {
		let value = event.target.value;
		let obj = {
			title: value,
			done: false,
		};
		console.log(value);
		setTodo(obj);
	};
	const createTodo = (event) => {
		let name = event.target.name;
		if (event.key === "Enter" || name === "addTodo") {
			if (todo.title === "") {
				swal("Oops", "Please Write Todo First", "Error");
			} else {
				todos.unshift(todo);
				setTodo({ title: "", done: false });
				localStorage.setItem("todos", JSON.stringify(todos));
			}
		} else {
			swal("Oops", "Please Write Todo First", "Error");
		}
	};
	const CompleteTodo = (i) => {
		if (todos[i]["done"] !== true) {
			todos[i]["done"] = true;
			localStorage.setItem("todos", JSON.stringify(todos));
			setTodoArr(todos);
			swal("Good Job!", "Todo Complete", "Success");
		}
	};
	return (
		<>
			<div className="box">
				<div className="text-end">
					<h2>Create Todo App</h2>
					<h4>Add New Todo</h4>
				</div>
				<div className="text-addTodo" onChange={onChange}>
					<input
						type="text"
						name="todo"
						placeholder="Write here....."
						value={todo.title}
					/>
					<button className="btn-addTodo" name="addTodo" onClick={createTodo}>
						Add
					</button>
				</div>
			</div>
			<TodoList todoArr={todoArr} CompleteTodo={CompleteTodo} />
		</>
	);
}
