export const LogPaths = {
  "/log": {
    get: {
      summary: "Get all Log",
      tags: ["Log"],
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
          description: "List of Log",
          content: {
            "application/json": {
              schema: {
                type: "array",
                items: { $ref: "#/components/schemas/Log" }
              }
            }
          }
        }
      }
    },
    post: {
      summary: "Create Log",
      tags: ["Log"],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: { $ref: "#/components/schemas/LogRequest" }
          }
        }
      },
      responses: {
        201: {
          description: "Log created"
        }
      }
    }
  },

  "/log/{id}": {
    get: {
      summary: "Get Log by id",
      tags: ["Log"],
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
          description: "Log found",
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/Log" }
            }
          }
        },
        404: {
          description: "Not found"
        }
      }
    },

    put: {
      summary: "Update Log",
      tags: ["Log"],
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
            schema: { $ref: "#/components/schemas/LogRequest" }
          }
        }
      },
      responses: {
        200: {
          description: "Log updated"
        },
        404: {
          description: "Not found"
        }
      }
    },

    delete: {
      summary: "Delete Log",
      tags: ["Log"],
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
          description: "Log deleted"
        },
        404: {
          description: "Not found"
        }
      }
    }
  }
};
