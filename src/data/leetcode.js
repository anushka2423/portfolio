export const LEETCODE_USERNAME = "anushka2423";

export const RECENT_PROBLEMS_LIMIT = 5;

// Browser calls same-origin /api/leetcode (avoids CORS).
// Dev (Vite plugin) + Vercel serverless proxy forward to LeetCode GraphQL.
export const LEETCODE_GRAPHQL_URL = "/api/leetcode";

export const LEETCODE_GRAPHQL_ENDPOINT =
  "https://leetcode.com/graphql/";

export const USER_PROGRESS_QUERY = `
  query userProfileUserQuestionProgressV2($userSlug: String!) {
    userProfileUserQuestionProgressV2(userSlug: $userSlug) {
      numAcceptedQuestions {
        count
        difficulty
      }
      numFailedQuestions {
        count
        difficulty
      }
      numUntouchedQuestions {
        count
        difficulty
      }
      userSessionBeatsPercentage {
        difficulty
        percentage
      }
      totalQuestionBeatsPercentage
    }
  }
`;

export const RECENT_SUBMISSIONS_QUERY = `
  query recentAcSubmissions($username: String!, $limit: Int!) {
    recentAcSubmissionList(username: $username, limit: $limit) {
      id
      title
      titleSlug
      timestamp
    }
  }
`;

const DIFFICULTIES = ["EASY", "MEDIUM", "HARD"];

const getCountByDifficulty = (items, difficulty) =>
  items?.find((item) => item.difficulty === difficulty)?.count ?? 0;

export const transformProgressResponse = (data) => {
  const progress = data?.userProfileUserQuestionProgressV2;
  if (!progress) {
    throw new Error("LeetCode progress data is unavailable.");
  }

  const { numAcceptedQuestions, numFailedQuestions, numUntouchedQuestions } =
    progress;

  const difficultyStats = DIFFICULTIES.reduce((acc, difficulty) => {
    const solved = getCountByDifficulty(numAcceptedQuestions, difficulty);
    const failed = getCountByDifficulty(numFailedQuestions, difficulty);
    const untouched = getCountByDifficulty(numUntouchedQuestions, difficulty);
    const total = solved + failed + untouched;

    acc[difficulty] = { solved, total };
    return acc;
  }, {});

  const attempting = DIFFICULTIES.reduce(
    (sum, difficulty) =>
      sum + getCountByDifficulty(numFailedQuestions, difficulty),
    0
  );

  const totalSolved = DIFFICULTIES.reduce(
    (sum, difficulty) => sum + difficultyStats[difficulty].solved,
    0
  );

  const totalQuestions = DIFFICULTIES.reduce(
    (sum, difficulty) => sum + difficultyStats[difficulty].total,
    0
  );

  return {
    totalSolved,
    totalQuestions,
    easySolved: difficultyStats.EASY.solved,
    easyTotal: difficultyStats.EASY.total,
    mediumSolved: difficultyStats.MEDIUM.solved,
    mediumTotal: difficultyStats.MEDIUM.total,
    hardSolved: difficultyStats.HARD.solved,
    hardTotal: difficultyStats.HARD.total,
    attempting,
    percentile: progress.totalQuestionBeatsPercentage ?? 0,
  };
};

export const transformRecentSubmissionsResponse = (data) => {
  const submissions = data?.recentAcSubmissionList;
  if (!Array.isArray(submissions)) {
    throw new Error("LeetCode recent submissions are unavailable.");
  }

  return submissions.slice(0, RECENT_PROBLEMS_LIMIT).map((submission) => ({
    id: submission.id,
    title: submission.title,
    titleSlug: submission.titleSlug,
    timestamp: submission.timestamp,
  }));
};

export const getProblemUrl = (titleSlug) =>
  `https://leetcode.com/problems/${titleSlug}/`;

export const getProfileUrl = (username = LEETCODE_USERNAME) =>
  `https://leetcode.com/u/${username}/`;
