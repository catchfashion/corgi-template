import * as _ from "lodash";
import { Namespace, OpenAPIRoute, Router } from "vingle-corgi";

import { routes } from "./routes";

import * as entityDefinitions from "./entities/definitions.json";

export const router = new Router([
  new OpenAPIRoute(
    "/open-api",
    {
      title: "ExchangeService",
      version: "1.0.0",
      definitions: entityDefinitions,
    },
    routes,
  ),
  new Namespace("", {
    children: routes,
  }),
]);

export const handler = router.handler();
