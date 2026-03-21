export const CashMovementSchemas = {
  CashMovementRequest: {
    type: "object",
    required: [
      
        "company_id",
      
        "cash_register_id",
      
        "type",
      
        "amount",
      
        "description",
      
        "reference_id",
      
        "payment_method"
      
    ],
    properties: {
      
      company_id: { type: "string" },
      
      cash_register_id: { type: "string" },
      
      type: { type: "string" },
      
      amount: { type: "number" },
      
      description: { type: "string" },
      
      reference_id: { type: "string" },
      
      payment_method: { type: "string" },
      
    }
  },

  CashMovement: {
    type: "object",
    properties: {
      id: { type: "string" },
      
      company_id: { type: "string" },
      
      cash_register_id: { type: "string" },
      
      type: { type: "string" },
      
      amount: { type: "number" },
      
      description: { type: "string" },
      
      reference_id: { type: "string" },
      
      payment_method: { type: "string" },
      
      createdAt: { type: "string", format: "date-time" },
      updatedAt: { type: "string", format: "date-time" }
    }
  }
};
