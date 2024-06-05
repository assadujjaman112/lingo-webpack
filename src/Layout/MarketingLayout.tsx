import { ExitModal } from "../components/modals/ExitModal";
import { Toaster } from "../components/ui/sonner";
import { Outlet } from "react-router-dom";
import React from "react"

const MarketingLayout = () => {
  return (
    <div>
      <Toaster />
        <ExitModal />
      <Outlet></Outlet>
    </div>
  );
};

export default MarketingLayout;
