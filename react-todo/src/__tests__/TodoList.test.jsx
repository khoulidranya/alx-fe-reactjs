import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "../components/TodoList";

describe("TodoList Component", () => {
  test("renders the initial todos", () => {
    // Arrange
    render(<TodoList />);
    
    // Assert
    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Build a project")).toBeInTheDocument();
  });

  test("adds a new todo", () => {
    // Arrange
    render(<TodoList />);
    const input = screen.getByPlaceholderText("Add a new todo");
    const addButton = screen.getByText("Add Todo");

    // Act
    fireEvent.change(input, { target: { value: "Write tests" } });
    fireEvent.click(addButton);

    // Assert
    expect(screen.getByText("Write tests")).toBeInTheDocument();
  });

  test("toggles a todo's completion status", () => {
    // Arrange
    render(<TodoList />);
    const todoItem = screen.getByText("Learn React");

    // Act
    fireEvent.click(todoItem);

    // Assert
    expect(todoItem).toHaveStyle("text-decoration: line-through");

    // Act (toggle again)
    fireEvent.click(todoItem);

    // Assert
    expect(todoItem).not.toHaveStyle("text-decoration: line-through");
  });

  test("deletes a todo", () => {
    // Arrange
    render(<TodoList />);
    const deleteButton = screen.getAllByText("Delete")[0]; // First "Delete" button

    // Act
    fireEvent.click(deleteButton);

    // Assert
    expect(screen.queryByText("Learn React")).not.toBeInTheDocument();
  });
});
