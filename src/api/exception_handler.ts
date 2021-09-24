import { wrapExceptionHandler } from "@catchfashion/log-sdk";

export const exceptionHandler = wrapExceptionHandler(async (_error: Error) => {
  //
});
