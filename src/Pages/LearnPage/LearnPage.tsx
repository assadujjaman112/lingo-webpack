import { lessons, units as unitsSchema } from "../../db/schema";
import { FeedWrapper } from "../../components/FeedWrapper";
import { StickyWrapper } from "../../components/StickyWrapper";
import { Header } from "./LearnHeader";
import { UserProgress } from "../../components/UserProgress";
import { useEffect } from "react";
import useUserProgress from "../../Hooks/useUserProgress";
import useUnits from "../../Hooks/useUnits";
import { Unit } from "./Unit";
import useCourseProgress from "../../Hooks/useCourseProgress";
import useLessonPercentage from "../../Hooks/useLessonPercentage";
import React from "react"
import { redirect } from "react-router-dom";
import { Quests } from "../../components/Quests";

const LearnPage = () => {
  const userProgress = useUserProgress();
  const courseProgress = useCourseProgress();
  const lessonPercentage = useLessonPercentage();
  const units = useUnits();

  useEffect(() => {
    if (!userProgress || !userProgress?.activeCourse) {
      redirect("/main/courses");
    }
  }, [userProgress]);

  return (
    <div className="flex flex-row-reverse gap-[48px] px-6">
      <StickyWrapper>
        <UserProgress
          activeCourse={userProgress?.activeCourse}
          hearts={userProgress.hearts}
          points={userProgress.points}
          hasActiveSubscription={false}
        ></UserProgress>
        <Quests points={userProgress.points} />
      </StickyWrapper>
      <FeedWrapper>
        <Header title={userProgress?.activeCourse?.title}></Header>
        {units?.map((unit) => (
          <div key={unit.id}>
            <Unit
              id={unit.id}
              order={unit.order}
              description={unit.description}
              title={unit.title}
              lessons={unit.lessons}
              activeLesson={
                courseProgress?.activeLesson as
                  | (typeof lessons.$inferSelect & {
                      unit: typeof unitsSchema.$inferSelect;
                    })
                  | undefined
              }
              activeLessonPercentage={lessonPercentage}
            />
          </div>
        ))}
      </FeedWrapper>
    </div>
  );
};

export default LearnPage;
