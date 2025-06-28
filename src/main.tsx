import { StrictMode, Fragment } from "react";
import { createRoot } from "react-dom/client";

import { App } from "@app/App.tsx";
import { StoreProvider } from "@common/providers/storeProvider.tsx";

import "@common/styles/global.css";

const Wrapper = import.meta.env.VITE_DEBUG === "true" ? StrictMode : Fragment;

createRoot(document.getElementById("root")!).render(
  <Wrapper>
    <StoreProvider>
      <App />
    </StoreProvider>
  </Wrapper>
);
