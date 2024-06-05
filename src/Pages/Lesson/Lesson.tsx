import useLessons from "../../Hooks/useLessons";
import useUserProgress from "../../Hooks/useUserProgress";
import { redirect } from "react-router-dom";
import Quiz from "./Quiz";
import { Toaster } from "../../components/ui/sonner";
import { ExitModal } from "../../components/modals/ExitModal";
import { HeartsModal } from "../../components/modals/HeartsModal";
import React from "react"

const LessonPage = () => {
  const lesson = useLessons();

  const userProgress = useUserProgress();
  if (!lesson || !userProgress) {
    redirect("/main/learn");
  }
  const initialPercentage = 
  (lesson?.challenges?.filter((challenge) => challenge?.completed).length /
    lesson?.challenges?.length) *
  100;
  // console.log("lesson", lesson, "initial Challenges", lesson?.challenges);

  return (
    <div>
      <Toaster />
      <ExitModal />
      <HeartsModal />
      <Quiz
        initialLessonId={lesson?.id}
        initialLessonChallenges={lesson?.challenges}
        initialHearts={userProgress?.hearts}
        initialPercentage={initialPercentage}
        userSubscription={null}
      />
    </div>
  );
};

export default LessonPage;
