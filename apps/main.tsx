/* eslint-disable @typescript-eslint/no-explicit-any */
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./app.tsx";

createRoot(document.getElementById("root") as any).render(
  <StrictMode>
    <App />
  </StrictMode>
);
