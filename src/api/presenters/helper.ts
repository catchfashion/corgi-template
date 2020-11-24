import { Presenter } from "@serverless-seoul/corgi";
import { Static, TSchema } from "@serverless-seoul/typebox";

import * as Entities from "../entities";

type EntityMap = typeof Entities;
type EntitySchemas = Extract<EntityMap[keyof EntityMap], TSchema>;

const ExportedNames = new Map<any, string>(
  Object.entries(Entities).map(([key, value]) => [value, key]),
);

export function createPresenter<Model, Schema extends EntitySchemas>(
  schema: Schema,
  present: (model: Model) => Promise<Static<Schema>>,
) {
  const presenter: Presenter<Model, Static<Schema>> = {
    outputJSONSchema: () => ({
      $ref: `#/components/schemas/${ExportedNames.get(schema)!}`,
    }),
    present,
  };
  return presenter;
}
