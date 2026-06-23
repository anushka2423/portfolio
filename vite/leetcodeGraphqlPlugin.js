import { forwardLeetcodeGraphql } from "../lib/leetcodeGraphqlProxy.js";

const readRequestBody = (req) =>
  new Promise((resolve, reject) => {
    const chunks = [];
    req.on("data", (chunk) => chunks.push(chunk));
    req.on("end", () => resolve(Buffer.concat(chunks).toString()));
    req.on("error", reject);
  });

export const leetcodeGraphqlPlugin = () => ({
  name: "leetcode-graphql",
  configureServer(server) {
    server.middlewares.use("/api/leetcode", async (req, res) => {
      if (req.method === "OPTIONS") {
        res.statusCode = 204;
        res.end();
        return;
      }

      if (req.method !== "POST") {
        res.statusCode = 405;
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify({ error: "Method not allowed" }));
        return;
      }

      try {
        const body = await readRequestBody(req);
        const { status, text } = await forwardLeetcodeGraphql(body, {
          allowInsecureTls: true,
        });

        res.statusCode = status;
        res.setHeader("Content-Type", "application/json");
        res.end(text);
      } catch (error) {
        res.statusCode = 500;
        res.setHeader("Content-Type", "application/json");
        res.end(
          JSON.stringify({
            errors: [
              {
                message: error.message ?? "GraphQL proxy failed.",
              },
            ],
          })
        );
      }
    });
  },
});
