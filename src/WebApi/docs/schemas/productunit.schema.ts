export const ProductUnitSchemas = {
  ProductUnitRequest: {
    type: "object",
    required: [
      
        "product_id",
      
        "unit_id",
      
        "factor",
      
        "is_base"
      
    ],
    properties: {
      
      product_id: { type: "string" },
      
      unit_id: { type: "string" },
      
      factor: { type: "number" },
      
      is_base: { type: "string" },
      
    }
  },

  ProductUnit: {
    type: "object",
    properties: {
      id: { type: "string" },
      
      product_id: { type: "string" },
      
      unit_id: { type: "string" },
      
      factor: { type: "number" },
      
      is_base: { type: "string" },
      
      createdAt: { type: "string", format: "date-time" },
      updatedAt: { type: "string", format: "date-time" }
    }
  }
};
