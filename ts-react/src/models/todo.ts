export type Todo = {
  id: string;
  text: string;
};

export type TodosContext = {
  items: Todo[];
  addTodo: (text: string) => void;
  deleteTodo: (id: string) => void;
};
