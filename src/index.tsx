import React from "react";
import { createRoot } from "react-dom/client";
import { FireComponent } from "./FirebaseComp";

import "./styles.scss";

const root = createRoot(document.getElementById("root"));

root.render(
  <>
    <FireComponent />
  </>
);
