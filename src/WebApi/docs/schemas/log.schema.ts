export const LogSchemas = {
  LogRequest: {
    type: "object",
    required: [
      
        "entity",
      
        "entity_id",
      
        "action",
      
        "description",
      
        "performed_by",
      
        "performed_at"
      
    ],
    properties: {
      
      entity: { type: "string" },
      
      entity_id: { type: "string" },
      
      action: { type: "string" },
      
      description: { type: "string" },
      
      performed_by: { type: "string" },
      
      performed_at: { type: "string" },
      
    }
  },

  Log: {
    type: "object",
    properties: {
      id: { type: "string" },
      
      entity: { type: "string" },
      
      entity_id: { type: "string" },
      
      action: { type: "string" },
      
      description: { type: "string" },
      
      performed_by: { type: "string" },
      
      performed_at: { type: "string" },
      
      createdAt: { type: "string", format: "date-time" },
      updatedAt: { type: "string", format: "date-time" }
    }
  }
};
