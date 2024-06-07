import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { ClerkProvider } from "@clerk/clerk-react";
import AuthProvider from "./providers/AuthProvider";
import { ChatContextProvider } from "./providers/ChatContext";
import router from "./Routes/router";

const PUBLISHABLE_KEY = "pk_test_bmF0aW9uYWwtYWtpdGEtNDguY2xlcmsuYWNjb3VudHMuZGV2JA";


if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
    <AuthProvider>
      <ChatContextProvider>
        <RouterProvider router={router} />
      </ChatContextProvider>
    </AuthProvider>
    </ClerkProvider>
  </React.StrictMode>
);
