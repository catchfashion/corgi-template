import {
  Namespace,
  Router,
  Routes,
} from "vingle-corgi";

export function createResolver(routes: Routes) {
  const resolver = function resolve(
    method: string,
    path: string,
    queryStringParameters?: { [key: string]: string },
    headers: { [key: string]: string } = {},
    body?: string,
  ) {
    const router = new Router([
      new Namespace("", {
        children: routes,
      }),
    ], {});

    return router.resolve({
      headers,
      httpMethod: method,
      path,
      queryStringParameters,
      body,
    }, { timeout: 1000 });
  };

  return resolver;
}

import * as Sinon from "sinon";

export let sandbox = Sinon.createSandbox();

beforeEach(() => {
  sandbox = Sinon.createSandbox();
});

afterEach(() => {
  sandbox.verifyAndRestore();
});
