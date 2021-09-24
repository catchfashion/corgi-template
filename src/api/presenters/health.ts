import { createPresenter } from "./helper";

// Entities
import * as Entities from "../entities";

// Models
import * as Models from "../../models";

export function presentList(models: Models.Health[]) {
  return models.map((t) => ({
    date: t.date.toString(),
    services: t.services,
  }));
}

export const HealthShow = createPresenter(Entities.HealthShow, async (model: Models.Health) => {
  return {
    data: presentList([model])[0],
  };
});

export const HealthList = createPresenter(Entities.HealthList, async (input: {
  data: Models.Health[];
  paging: { after?: string; before?: string };
}) => {
  return {
    data: presentList(input.data),
    paging: input.paging,
  };
});
