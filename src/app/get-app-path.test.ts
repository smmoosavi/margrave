import { getAppContext } from './get-app-context';
import { getAppPath } from './get-app-path';

describe('get-app-path', () => {
  it('should returns joined path', () => {
    const ctx = getAppContext('/path-to-project/', 'src');

    const appPath = getAppPath(ctx);
    expect(appPath).toBe('/path-to-project');
  });
  it('should returns joined path without root option', () => {
    const ctx = getAppContext('/path-to-project/');
    const appPath = getAppPath(ctx);
    expect(appPath).toBe('/path-to-project');
  });
});
