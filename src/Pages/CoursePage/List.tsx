import { courses, userProgress } from "../../db/schema";
import { Card } from "./Card";
import {  redirect, useNavigate } from "react-router-dom";
import React, { useTransition } from "react";
import { upsertUserProgress } from "../../actions/user-progress";
import { useAuth, useUser } from "@clerk/clerk-react";
import { toast } from "sonner";

type Props = {
  courses: (typeof courses.$inferSelect)[];
  activeCourseId?: typeof userProgress.$inferSelect.activeCourseId;
};

export const List = ({ courses, activeCourseId }: Props) => {
  const navigate = useNavigate();
  const [pending, startTransition] = useTransition();
  const { userId } = useAuth();
  const user = useUser();

  const onClick = (id: number) => {
    console.log("clicked to course", id,userId, );
    if (pending) return;
    if (id === activeCourseId) {
      redirect("/main/learn");
    }
    startTransition(() => {
      upsertUserProgress(id, userId, user).catch(() =>
        toast.error("Something went wrong.")
      );
    });
  };
  return (
    <div className="pt-6 grid grid-cols-2 lg:grid-cols-[repeat(auto-fill,minmax(210px,1fr))] gap-4">
      {courses.map((course) => (
        <Card
          key={course.id}
          id={course.id}
          title={course.title}
          imageSrc={course.imageSrc}
          onClick={onClick}
          active={course.id === activeCourseId}
        />
      ))}
    </div>
  );
};

export default List;
