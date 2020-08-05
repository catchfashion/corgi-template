import { wrapLambdaHandler } from "@catchfashion/log-sdk";

interface Event {
  job: string;
  args: any;
}

export const handler = wrapLambdaHandler({
  service: "corgi-template",
  operationId: "cron"
}, async (event: Event) => {
  //
});
