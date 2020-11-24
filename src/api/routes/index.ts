import { Routes } from "@serverless-seoul/corgi";

import { route as HealthRoute } from "./health";

export const routes: Routes = [
  HealthRoute,
];
