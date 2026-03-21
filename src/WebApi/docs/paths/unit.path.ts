export const UnitPaths = {
  "/unit": {
    get: {
      summary: "Get all Unit",
      tags: ["Unit"],
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
          description: "List of Unit",
          content: {
            "application/json": {
              schema: {
                type: "array",
                items: { $ref: "#/components/schemas/Unit" }
              }
            }
          }
        }
      }
    },
    post: {
      summary: "Create Unit",
      tags: ["Unit"],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: { $ref: "#/components/schemas/UnitRequest" }
          }
        }
      },
      responses: {
        201: {
          description: "Unit created"
        }
      }
    }
  },

  "/unit/{id}": {
    get: {
      summary: "Get Unit by id",
      tags: ["Unit"],
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
          description: "Unit found",
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/Unit" }
            }
          }
        },
        404: {
          description: "Not found"
        }
      }
    },

    put: {
      summary: "Update Unit",
      tags: ["Unit"],
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
            schema: { $ref: "#/components/schemas/UnitRequest" }
          }
        }
      },
      responses: {
        200: {
          description: "Unit updated"
        },
        404: {
          description: "Not found"
        }
      }
    },

    delete: {
      summary: "Delete Unit",
      tags: ["Unit"],
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
          description: "Unit deleted"
        },
        404: {
          description: "Not found"
        }
      }
    }
  }
};
