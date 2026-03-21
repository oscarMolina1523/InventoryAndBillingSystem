export const SaleItemPaths = {
  "/saleitem": {
    get: {
      summary: "Get all SaleItem",
      tags: ["SaleItem"],
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
          description: "List of SaleItem",
          content: {
            "application/json": {
              schema: {
                type: "array",
                items: { $ref: "#/components/schemas/SaleItem" }
              }
            }
          }
        }
      }
    },
    post: {
      summary: "Create SaleItem",
      tags: ["SaleItem"],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: { $ref: "#/components/schemas/SaleItemRequest" }
          }
        }
      },
      responses: {
        201: {
          description: "SaleItem created"
        }
      }
    }
  },

  "/saleitem/{id}": {
    get: {
      summary: "Get SaleItem by id",
      tags: ["SaleItem"],
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
          description: "SaleItem found",
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/SaleItem" }
            }
          }
        },
        404: {
          description: "Not found"
        }
      }
    },

    put: {
      summary: "Update SaleItem",
      tags: ["SaleItem"],
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
            schema: { $ref: "#/components/schemas/SaleItemRequest" }
          }
        }
      },
      responses: {
        200: {
          description: "SaleItem updated"
        },
        404: {
          description: "Not found"
        }
      }
    },

    delete: {
      summary: "Delete SaleItem",
      tags: ["SaleItem"],
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
          description: "SaleItem deleted"
        },
        404: {
          description: "Not found"
        }
      }
    }
  }
};
