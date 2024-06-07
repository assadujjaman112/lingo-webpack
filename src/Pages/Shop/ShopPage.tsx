import React from "react"
import { getUserProgress } from "../../db/quaries";
import useUserProgress from "../../Hooks/useUserProgress";
import { redirect } from "react-router-dom";
import { StickyWrapper } from "../../components/StickyWrapper";
import { UserProgress } from "../../components/UserProgress";
import { FeedWrapper } from "../../components/FeedWrapper";
import { Items } from "./Items";
import { Quests } from "../../components/Quests";


const ShopPage =  () => {
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
        <Quests points={userProgress.points} />
      </StickyWrapper>
      <FeedWrapper>
        <div className="w-full flex flex-col items-center">
          <img src="https://i.ibb.co/rtV8HFZ/shop.png" alt="Shop" height={90} width={90} />
          <h1 className="text-center font-bold text-neutral-800 text-2xl my-6">
            Shop
          </h1>
          <p className="text-muted-foreground text-center text-lg mb-6">
            Spend your points on cool stuff.
          </p>
          <Items
            hearts={userProgress.hearts}
            points={userProgress.points}
            hasActiveSubscription={false}
          />
        </div>
      </FeedWrapper>
    </div>
  );
};

export default ShopPage;
