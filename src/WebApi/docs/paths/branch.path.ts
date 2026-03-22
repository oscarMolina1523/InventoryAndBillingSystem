export const BranchPaths = {
  "/branch": {
    get: {
      summary: "Get all Branch",
      tags: ["Branch"],
      parameters: [
        {
          name: "page",
          in: "query",
          required: false,
          schema: {
            type: "integer",
            example: 1,
          },
          description: "Page number",
        },
        {
          name: "pageSize",
          in: "query",
          required: false,
          schema: {
            type: "integer",
            example: 100,
          },
          description: "Number of records per page",
        },
      ],
      responses: {
        200: {
          description: "List of Branch",
          content: {
            "application/json": {
              schema: {
                type: "array",
                items: { $ref: "#/components/schemas/Branch" },
              },
            },
          },
        },
      },
    },
    post: {
      summary: "Create Branch",
      tags: ["Branch"],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: { $ref: "#/components/schemas/BranchRequest" },
          },
        },
      },
      responses: {
        201: {
          description: "Branch created",
        },
      },
    },
  },

  "/branch/{id}": {
    get: {
      summary: "Get Branch by id",
      tags: ["Branch"],
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          schema: { type: "string" },
        },
      ],
      responses: {
        200: {
          description: "Branch found",
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/Branch" },
            },
          },
        },
        404: {
          description: "Not found",
        },
      },
    },

    put: {
      summary: "Update Branch",
      tags: ["Branch"],
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          schema: { type: "string" },
        },
      ],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: { $ref: "#/components/schemas/BranchRequest" },
          },
        },
      },
      responses: {
        200: {
          description: "Branch updated",
        },
        404: {
          description: "Not found",
        },
      },
    },

    delete: {
      summary: "Delete Branch",
      tags: ["Branch"],
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          schema: { type: "string" },
        },
      ],
      responses: {
        204: {
          description: "Branch deleted",
        },
        404: {
          description: "Not found",
        },
      },
    },
  },

  "/branch/company/{companyId}": {
    get: {
      summary: "Get Branch by company ID",
      tags: ["Branch"],
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
          description: "Branch found",
          content: {
            "application/json": {
              schema: {
                type: "array",
                items:{ $ref: "#/components/schemas/Branch" },
              },
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
