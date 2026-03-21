export const CompanySchemas = {
  CompanyRequest: {
    type: "object",
    required: [
      
        "name",
      
        "business_type",
      
        "tax_id",
      
        "email",
      
        "phone",
      
        "deleted"
      
    ],
    properties: {
      
      name: { type: "string" },
      
      business_type: { type: "string" },
      
      tax_id: { type: "string" },
      
      email: { type: "string" },
      
      phone: { type: "string" },
      
      deleted: { type: "string" },
      
    }
  },

  Company: {
    type: "object",
    properties: {
      id: { type: "string" },
      
      name: { type: "string" },
      
      business_type: { type: "string" },
      
      tax_id: { type: "string" },
      
      email: { type: "string" },
      
      phone: { type: "string" },
      
      deleted: { type: "string" },
      
      createdAt: { type: "string", format: "date-time" },
      updatedAt: { type: "string", format: "date-time" }
    }
  }
};
