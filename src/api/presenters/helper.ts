import { Presenter } from "vingle-corgi";

export function createPresenter<Model, Entity>(
  entityClass: { name: string, new (): Entity },
  present: (model: Model) => Promise<Entity>,
) {
  const presenter: Presenter<Model, Entity> = {
    outputJSONSchema: () => {
      return {
        $ref: `#/components/schemas/${entityClass.name}`,
      };
    },
    present,
  };
  return presenter;
}
