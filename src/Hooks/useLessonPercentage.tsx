import { getLessonPercentage } from "../db/quaries";
import { useAuth } from "@clerk/clerk-react";
import { useEffect, useState } from "react";


const useLessonPercentage = () => {
    const [lessonPercentage, setLessonPercentage] = useState();
  const { userId } = useAuth();
  useEffect(() => {
    const fetchLessonPercentage = async () => {
      try {
        // console.log("user id", userId)
        const data = await getLessonPercentage(userId);
        setLessonPercentage(data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    userId && fetchLessonPercentage();
  }, [userId]);
  return lessonPercentage;
};

export default useLessonPercentage;