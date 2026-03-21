export const PlanPaths = {
  "/plan": {
    get: {
      summary: "Get all Plan",
      tags: ["Plan"],
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
          description: "List of Plan",
          content: {
            "application/json": {
              schema: {
                type: "array",
                items: { $ref: "#/components/schemas/Plan" }
              }
            }
          }
        }
      }
    },
    post: {
      summary: "Create Plan",
      tags: ["Plan"],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: { $ref: "#/components/schemas/PlanRequest" }
          }
        }
      },
      responses: {
        201: {
          description: "Plan created"
        }
      }
    }
  },

  "/plan/{id}": {
    get: {
      summary: "Get Plan by id",
      tags: ["Plan"],
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
          description: "Plan found",
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/Plan" }
            }
          }
        },
        404: {
          description: "Not found"
        }
      }
    },

    put: {
      summary: "Update Plan",
      tags: ["Plan"],
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
            schema: { $ref: "#/components/schemas/PlanRequest" }
          }
        }
      },
      responses: {
        200: {
          description: "Plan updated"
        },
        404: {
          description: "Not found"
        }
      }
    },

    delete: {
      summary: "Delete Plan",
      tags: ["Plan"],
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
          description: "Plan deleted"
        },
        404: {
          description: "Not found"
        }
      }
    }
  }
};
