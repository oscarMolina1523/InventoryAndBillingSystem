export const UnitSchemas = {
  UnitRequest: {
    type: "object",
    required: [
      
        "name",
      
        "symbol",
      
        "deleted"
      
    ],
    properties: {
      
      name: { type: "string" },
      
      symbol: { type: "string" },
      
      deleted: { type: "string" },
      
    }
  },

  Unit: {
    type: "object",
    properties: {
      id: { type: "string" },
      
      name: { type: "string" },
      
      symbol: { type: "string" },
      
      deleted: { type: "string" },
      
      createdAt: { type: "string", format: "date-time" },
      updatedAt: { type: "string", format: "date-time" }
    }
  }
};
