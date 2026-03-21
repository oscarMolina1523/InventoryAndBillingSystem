export const SaleItemSchemas = {
  SaleItemRequest: {
    type: "object",
    required: [
      
        "company_id",
      
        "sale_id",
      
        "product_id",
      
        "unit_id",
      
        "quantity",
      
        "price",
      
        "subtotal"
      
    ],
    properties: {
      
      company_id: { type: "string" },
      
      sale_id: { type: "string" },
      
      product_id: { type: "string" },
      
      unit_id: { type: "string" },
      
      quantity: { type: "number" },
      
      price: { type: "number" },
      
      subtotal: { type: "number" },
      
    }
  },

  SaleItem: {
    type: "object",
    properties: {
      id: { type: "string" },
      
      company_id: { type: "string" },
      
      sale_id: { type: "string" },
      
      product_id: { type: "string" },
      
      unit_id: { type: "string" },
      
      quantity: { type: "number" },
      
      price: { type: "number" },
      
      subtotal: { type: "number" },
      
      createdAt: { type: "string", format: "date-time" },
      updatedAt: { type: "string", format: "date-time" }
    }
  }
};
