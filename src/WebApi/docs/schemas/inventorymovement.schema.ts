export const InventoryMovementSchemas = {
  InventoryMovementRequest: {
    type: "object",
    required: [
      
        "company_id",
      
        "branch_id",
      
        "product_id",
      
        "type",
      
        "quantity",
      
        "reference_type",
      
        "reference_id",
      
        "description"
      
    ],
    properties: {
      
      company_id: { type: "string" },
      
      branch_id: { type: "string" },
      
      product_id: { type: "string" },
      
      type: { type: "string" },
      
      quantity: { type: "number" },
      
      reference_type: { type: "string" },
      
      reference_id: { type: "string" },
      
      description: { type: "string" },
      
    }
  },

  InventoryMovement: {
    type: "object",
    properties: {
      id: { type: "string" },
      
      company_id: { type: "string" },
      
      branch_id: { type: "string" },
      
      product_id: { type: "string" },
      
      type: { type: "string" },
      
      quantity: { type: "number" },
      
      reference_type: { type: "string" },
      
      reference_id: { type: "string" },
      
      description: { type: "string" },
      
      createdAt: { type: "string", format: "date-time" },
      updatedAt: { type: "string", format: "date-time" }
    }
  }
};
