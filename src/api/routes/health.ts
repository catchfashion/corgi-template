import { Namespace, Parameter, PresenterRouteFactory, StandardError } from "@serverless-seoul/corgi";
import { Type } from "@serverless-seoul/typebox";

// Models
import { Health } from "../../models";

// Presenters
import * as Presenters from "../presenters";

export const route = new Namespace(
  "/health", {}, {
    children: [
      PresenterRouteFactory.GET(
        "", {
          desc: "get health history",
          operationId: "getHealthList",
        }, {}, Presenters.HealthList, async () => {
          const records = await Health.findAll();
          return {
            data: records, paging: {},
          };
        }),

      PresenterRouteFactory.GET(
        "/:date", {
          desc: "get health of given date",
          operationId: "getHealth",
        }, {
          date: Parameter.Path(Type.String()),
        }, Presenters.HealthShow, async function() {
          const date = this.params.date;
          const record = await Health.findByDate(date);
          if (!record) {
            throw new StandardError(404, { code: "NOT_FOUND", message: "exchange rate not found for given date" });
          }
          return record;
        }),
    ],
  },
);
