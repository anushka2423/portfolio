import { useEffect, useState } from "react";

import { fetchLeetCodeJourney } from "../services/leetcodeApi";

const MAX_RETRIES = 3;
const RETRY_DELAY_MS = 1500;

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const useLeetCodeData = () => {
  const [stats, setStats] = useState(null);
  const [recentProblems, setRecentProblems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const loadLeetCodeData = async () => {
      try {
        setLoading(true);
        setError(null);

        let lastError = null;
        for (let attempt = 0; attempt < MAX_RETRIES; attempt++) {
          try {
            const data = await fetchLeetCodeJourney();
            if (!isMounted) return;
            setStats(data.stats);
            setRecentProblems(data.recentProblems);
            lastError = null;
            break;
          } catch (err) {
            lastError = err;
            if (!isMounted) return;
            if (attempt < MAX_RETRIES - 1) await delay(RETRY_DELAY_MS * (attempt + 1));
          }
        }

        if (lastError) throw lastError;
      } catch (err) {
        if (!isMounted) return;
        setError(err.message ?? "Failed to load LeetCode data.");
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    loadLeetCodeData();

    return () => {
      isMounted = false;
    };
  }, []);

  return { stats, recentProblems, loading, error };
};

export default useLeetCodeData;
