export const InventorySchemas = {
  InventoryRequest: {
    type: "object",
    required: [
      
        "company_id",
      
        "branch_id",
      
        "product_id",
      
        "quantity"
      
    ],
    properties: {
      
      company_id: { type: "string" },
      
      branch_id: { type: "string" },
      
      product_id: { type: "string" },
      
      quantity: { type: "number" },
      
    }
  },

  Inventory: {
    type: "object",
    properties: {
      id: { type: "string" },
      
      company_id: { type: "string" },
      
      branch_id: { type: "string" },
      
      product_id: { type: "string" },
      
      quantity: { type: "number" },
      
      createdAt: { type: "string", format: "date-time" },
      updatedAt: { type: "string", format: "date-time" }
    }
  }
};
