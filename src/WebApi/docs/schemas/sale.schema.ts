export const SaleSchemas = {
  SaleRequest: {
    type: "object",
    required: [
      
        "company_id",
      
        "branch_id",
      
        "user_id",
      
        "customer_name",
      
        "total",
      
        "status"
      
    ],
    properties: {
      
      company_id: { type: "string" },
      
      branch_id: { type: "string" },
      
      user_id: { type: "string" },
      
      customer_name: { type: "string" },
      
      total: { type: "number" },
      
      status: { type: "string" },
      
    }
  },

  Sale: {
    type: "object",
    properties: {
      id: { type: "string" },
      
      company_id: { type: "string" },
      
      branch_id: { type: "string" },
      
      user_id: { type: "string" },
      
      customer_name: { type: "string" },
      
      total: { type: "number" },
      
      status: { type: "string" },
      
      createdAt: { type: "string", format: "date-time" },
      updatedAt: { type: "string", format: "date-time" }
    }
  }
};
