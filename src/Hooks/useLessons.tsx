import { getLesson } from "../db/quaries";
import { useAuth } from "@clerk/clerk-react";
import { useEffect, useState } from "react";

const useLessons = () => {
  const [lesson, setLesson] = useState([]);
  const { userId } = useAuth();
  useEffect(() => {
    const fetchLesson = async () => {
      try {
        // console.log("user id", userId)
        const data  = await getLesson(userId);
        setLesson(data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    }; fetchLesson();
  }, [userId]);
  return lesson;
};

export default useLessons;
