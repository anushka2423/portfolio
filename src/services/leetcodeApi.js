import {
  LEETCODE_GRAPHQL_URL,
  LEETCODE_USERNAME,
  RECENT_PROBLEMS_LIMIT,
  RECENT_SUBMISSIONS_QUERY,
  transformProgressResponse,
  transformRecentSubmissionsResponse,
  USER_PROGRESS_QUERY,
} from "../data/leetcode";

const graphqlRequest = async (query, variables, operationName) => {
  const response = await fetch(LEETCODE_GRAPHQL_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "x-operation-name": operationName,
    },
    body: JSON.stringify({
      query,
      variables,
      operationName,
    }),
  });

  const payload = await response.json().catch(() => null);

  if (!response.ok) {
    const message =
      payload?.errors?.[0]?.message ??
      payload?.error ??
      `LeetCode GraphQL request failed (${response.status}).`;
    throw new Error(message);
  }

  if (!payload) {
    throw new Error("LeetCode GraphQL returned an invalid response.");
  }

  if (payload.errors?.length) {
    throw new Error(
      payload.errors[0]?.message ?? "LeetCode GraphQL returned an error."
    );
  }

  return payload.data;
};

export const fetchLeetCodeStats = async (
  username = LEETCODE_USERNAME
) => {
  const data = await graphqlRequest(
    USER_PROGRESS_QUERY,
    { userSlug: username },
    "userProfileUserQuestionProgressV2"
  );

  return transformProgressResponse(data);
};

export const fetchRecentProblems = async (
  username = LEETCODE_USERNAME,
  limit = RECENT_PROBLEMS_LIMIT
) => {
  const data = await graphqlRequest(
    RECENT_SUBMISSIONS_QUERY,
    { username, limit },
    "recentAcSubmissions"
  );

  return transformRecentSubmissionsResponse(data);
};

export const fetchLeetCodeJourney = async (username = LEETCODE_USERNAME) => {
  const [stats, recentProblems] = await Promise.all([
    fetchLeetCodeStats(username),
    fetchRecentProblems(username, RECENT_PROBLEMS_LIMIT),
  ]);

  return { stats, recentProblems };
};
