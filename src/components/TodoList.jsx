import React from "react";

export default function TodoList({ todoArr, CompleteTodo }) {
	todoArr =
		todoArr.length > 0
			? todoArr
			: JSON.parse(localStorage.getItem("todos")) || [];
	return (
		<div className="todo-list">
			<ul>
				{todoArr.length > 0
					? todoArr.map((el, i) => (
							<li key={i}>
								<div className={el["done"] ? "line-through" : null}>
									{el.title}
								</div>
								<div className="icon">
									<i
										title="Complete"
										onClick={() => CompleteTodo(i)}
										className={`fas fa-check-circle pointer ${
											el["done"] ? "green" : "blue"
										}`}
									/>
									<i title="Delete" className="fas fa-trash-alt" />
								</div>
							</li>
					  ))
					: null}
			</ul>
		</div>
	);
}
