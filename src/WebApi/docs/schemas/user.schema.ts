export const UserSchemas = {
  UserRequest: {
    type: "object",
    required: [
      
        "company_id",
      
        "name",
      
        "email",
      
        "password",
      
        "role_id",
      
        "is_active",
      
        "deleted"
      
    ],
    properties: {
      
      company_id: { type: "string" },
      
      name: { type: "string" },
      
      email: { type: "string" },
      
      password: { type: "string" },
      
      role_id: { type: "string" },
      
      is_active: { type: "string" },
      
      deleted: { type: "string" },
      
    }
  },

  User: {
    type: "object",
    properties: {
      id: { type: "string" },
      
      company_id: { type: "string" },
      
      name: { type: "string" },
      
      email: { type: "string" },
      
      password: { type: "string" },
      
      role_id: { type: "string" },
      
      is_active: { type: "string" },
      
      deleted: { type: "string" },
      
      createdAt: { type: "string", format: "date-time" },
      updatedAt: { type: "string", format: "date-time" }
    }
  }
};
