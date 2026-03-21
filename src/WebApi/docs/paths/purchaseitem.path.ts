export const PurchaseItemPaths = {
  "/purchaseitem": {
    get: {
      summary: "Get all PurchaseItem",
      tags: ["PurchaseItem"],
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
          description: "List of PurchaseItem",
          content: {
            "application/json": {
              schema: {
                type: "array",
                items: { $ref: "#/components/schemas/PurchaseItem" }
              }
            }
          }
        }
      }
    },
    post: {
      summary: "Create PurchaseItem",
      tags: ["PurchaseItem"],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: { $ref: "#/components/schemas/PurchaseItemRequest" }
          }
        }
      },
      responses: {
        201: {
          description: "PurchaseItem created"
        }
      }
    }
  },

  "/purchaseitem/{id}": {
    get: {
      summary: "Get PurchaseItem by id",
      tags: ["PurchaseItem"],
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
          description: "PurchaseItem found",
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/PurchaseItem" }
            }
          }
        },
        404: {
          description: "Not found"
        }
      }
    },

    put: {
      summary: "Update PurchaseItem",
      tags: ["PurchaseItem"],
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
            schema: { $ref: "#/components/schemas/PurchaseItemRequest" }
          }
        }
      },
      responses: {
        200: {
          description: "PurchaseItem updated"
        },
        404: {
          description: "Not found"
        }
      }
    },

    delete: {
      summary: "Delete PurchaseItem",
      tags: ["PurchaseItem"],
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
          description: "PurchaseItem deleted"
        },
        404: {
          description: "Not found"
        }
      }
    }
  }
};
