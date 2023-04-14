export const buildTodoResponseDTO = (todo) => ({
  id: todo._id,
  user: todo.user,
  title: todo.title,
  description: todo.description,
  completed: todo.completed,
  createdAt: todo.createdAt,
  updatedAt: todo.updatedAt,
})

