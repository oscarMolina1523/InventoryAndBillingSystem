export const SuscriptionSchemas = {
  SuscriptionRequest: {
    type: "object",
    required: [
      
        "company_id",
      
        "plan_id",
      
        "status",
      
        "current_period_start",
      
        "current_period_end",
      
        "deleted"
      
    ],
    properties: {
      
      company_id: { type: "string" },
      
      plan_id: { type: "string" },
      
      status: { type: "string" },
      
      current_period_start: { type: "string" },
      
      current_period_end: { type: "string" },
      
      deleted: { type: "string" },
      
    }
  },

  Suscription: {
    type: "object",
    properties: {
      id: { type: "string" },
      
      company_id: { type: "string" },
      
      plan_id: { type: "string" },
      
      status: { type: "string" },
      
      current_period_start: { type: "string" },
      
      current_period_end: { type: "string" },
      
      deleted: { type: "string" },
      
      createdAt: { type: "string", format: "date-time" },
      updatedAt: { type: "string", format: "date-time" }
    }
  }
};
