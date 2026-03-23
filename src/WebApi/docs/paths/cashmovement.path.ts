export const CashMovementPaths = {
  "/cashmovement": {
    get: {
      summary: "Get all CashMovement",
      tags: ["CashMovement"],
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
          description: "List of CashMovement",
          content: {
            "application/json": {
              schema: {
                type: "array",
                items: { $ref: "#/components/schemas/CashMovement" }
              }
            }
          }
        }
      }
    },
    post: {
      summary: "Create CashMovement",
      tags: ["CashMovement"],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: { $ref: "#/components/schemas/CashMovementRequest" }
          }
        }
      },
      responses: {
        201: {
          description: "CashMovement created"
        }
      }
    }
  },

  "/cashmovement/{id}": {
    get: {
      summary: "Get CashMovement by id",
      tags: ["CashMovement"],
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
          description: "CashMovement found",
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/CashMovement" }
            }
          }
        },
        404: {
          description: "Not found"
        }
      }
    },

    put: {
      summary: "Update CashMovement",
      tags: ["CashMovement"],
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
            schema: { $ref: "#/components/schemas/CashMovementRequest" }
          }
        }
      },
      responses: {
        200: {
          description: "CashMovement updated"
        },
        404: {
          description: "Not found"
        }
      }
    },

    delete: {
      summary: "Delete CashMovement",
      tags: ["CashMovement"],
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
          description: "CashMovement deleted"
        },
        404: {
          description: "Not found"
        }
      }
    }
  },

  "/cashmovement/company/{companyId}": {
    get: {
      summary: "Get CashMovement by company ID",
      tags: ["CashMovement"],
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
          description: "CashMovement found",
          content: {
            "application/json": {
              schema:{
                type: "array",
                items: { $ref: "#/components/schemas/CashMovement" },
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
