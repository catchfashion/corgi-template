import { AccessLogMiddleware } from "@catchfashion/log-sdk";
import * as _ from "lodash";
import { Namespace, OpenAPIRoute, Router } from "vingle-corgi";

import { exceptionHandler } from "./exception_handler";
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
    exceptionHandler
  }),
], {
  middlewares: [new AccessLogMiddleware("corgi-template")]
});

export const handler = router.handler();
