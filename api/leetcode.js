import { forwardLeetcodeGraphql } from "../lib/leetcodeGraphqlProxy.js";

export default async function handler(req, res) {
  if (req.method === "OPTIONS") {
    return res.status(204).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const body =
      typeof req.body === "string" ? req.body : JSON.stringify(req.body);

    const { status, text } = await forwardLeetcodeGraphql(body);

    res.status(status).setHeader("Content-Type", "application/json");
    return res.send(text);
  } catch (error) {
    return res.status(500).json({
      errors: [{ message: error.message ?? "GraphQL proxy failed." }],
    });
  }
}
