export const PlanSchemas = {
  PlanRequest: {
    type: "object",
    required: [
      
        "name",
      
        "price",
      
        "deleted"
      
    ],
    properties: {
      
      name: { type: "string" },
      
      price: { type: "number" },
      
      deleted: { type: "string" },
      
    }
  },

  Plan: {
    type: "object",
    properties: {
      id: { type: "string" },
      
      name: { type: "string" },
      
      price: { type: "number" },
      
      deleted: { type: "string" },
      
      createdAt: { type: "string", format: "date-time" },
      updatedAt: { type: "string", format: "date-time" }
    }
  }
};
