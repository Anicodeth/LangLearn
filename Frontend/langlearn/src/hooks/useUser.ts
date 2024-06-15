import { useState, useEffect } from "react";

interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  quizzes: string[];
  progress: string[];
  coins: number;
  role: "user" | "teacher" | "admin";
}

export function useUser() {
  const [user, setUser] = useState<User | null>(null);
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
