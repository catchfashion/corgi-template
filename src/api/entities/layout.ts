import { TSchema, Type } from "@serverless-seoul/typebox";

export function DataLayout<T extends TSchema>(target: T) {
  return Type.Object({
    data: target,
  });
}

export function PaginatedDataLayout<T extends TSchema>(target: T) {
  return Type.Object({
    data: Type.Array(target),
    paging: Type.Object({
      before: Type.Optional(Type.String()),
      after: Type.Optional(Type.String()),
    }),
  });
}
