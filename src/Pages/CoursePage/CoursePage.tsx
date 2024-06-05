import { getCourses } from "../../db/quaries";
import React, { useEffect, useState } from "react";
import List from "./List";
import useUserProgress from "../../Hooks/useUserProgress";

const CoursePage =   () => {
  const [courses, setCourses] = useState([]);
  const userProgress =useUserProgress();

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const data = await getCourses();
        setCourses(data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchCourses();
  }, []);
  return (
    <div className="h-full max-w-[912px] px-3 mx-auto">
      <h1 className="text-2xl font-bold text-neutral-700">Language Courses</h1>
      <List
        courses={courses}
        activeCourseId={userProgress?.activeCourseId}
      ></List>
    </div>
  );
};

export default CoursePage;
