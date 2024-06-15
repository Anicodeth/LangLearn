import { useState, useEffect } from "react";

export function useUser() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = () => {
      const userData = sessionStorage.getItem("user");
      if (userData) {
        setUser(JSON.parse(userData));
      }
      setLoading(false);
    };

    fetchUser();
  }, []);

  return { user, loading };
}
