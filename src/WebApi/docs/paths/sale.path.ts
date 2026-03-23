export const SalePaths = {
  "/sale": {
    get: {
      summary: "Get all Sale",
      tags: ["Sale"],
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
          description: "List of Sale",
          content: {
            "application/json": {
              schema: {
                type: "array",
                items: { $ref: "#/components/schemas/Sale" }
              }
            }
          }
        }
      }
    },
    post: {
      summary: "Create Sale",
      tags: ["Sale"],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: { $ref: "#/components/schemas/SaleRequest" }
          }
        }
      },
      responses: {
        201: {
          description: "Sale created"
        }
      }
    }
  },

  "/sale/{id}": {
    get: {
      summary: "Get Sale by id",
      tags: ["Sale"],
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
          description: "Sale found",
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/Sale" }
            }
          }
        },
        404: {
          description: "Not found"
        }
      }
    },

    put: {
      summary: "Update Sale",
      tags: ["Sale"],
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
            schema: { $ref: "#/components/schemas/SaleRequest" }
          }
        }
      },
      responses: {
        200: {
          description: "Sale updated"
        },
        404: {
          description: "Not found"
        }
      }
    },

    delete: {
      summary: "Delete Sale",
      tags: ["Sale"],
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
          description: "Sale deleted"
        },
        404: {
          description: "Not found"
        }
      }
    }
  },

  "/sale/company/{companyId}": {
    get: {
      summary: "Get Sales by company ID",
      tags: ["Sale"],
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
          description: "Sales found",
          content: {
            "application/json": {
              schema:{
                type: "array",
                items: { $ref: "#/components/schemas/Sale" },
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
