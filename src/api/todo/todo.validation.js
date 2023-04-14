export const createTodoSchema = {
  body: {
    type: "object",
    required: ["title", "description"],
    additionalProperties: false,
    properties: {
      title: { type: "string" },
      description: { type: "string" },
    },
  },
}

export const updateTodoSchema = {
  body: {
    type: "object",
    minProperties: 1,
    additionalProperties: false,
    properties: {
      title: { type: "string" },
      description: { type: "string" },
      completed: { type: "boolean" },
    },
  },
  path: {
    type: "object",
    required: ["todoId"],
    properties: {
      todoId: {
        type: "string",
        format: "mongo-id",
      },
    },
  },
}

export const getTodoSchema = {
  path: {
    type: "object",
    required: ["todoId"],
    properties: {
      todoId: {
        type: "string",
        format: "mongo-id",
      },
    },
  },
}

export const deleteTodoSchema = {
  path: {
    type: "object",
    required: ["todoId"],
    properties: {
      todoId: {
        type: "string",
        format: "mongo-id",
      },
    },
  },
}
