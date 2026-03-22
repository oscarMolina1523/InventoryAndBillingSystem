export const CashRegisterPaths = {
  "/cashregister": {
    get: {
      summary: "Get all CashRegister",
      tags: ["CashRegister"],
      parameters: [
        {
          name: "page",
          in: "query",
          required: false,
          schema: {
            type: "integer",
            example: 1
          },
          description: "Page number"
        },
        {
          name: "pageSize",
          in: "query",
          required: false,
          schema: {
            type: "integer",
            example: 100
          },
          description: "Number of records per page"
        }
      ],
      responses: {
        200: {
          description: "List of CashRegister",
          content: {
            "application/json": {
              schema: {
                type: "array",
                items: { $ref: "#/components/schemas/CashRegister" }
              }
            }
          }
        }
      }
    },
    post: {
      summary: "Create CashRegister",
      tags: ["CashRegister"],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: { $ref: "#/components/schemas/CashRegisterRequest" }
          }
        }
      },
      responses: {
        201: {
          description: "CashRegister created"
        }
      }
    }
  },

  "/cashregister/{id}": {
    get: {
      summary: "Get CashRegister by id",
      tags: ["CashRegister"],
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          schema: { type: "string" }
        }
      ],
      responses: {
        200: {
          description: "CashRegister found",
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/CashRegister" }
            }
          }
        },
        404: {
          description: "Not found"
        }
      }
    },

    put: {
      summary: "Update CashRegister",
      tags: ["CashRegister"],
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          schema: { type: "string" }
        }
      ],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: { $ref: "#/components/schemas/CashRegisterRequest" }
          }
        }
      },
      responses: {
        200: {
          description: "CashRegister updated"
        },
        404: {
          description: "Not found"
        }
      }
    },

    delete: {
      summary: "Delete CashRegister",
      tags: ["CashRegister"],
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          schema: { type: "string" }
        }
      ],
      responses: {
        204: {
          description: "CashRegister deleted"
        },
        404: {
          description: "Not found"
        }
      }
    }
  },

  "/cashregister/company/{companyId}": {
    get: {
      summary: "Get CashRegister by company ID",
      tags: ["CashRegister"],
      parameters: [
        {
          name: "companyId",
          in: "path",
          required: true,
          schema: { type: "string" },
        },
      ],
      responses: {
        200: {
          description: "CashRegister found",
          content: {
            "application/json": {
              schema:{
                type: "array",
                items: { $ref: "#/components/schemas/CashRegister" },
              }
            },
          },
        },
        404: {
          description: "Not found",
        },
      },
    },
  },
};
