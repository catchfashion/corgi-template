import { expect } from "chai";

import { createResolver } from "../../../__test__/helpers";

import { routes } from "../";

import * as Models from "../../../models";
import * as Presenters from "../../presenters";

const resolve = createResolver(routes);

describe("Health Routes", () => {
  describe("#getHealthList", () => {
    it("should return list of health", async () => {
      const res = await resolve("GET", "/health");

      expect(res.statusCode).to.be.eq(200);
      expect(JSON.parse(res.body)).to.be.deep.eq(
        await Presenters.HealthList.present({ data: await Models.Health.findAll(), paging: {} }),
      );
    });
  });
});
