export const ProductUnitPaths = {
  "/productunit": {
    get: {
      summary: "Get all ProductUnit",
      tags: ["ProductUnit"],
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
          description: "List of ProductUnit",
          content: {
            "application/json": {
              schema: {
                type: "array",
                items: { $ref: "#/components/schemas/ProductUnit" }
              }
            }
          }
        }
      }
    },
    post: {
      summary: "Create ProductUnit",
      tags: ["ProductUnit"],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: { $ref: "#/components/schemas/ProductUnitRequest" }
          }
        }
      },
      responses: {
        201: {
          description: "ProductUnit created"
        }
      }
    }
  },

  "/productunit/{id}": {
    get: {
      summary: "Get ProductUnit by id",
      tags: ["ProductUnit"],
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
          description: "ProductUnit found",
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/ProductUnit" }
            }
          }
        },
        404: {
          description: "Not found"
        }
      }
    },

    put: {
      summary: "Update ProductUnit",
      tags: ["ProductUnit"],
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
            schema: { $ref: "#/components/schemas/ProductUnitRequest" }
          }
        }
      },
      responses: {
        200: {
          description: "ProductUnit updated"
        },
        404: {
          description: "Not found"
        }
      }
    },

    delete: {
      summary: "Delete ProductUnit",
      tags: ["ProductUnit"],
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
          description: "ProductUnit deleted"
        },
        404: {
          description: "Not found"
        }
      }
    }
  }
};
