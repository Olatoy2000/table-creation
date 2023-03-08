import { ButtonStylesParams, MantineProvider } from "@mantine/core";
import React, { Children } from "react";
import { createRoot } from "react-dom/client";
import App from "../pages/updates";
import "./styles/index.css";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
