import {  getUserProgress } from "../db/quaries";
import { useAuth } from "@clerk/clerk-react";
import { useEffect, useState } from "react";

const useUserProgress = () => {
  const [userProgress, setUserProgress] = useState([]);
  const { userId } = useAuth();
  useEffect(() => {
    const fetchUserProgress = async () => {
      try {
        // console.log("user id", userId)
        const data = await getUserProgress(userId);
        setUserProgress(data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    userId && fetchUserProgress();
  }, [userId]);
  return userProgress;
};

export default useUserProgress;
