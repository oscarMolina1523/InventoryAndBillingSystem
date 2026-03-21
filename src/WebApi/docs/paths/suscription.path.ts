export const SuscriptionPaths = {
  "/suscription": {
    get: {
      summary: "Get all Suscription",
      tags: ["Suscription"],
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
          description: "List of Suscription",
          content: {
            "application/json": {
              schema: {
                type: "array",
                items: { $ref: "#/components/schemas/Suscription" }
              }
            }
          }
        }
      }
    },
    post: {
      summary: "Create Suscription",
      tags: ["Suscription"],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: { $ref: "#/components/schemas/SuscriptionRequest" }
          }
        }
      },
      responses: {
        201: {
          description: "Suscription created"
        }
      }
    }
  },

  "/suscription/{id}": {
    get: {
      summary: "Get Suscription by id",
      tags: ["Suscription"],
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
          description: "Suscription found",
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/Suscription" }
            }
          }
        },
        404: {
          description: "Not found"
        }
      }
    },

    put: {
      summary: "Update Suscription",
      tags: ["Suscription"],
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
            schema: { $ref: "#/components/schemas/SuscriptionRequest" }
          }
        }
      },
      responses: {
        200: {
          description: "Suscription updated"
        },
        404: {
          description: "Not found"
        }
      }
    },

    delete: {
      summary: "Delete Suscription",
      tags: ["Suscription"],
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
          description: "Suscription deleted"
        },
        404: {
          description: "Not found"
        }
      }
    }
  }
};
