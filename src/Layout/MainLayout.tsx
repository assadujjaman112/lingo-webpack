import { MobileHeader } from "../components/MobileHeader";
import { Sidebar } from "../components/Sidebar";
import { ExitModal } from "../components/modals/ExitModal";
import { HeartsModal } from "../components/modals/HeartsModal";
import { Toaster } from "../components/ui/sonner";
import { Outlet } from "react-router-dom";
import React from "react"

const MainLayout = () => {
  return (
    <>
      <Toaster />
      <ExitModal />
      <HeartsModal />
      <MobileHeader />
      <Sidebar className="hidden lg:flex" />
      <main className="lg:pl-[256px] h-full pt-[50px] lg:pt-0">
        <div className="max-w-[1056px] mx-auto pt-6 h-full">
          <Outlet></Outlet>
        </div>
      </main>
    </>
  );
};

export default MainLayout;
