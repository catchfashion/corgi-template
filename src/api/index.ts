import { AccessLogMiddleware } from "@catchfashion/log-sdk";
import { Namespace, OpenAPIRoute, Router } from "@serverless-seoul/corgi";

import * as Entities from "./entities";
import { exceptionHandler } from "./exception_handler";
import { routes } from "./routes";

export const router = new Router([
  new OpenAPIRoute(
    "/open-api",
    {
      title: "template-service",
      version: "1.0.0",
      definitions: Entities,
    },
    routes,
  ),
  new Namespace("", {}, {
    children: routes,
    exceptionHandler,
  }),
], {
  middlewares: [
    new AccessLogMiddleware("template-service"),
  ],
});

export const handler = router.handler();
