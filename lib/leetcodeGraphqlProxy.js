import https from "node:https";

const LEETCODE_GRAPHQL_ENDPOINT = "https://leetcode.com/graphql/";

const GRAPHQL_HEADERS = {
  "Content-Type": "application/json",
  Accept: "*/*",
  Origin: "https://leetcode.com",
  Referer: "https://leetcode.com/",
  "User-Agent":
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.0.0 Safari/537.36",
};

const httpsForward = (payload, rejectUnauthorized) =>
  new Promise((resolve, reject) => {
    const request = https.request(
      {
        hostname: "leetcode.com",
        path: "/graphql/",
        method: "POST",
        headers: {
          ...GRAPHQL_HEADERS,
          "Content-Length": Buffer.byteLength(payload),
        },
        rejectUnauthorized,
      },
      (response) => {
        let data = "";
        response.on("data", (chunk) => {
          data += chunk;
        });
        response.on("end", () => {
          resolve({ status: response.statusCode ?? 500, text: data });
        });
      }
    );

    request.on("error", reject);
    request.write(payload);
    request.end();
  });

const fetchForward = async (payload) => {
  const response = await fetch(LEETCODE_GRAPHQL_ENDPOINT, {
    method: "POST",
    headers: GRAPHQL_HEADERS,
    body: payload,
  });

  return {
    status: response.status,
    text: await response.text(),
  };
};

export const forwardLeetcodeGraphql = async (
  body,
  { allowInsecureTls = false } = {}
) => {
  const payload = typeof body === "string" ? body : JSON.stringify(body);
  const attempts = [() => fetchForward(payload), () => httpsForward(payload, true)];

  if (allowInsecureTls) {
    attempts.push(() => httpsForward(payload, false));
  }

  let lastError;

  for (const attempt of attempts) {
    try {
      return await attempt();
    } catch (error) {
      lastError = error;
    }
  }

  throw lastError ?? new Error("Failed to reach LeetCode GraphQL.");
};
