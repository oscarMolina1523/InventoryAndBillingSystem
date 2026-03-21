export const PurchaseSchemas = {
  PurchaseRequest: {
    type: "object",
    required: [
      
        "company_id",
      
        "branch_id",
      
        "supplier",
      
        "total",
      
        "status",
      
        "deleted"
      
    ],
    properties: {
      
      company_id: { type: "string" },
      
      branch_id: { type: "string" },
      
      supplier: { type: "string" },
      
      total: { type: "number" },
      
      status: { type: "string" },
      
      deleted: { type: "string" },
      
    }
  },

  Purchase: {
    type: "object",
    properties: {
      id: { type: "string" },
      
      company_id: { type: "string" },
      
      branch_id: { type: "string" },
      
      supplier: { type: "string" },
      
      total: { type: "number" },
      
      status: { type: "string" },
      
      deleted: { type: "string" },
      
      createdAt: { type: "string", format: "date-time" },
      updatedAt: { type: "string", format: "date-time" }
    }
  }
};
