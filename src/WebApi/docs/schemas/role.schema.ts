export const RoleSchemas = {
  RoleRequest: {
    type: "object",
    required: [
      
        "company_id",
      
        "name",
      
        "description",
      
        "deleted"
      
    ],
    properties: {
      
      company_id: { type: "string" },
      
      name: { type: "string" },
      
      description: { type: "string" },
      
      deleted: { type: "string" },
      
    }
  },

  Role: {
    type: "object",
    properties: {
      id: { type: "string" },
      
      company_id: { type: "string" },
      
      name: { type: "string" },
      
      description: { type: "string" },
      
      deleted: { type: "string" },
      
      createdAt: { type: "string", format: "date-time" },
      updatedAt: { type: "string", format: "date-time" }
    }
  }
};
