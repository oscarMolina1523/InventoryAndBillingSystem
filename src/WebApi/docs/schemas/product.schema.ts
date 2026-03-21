export const ProductSchemas = {
  ProductRequest: {
    type: "object",
    required: [
      
        "company_id",
      
        "name",
      
        "barcode",
      
        "category_id",
      
        "unit_id",
      
        "cost_price",
      
        "sale_price",
      
        "track_inventory",
      
        "deleted"
      
    ],
    properties: {
      
      company_id: { type: "string" },
      
      name: { type: "string" },
      
      barcode: { type: "string" },
      
      category_id: { type: "string" },
      
      unit_id: { type: "string" },
      
      cost_price: { type: "number" },
      
      sale_price: { type: "number" },
      
      track_inventory: { type: "string" },
      
      deleted: { type: "string" },
      
    }
  },

  Product: {
    type: "object",
    properties: {
      id: { type: "string" },
      
      company_id: { type: "string" },
      
      name: { type: "string" },
      
      barcode: { type: "string" },
      
      category_id: { type: "string" },
      
      unit_id: { type: "string" },
      
      cost_price: { type: "number" },
      
      sale_price: { type: "number" },
      
      track_inventory: { type: "string" },
      
      deleted: { type: "string" },
      
      createdAt: { type: "string", format: "date-time" },
      updatedAt: { type: "string", format: "date-time" }
    }
  }
};
