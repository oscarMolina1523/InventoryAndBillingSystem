export const PurchaseItemSchemas = {
  PurchaseItemRequest: {
    type: "object",
    required: [
      
        "company_id",
      
        "purchase_id",
      
        "product_id",
      
        "unit_id",
      
        "quantity",
      
        "cost_price",
      
        "subtotal"
      
    ],
    properties: {
      
      company_id: { type: "string" },
      
      purchase_id: { type: "string" },
      
      product_id: { type: "string" },
      
      unit_id: { type: "string" },
      
      quantity: { type: "number" },
      
      cost_price: { type: "number" },
      
      subtotal: { type: "number" },
      
    }
  },

  PurchaseItem: {
    type: "object",
    properties: {
      id: { type: "string" },
      
      company_id: { type: "string" },
      
      purchase_id: { type: "string" },
      
      product_id: { type: "string" },
      
      unit_id: { type: "string" },
      
      quantity: { type: "number" },
      
      cost_price: { type: "number" },
      
      subtotal: { type: "number" },
      
      createdAt: { type: "string", format: "date-time" },
      updatedAt: { type: "string", format: "date-time" }
    }
  }
};
