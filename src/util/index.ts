import { IDisposable } from "../contract/HeadlessBrowser/";

const asyncUsing = async <TDisposableResourceType extends IDisposable>(
  resource: TDisposableResourceType,
  asyncFunction: (resource: TDisposableResourceType) => Promise<void>
): Promise<void> => {
  try {
    return await asyncFunction(resource);
  } finally {
    await resource.dispose();
  }
};

export { asyncUsing };
