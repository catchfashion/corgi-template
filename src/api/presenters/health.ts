import * as _ from "lodash";

import { createPresenter } from "./helper";

// Entities
import * as Entities from "../entities";

// Models
import * as Models from "../../models";

export const HealthShow = createPresenter(Entities.HealthShow, async (model: Models.Health) => {
  return {
    data: presentList([model])[0],
  };
});

export function presentList(models: Models.Health[]) {
  return models.map(t => {
    return new Entities.Health(
      t.date.toString(),
      t.services,
    );
  });
}

export const HealthList = createPresenter(Entities.HealthList, async (input: {
  data: Models.Health[],
  paging: { after?: string, before?: string },
}) => {
  return {
    data: presentList(input.data),
    paging: input.paging,
  };
});
