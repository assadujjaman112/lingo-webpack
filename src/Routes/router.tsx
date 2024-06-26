import MainLayout from "../Layout/MainLayout";
import MarketingLayout from "../Layout/MarketingLayout";
import ButtonPage from "../Pages/ButtonPage";
import CoursePage from "../Pages/CoursePage/CoursePage";
import LearnPage from "../Pages/LearnPage/LearnPage";
import LessonPage from "../Pages/Lesson/Lesson";
import Login from "../Pages/Login/Login";
import MarketingPage from "../Pages/MarketingPage";
import Register from "../Pages/Register/Register";
import MessagePage from "../Pages/messegePage/MessagePage";
import { createBrowserRouter } from "react-router-dom";
import React from "react"
import ShopPage from "../Pages/Shop/ShopPage";
import LeaderBoardPage from "../Pages/LeaderBoard/LeaderBoard";
import QuestsPage from "../Pages/Quest/Quest";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MarketingLayout></MarketingLayout>,
    children: [
      {
        path: "/",
        element: <MarketingPage></MarketingPage>,
      },
      {
        path: "/buttonPage",
        element: <ButtonPage></ButtonPage>,
      },
    ],
  },
  {
    path: "/main",
    element: <MainLayout />,
    children: [
      {
        path: "learn",
        element: <LearnPage />,
      },
      {
        path: "leaderBoard",
        element: <LeaderBoardPage />,
      },
      {
        path: "courses",
        element: <CoursePage />,
      },
      {
        path: "shop",
        element : <ShopPage />
      },
      {
        path:"quests",
        element : <QuestsPage />
      }
    ],
  },
  {
    path: "/lesson",
    element: <LessonPage />,
  },
  {
    path: "/signUp",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/messages",
    element: <MessagePage />,
  },
]);

export default router;
