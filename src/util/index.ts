import { IDisposable } from "../contract/HeadlessBrowser";

const asyncUsing = async <TDisposableResourceType extends IDisposable>(
  resource: TDisposableResourceType,
  asyncFunction: (resource: TDisposableResourceType) => Promise<void>
): Promise<void> => {
  try {
    return await asyncFunction(resource);
  } catch (e) {
    console.log(e);
  } finally {
    await resource.dispose();
  }
};

export { asyncUsing };
