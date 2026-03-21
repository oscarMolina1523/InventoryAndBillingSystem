export const BranchSchemas = {
  BranchRequest: {
    type: "object",
    required: [
      
        "company_id",
      
        "name",
      
        "address",
      
        "phone",
      
        "deleted"
      
    ],
    properties: {
      
      company_id: { type: "string" },
      
      name: { type: "string" },
      
      address: { type: "string" },
      
      phone: { type: "string" },
      
      deleted: { type: "string" },
      
    }
  },

  Branch: {
    type: "object",
    properties: {
      id: { type: "string" },
      
      company_id: { type: "string" },
      
      name: { type: "string" },
      
      address: { type: "string" },
      
      phone: { type: "string" },
      
      deleted: { type: "string" },
      
      createdAt: { type: "string", format: "date-time" },
      updatedAt: { type: "string", format: "date-time" }
    }
  }
};
