import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "../components/TodoList";

describe("TodoList", () => {
  test("renders AddTodoForm", () => {
    render(<TodoList />);
    expect(screen.getByPlaceholderText(/add a new task/i)).toBeInTheDocument();
  });

  test("adds a new todo when submitted", () => {
    render(<TodoList />);

    const input = screen.getByPlaceholderText(/add a new task/i);
    const addButton = screen.getByRole("button", { name: /add/i });

    fireEvent.change(input, { target: { value: "Write tests" } });
    fireEvent.click(addButton);

    expect(screen.getByText("Write tests")).toBeInTheDocument();
  });

  test("renders initial demo todos", () => {
  render(<TodoList />);
  expect(screen.getByText("Learn React")).toBeInTheDocument();
  expect(screen.getByText("Build a Todo App")).toBeInTheDocument();
});

  test("toggles a todo as completed when clicked", () => {
  render(<TodoList />);
  const todoItem = screen.getByText("Learn React");
  fireEvent.click(todoItem);
  expect(todoItem).toHaveStyle("text-decoration: line-through");
});

  test("deletes a todo when delete button clicked", () => {
    render(<TodoList />);

    const input = screen.getByPlaceholderText(/add a new task/i);
    const addButton = screen.getByRole("button", { name: /add/i });

    fireEvent.change(input, { target: { value: "Delete me" } });
    fireEvent.click(addButton);

    const deleteButton = screen.getByRole("button", { name: /delete/i });
    fireEvent.click(deleteButton);

    expect(screen.queryByText("Delete me")).not.toBeInTheDocument();
  });
});