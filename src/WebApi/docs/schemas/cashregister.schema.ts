export const CashRegisterSchemas = {
  CashRegisterRequest: {
    type: "object",
    required: [
      
        "company_id",
      
        "branch_id",
      
        "name",
      
        "is_active",
      
        "deleted"
      
    ],
    properties: {
      
      company_id: { type: "string" },
      
      branch_id: { type: "string" },
      
      name: { type: "string" },
      
      is_active: { type: "string" },
      
      deleted: { type: "string" },
      
    }
  },

  CashRegister: {
    type: "object",
    properties: {
      id: { type: "string" },
      
      company_id: { type: "string" },
      
      branch_id: { type: "string" },
      
      name: { type: "string" },
      
      is_active: { type: "string" },
      
      deleted: { type: "string" },
      
      createdAt: { type: "string", format: "date-time" },
      updatedAt: { type: "string", format: "date-time" }
    }
  }
};
