import { Loader } from "lucide-react";
import React from "react";
import { cn } from "../lib/utils";
import { Link } from "react-router-dom";
import { ClerkLoaded, ClerkLoading, UserButton } from "@clerk/clerk-react";
import { SidebarItem } from "./SidebarItem";

type Props = {
  className?: string;
};

export const Sidebar = ({ className }: Props) => {
  return (
    <div
      className={cn(
        "flex h-full lg:w-[256px] lg:fixed left-0 top-0 bg-white px-4 border-r-2 flex-col",
        className
      )}
    >
      <Link to="/main/learn">
        <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
          <img
            src="https://i.ibb.co/fS2ksRY/mascot.png"
            height={40}
            width={40}
            alt="Mascot"
          />
          <h1 className="text-2xl font-extrabold text-green-600 tracking-wide">
            Lingo
          </h1>
        </div>
      </Link>
      <div className="flex flex-col gap-y-2 flex-1">
        <SidebarItem label="Learn" href="/main/learn" iconSrc="https://i.ibb.co/KsBgfk6/learn.png" />
        <SidebarItem
          label="Leaderboard"
          href="/main/leaderboard"
          iconSrc="https://i.ibb.co/GVVW9zy/leaderboard.png"
        />
        <SidebarItem label="quests" href="/main/quests" iconSrc="https://i.ibb.co/9r629LV/quests.png" />
        <SidebarItem label="shop" href="/main/shop" iconSrc="https://i.ibb.co/rtV8HFZ/shop.png" />
      </div>
      <div className="p-4">
        <ClerkLoading>
          <Loader className="h-5 w-5 text-muted-foreground animate-spin" />
        </ClerkLoading>
        <ClerkLoaded>
          <UserButton afterSignOutUrl="/" />
        </ClerkLoaded>
      </div>
    </div>
  );
};
