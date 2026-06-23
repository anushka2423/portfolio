import { useEffect, useState } from "react";

import { fetchLeetCodeJourney } from "../services/leetcodeApi";

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

        const data = await fetchLeetCodeJourney();

        if (!isMounted) return;

        setStats(data.stats);
        setRecentProblems(data.recentProblems);
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
