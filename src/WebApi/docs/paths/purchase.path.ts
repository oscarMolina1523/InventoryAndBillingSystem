export const PurchasePaths = {
  "/purchase": {
    get: {
      summary: "Get all Purchase",
      tags: ["Purchase"],
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
          description: "List of Purchase",
          content: {
            "application/json": {
              schema: {
                type: "array",
                items: { $ref: "#/components/schemas/Purchase" }
              }
            }
          }
        }
      }
    },
    post: {
      summary: "Create Purchase",
      tags: ["Purchase"],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: { $ref: "#/components/schemas/PurchaseRequest" }
          }
        }
      },
      responses: {
        201: {
          description: "Purchase created"
        }
      }
    }
  },

  "/purchase/{id}": {
    get: {
      summary: "Get Purchase by id",
      tags: ["Purchase"],
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
          description: "Purchase found",
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/Purchase" }
            }
          }
        },
        404: {
          description: "Not found"
        }
      }
    },

    put: {
      summary: "Update Purchase",
      tags: ["Purchase"],
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
            schema: { $ref: "#/components/schemas/PurchaseRequest" }
          }
        }
      },
      responses: {
        200: {
          description: "Purchase updated"
        },
        404: {
          description: "Not found"
        }
      }
    },

    delete: {
      summary: "Delete Purchase",
      tags: ["Purchase"],
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
          description: "Purchase deleted"
        },
        404: {
          description: "Not found"
        }
      }
    }
  },

  "/purchase/company/{companyId}": {
    get: {
      summary: "Get Purchase by company ID",
      tags: ["Purchase"],
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
          description: "Purchases found",
          content: {
            "application/json": {
              schema:{
                type: "array",
                items: { $ref: "#/components/schemas/Purchase" },
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
