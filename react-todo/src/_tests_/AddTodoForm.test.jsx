// src/__tests__/AddTodoForm.test.jsx
import { render, screen, fireEvent } from "@testing-library/react";
import AddTodoForm from "../components/AddTodoForm";

describe("AddTodoForm", () => {
  test("renders input and add button", () => {
    render(<AddTodoForm addTodo={jest.fn()} />);
    expect(screen.getByPlaceholderText(/add a new task/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /add/i })).toBeInTheDocument();
  });

  test("calls addTodo with input value when submitted", () => {
    const mockAddTodo = jest.fn();
    render(<AddTodoForm addTodo={mockAddTodo} />);

    const input = screen.getByPlaceholderText(/add a new task/i);
    const addButton = screen.getByRole("button", { name: /add/i });

    fireEvent.change(input, { target: { value: "Learn Testing" } });
    fireEvent.click(addButton);

    expect(mockAddTodo).toHaveBeenCalledWith("Learn Testing");
    expect(input.value).toBe("");
  });

  test("does not call addTodo when input is empty", () => {
    const mockAddTodo = jest.fn();
    render(<AddTodoForm addTodo={mockAddTodo} />);

    const addButton = screen.getByRole("button", { name: /add/i });
    fireEvent.click(addButton);

    expect(mockAddTodo).not.toHaveBeenCalled();
  });
});
