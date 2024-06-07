import React from "react"

import { redirect } from "react-router-dom";
import useUserProgress from "../../Hooks/useUserProgress";
import { StickyWrapper } from "../../components/StickyWrapper";
import { UserProgress } from "../../components/UserProgress";
import { FeedWrapper } from "../../components/FeedWrapper";
import { quests } from "../../../constants";
import { Progress } from "../../components/ui/progress";

const QuestsPage =  () => {
  const userProgress = useUserProgress();



  if (!userProgress || !userProgress.activeCourse) {
    redirect("/main/courses");
  }


  return ( 
    <div className="flex flex-row-reverse gap-[48px] px-6">
      <StickyWrapper>
        <UserProgress
          activeCourse={userProgress.activeCourse}
          hearts={userProgress.hearts}
          points={userProgress.points}
          hasActiveSubscription={false}
        />
      </StickyWrapper>
      <FeedWrapper>
        <div className="w-full flex flex-col items-center">
          <img
            src="https://i.ibb.co/9r629LV/quests.png"
            alt="Quests"
            height={90}
            width={90}
          />
          <h1 className="text-center font-bold text-neutral-800 text-2xl my-6">
            Quests
          </h1>
          <p className="text-muted-foreground text-center text-lg mb-6">
            Complete quests by earning points.
          </p>
          <ul className="w-full">
            {quests.map((quest) => {
              const progress = (userProgress.points / quest.value) * 100;

              return (
                <div
                  className="flex items-center w-full p-4 gap-x-4 border-t-2"
                  key={quest.title}
                >
                  <img
                    src="https://i.ibb.co/wNHNZSj/points.png"
                    alt="Points"
                    width={60}
                    height={60}
                  />
                  <div className="flex flex-col gap-y-2 w-full">
                    <p className="text-neutral-700 text-xl font-bold">
                      {quest.title}
                    </p>
                    <Progress value={progress} className="h-3" />
                  </div>
                </div>
              )
            })}
          </ul>
        </div>
      </FeedWrapper>
    </div>
  );
};
 
export default QuestsPage;