import React from "react"

import { quests } from "../../constants";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { Progress } from "./ui/progress";

type Props = {
  points: number;
};

export const Quests = ({ points }: Props) => {
  return (
    <div className="border-2 rounded-xl p-4 space-y-4">
      <div className="flex items-center justify-between w-full space-y-2">
        <h3 className="font-bold text-lg">
          Quests
        </h3>
        <Link to="/main/quests">
          <Button
            size="sm"
            variant="primaryOutline"
          >
            View all
          </Button>
        </Link>
      </div>
      <ul className="w-full space-y-4">
        {quests.map((quest) => {
          const progress = (points / quest.value) * 100;

          return (
            <div
              className="flex items-center w-full pb-4 gap-x-3"
              key={quest.title}
            >
              <img
                src="https://i.ibb.co/9r629LV/quests.png"
                alt="Points"
                width={40}
                height={40}
              />
              <div className="flex flex-col gap-y-2 w-full">
                <p className="text-neutral-700 text-sm font-bold">
                  {quest.title}
                </p>
                <Progress value={progress} className="h-2" />
              </div>
            </div>
          )
        })}
      </ul>
    </div>
  );
};