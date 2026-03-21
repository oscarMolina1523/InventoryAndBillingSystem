export const CategorySchemas = {
  CategoryRequest: {
    type: "object",
    required: [
      
        "company_id",
      
        "name",
      
        "deleted"
      
    ],
    properties: {
      
      company_id: { type: "string" },
      
      name: { type: "string" },
      
      deleted: { type: "string" },
      
    }
  },

  Category: {
    type: "object",
    properties: {
      id: { type: "string" },
      
      company_id: { type: "string" },
      
      name: { type: "string" },
      
      deleted: { type: "string" },
      
      createdAt: { type: "string", format: "date-time" },
      updatedAt: { type: "string", format: "date-time" }
    }
  }
};
