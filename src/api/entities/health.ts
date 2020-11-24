import { Type } from "@serverless-seoul/typebox";

import { DataLayout, PaginatedDataLayout } from "./layout";

export const Health = Type.Object({
  date: Type.String(), // YYYYMMDD
  services: Type.Array(Type.Object({
    name: Type.String(),
    status: Type.Union([
      Type.Literal("Good"),
      Type.Literal("Bad"),
      Type.Literal("Soso"),
    ]),
  })),
});

export const HealthShow = DataLayout(Health);
export const HealthList = PaginatedDataLayout(Health);
