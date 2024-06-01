const swaggerUi = require("swagger-ui-express");
const config = require("./config");
const { SwaggerTheme, SwaggerThemeNameEnum } = require("swagger-themes");

const theme = new SwaggerTheme();
const inUrl = "Please input URL!";
const inQuery = "Please input Query!";

const options = {
  customSiteTitle: config.options.webName,
  customfavIcon: config.options.favicon,
  customJs: [
    "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui-bundle.min.js",
    "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui-standalone-preset.min.js",
  ],
  customCssUrl: [
    "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui.min.css",
    "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui-standalone-preset.min.css",
    "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui.css",
  ],
  swaggerOptions: {
    displayRequestDuration: true,
  },
};

const swaggerDocument = {
  openapi: "3.0.0",
  info: {
    title: config.options.name,
    description: config.options.description,
    version: "1.0.0",
    "x-logo": {
      url: config.options.favicon,
      altText: config.options.name,
    },
  },
  servers: [
    {
      url: config.host.BASE_URL,
    },
  ],
  tags: [
    {
      name: "AI",
      description:
        "API endpoints for artificial intelligence content from various platforms.",
    },
    {
      name: "Downloader",
      description:
        "API endpoints for downloading content from various platforms.",
    },
    {
      name: "Tools",
      description: "API endpoints for content tools from multiple platforms.",
    },
  ],
  paths: {
    "/api/ai/chatgpt": {
      get: {
        tags: ["AI"],
        summary: "Chat with GPT AI",
        parameters: [
          {
            in: "query",
            name: "query",
            schema: {
              type: "string",
            },
            required: true,
            description: inQuery,
          },
        ],
        responses: {
          200: {
            description: "Result successfully returned",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    status: {
                      type: "boolean",
                      example: true,
                    },
                    developer: {
                      type: "string",
                      example: config.options.developer,
                    },
                    result: {
                      type: "object",
                      properties: {
                        message: {
                          type: "string",
                          example: "Hello! How can I help you today?",
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
    "/api/ai/gptlogic": {
      get: {
        tags: ["AI"],
        summary: "Chat with GPT Logic",
        parameters: [
          {
            in: "query",
            name: "query",
            schema: {
              type: "string",
            },
            required: true,
            description: inQuery,
          },
          {
            in: "query",
            name: "prompt",
            schema: {
              type: "string",
            },
            required: true,
            description: inQuery,
          },
        ],
        responses: {
          200: {
            description: "Result successfully returned",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                },
              },
            },
          },
        },
      },
    },
    "/api/ai/virtualgirl": {
      get: {
        tags: ["AI"],
        summary: "Chat with Virtual Girlfriend",
        parameters: [
          {
            in: "query",
            name: "query",
            schema: {
              type: "string",
            },
            required: true,
            description: inQuery,
          },
        ],
        responses: {
          200: {
            description: "Result successfully returned",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                },
              },
            },
          },
        },
      },
    },
    "/api/ai/dystopia": {
      get: {
        tags: ["AI"],
        summary: "Dystopia AI",
        parameters: [
          {
            in: "query",
            name: "query",
            schema: {
              type: "string",
            },
            required: true,
            description: inQuery,
          },
        ],
        responses: {
          200: {
            description: "Result successfully returned",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                },
              },
            },
          },
        },
      },
    },
    "/api/ai/ersgan": {
      get: {
        tags: ["AI"],
        summary: "Ersgan filter on the image",
        parameters: [
          {
            in: "query",
            name: "url",
            schema: {
              type: "string",
            },
            required: true,
            description: inUrl,
          },
        ],
        responses: {
          200: {
            description: "Result successfully returned",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                },
              },
            },
          },
        },
      },
    },
    "/api/ai/luminai": {
      post: {
        tags: ["AI"],
        summary: "Chat AI created by siputzx",
        parameters: [
          {
            in: "query",
            name: "query",
            schema: {
              type: "string",
            },
            required: true,
            description: inQuery,
          },
          {
            in: "query",
            name: "username",
            schema: {
              type: "string",
            },
            required: true,
            description: inQuery,
          },
        ],
        responses: {
          200: {
            description: "Result successfully returned",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                },
              },
            },
          },
        },
      },
    },
    "/api/downloader/tiktok": {
      get: {
        tags: ["Downloader"],
        summary: "Download TikTok video",
        parameters: [
          {
            in: "query",
            name: "url",
            schema: {
              type: "string",
            },
            required: true,
            description: inUrl,
          },
        ],
        responses: {
          200: {
            description: "Result successfully returned",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                },
              },
            },
          },
        },
      },
    },
    "/api/downloader/igdl": {
      get: {
        tags: ["Downloader"],
        summary: "Download Instagram video",
        parameters: [
          {
            in: "query",
            name: "url",
            schema: {
              type: "string",
            },
            required: true,
            description: inUrl,
          },
        ],
        responses: {
          200: {
            description: "Result successfully returned",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                },
              },
            },
          },
        },
      },
    },
    "/api/downloader/spotify": {
      get: {
        tags: ["Downloader"],
        summary: "Download Spotify music",
        parameters: [
          {
            in: "query",
            name: "url",
            schema: {
              type: "string",
            },
            required: true,
            description: inUrl,
          },
        ],
        responses: {
          200: {
            description: "Result successfully returned",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                },
              },
            },
          },
        },
      },
    },
    "/api/tools/remini": {
      get: {
        tags: ["Tools"],
        summary: "HD enhancer using Remini",
        parameters: [
          {
            in: "query",
            name: "url",
            schema: {
              type: "string",
            },
            required: true,
            description: inUrl,
          },
        ],
        responses: {
          200: {
            description: "Result successfully returned",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                },
              },
            },
          },
        },
      },
    },
  },
  "x-request-time": new Date().toISOString(),
};

module.exports = { swaggerDocument, options };
