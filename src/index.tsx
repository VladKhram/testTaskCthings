import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { QueryClientProvider, QueryClient } from "react-query";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const quetyClient = new QueryClient();

root.render(
  <React.StrictMode>
    <QueryClientProvider client={quetyClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);
