
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TodoList from   
 './TodoList';

describe('TodoList', () => {
  it('renders initial   
 state', () => {
    render(<TodoList />);
    const todoList = screen.getByTestId('todo-list');
    expect(todoList).toBeInTheDocument();
    expect(todoList).toHaveTextContent('No todos yet');
  });

  it('adds a new todo', () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText('Add a todo');
    const addButton = screen.getByText('Add');

    userEvent.type(input, 'Test Todo');
    userEvent.click(addButton);

    const todoItem = screen.getByText('Test Todo');
    expect(todoItem).toBeInTheDocument();
  });

  // ... other test cases for removing, completing, and clearing todos
});
