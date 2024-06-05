import { getCourseProgress } from "../db/quaries";
import { useAuth } from "@clerk/clerk-react";
import { useEffect, useState } from "react";

const useCourseProgress = () => {
  const [courseProgress, setCourseProgress] = useState();
  const { userId } = useAuth();
  useEffect(() => {
    const fetchCourseProgress = async () => {
      try {
        // console.log("user id", userId)
        const data = await getCourseProgress(userId);
        setCourseProgress(data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    userId && fetchCourseProgress();
  }, [userId]);
  return courseProgress;
};

export default useCourseProgress;
