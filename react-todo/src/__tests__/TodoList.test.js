import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../components/TodoList"; // Ensure the correct path to TodoList component

describe("TodoList Component", () => {
  test("renders initial todos", () => {
    render(<TodoList />);
    
    // Verify that initial todos are rendered
    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Build a Todo App")).toBeInTheDocument();
  });

  test("adds a new todo", () => {
    render(<TodoList />);
    
    // Simulate entering a new todo and clicking the Add button
    const input = screen.getByPlaceholderText("Add a new todo");
    const addButton = screen.getByText("Add");

    fireEvent.change(input, { target: { value: "New Test Todo" } });
    fireEvent.click(addButton);

    // Verify the new todo is displayed
    expect(screen.getByText("New Test Todo")).toBeInTheDocument();
  });

  test("toggles a todo's completion status", () => {
    render(<TodoList />);
    
    // Verify initial todo is not completed
    const todo = screen.getByText("Learn React");
    expect(todo).not.toHaveStyle("text-decoration: line-through");

    // Simulate toggling completion
    fireEvent.click(todo);
    expect(todo).toHaveStyle("text-decoration: line-through");

    // Simulate toggling back to incomplete
    fireEvent.click(todo);
    expect(todo).not.toHaveStyle("text-decoration: line-through");
  });

  test("deletes a todo", () => {
    render(<TodoList />);
    
    // Verify the initial todo exists
    const todo = screen.getByText("Learn React");
    const deleteButton = screen.getAllByText("Delete")[0]; // First Delete button

    // Simulate deleting the todo
    fireEvent.click(deleteButton);

    // Verify the todo is no longer in the document
    expect(todo).not.toBeInTheDocument();
  });
});
