import {  getTopTenUsers, getUserProgress } from "../db/quaries";
import { useAuth } from "@clerk/clerk-react";
import { useEffect, useState } from "react";

const useTopTenUsers = () => {
  const [userProgress, setUserProgress] = useState([]);
  const { userId } = useAuth();
  useEffect(() => {
    const fetchUserProgress = async () => {
      try {
        // console.log("user id", userId)
        const data = await getTopTenUsers(userId);
        setUserProgress(data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    userId && fetchUserProgress();
  }, []);
  return userProgress;
};

export default useTopTenUsers;
