import { getAppContext } from '../app/get-app-context';
import { getDependencyContext } from './get-dependency-context';
import { getFileContext } from '../files/get-file-context';
import { resolveDependency } from './resolve-dependency';

describe('resolve-dependency', () => {
  describe('absolute dependency', () => {
    it('should returns relative path', () => {
      const appCtx = getAppContext('/path-to-project/', 'src');
      const fileCtx = getFileContext(appCtx, 'src/app.ts');
      const ctx = getDependencyContext(fileCtx, 'src/utils/a.ts');
      const relativePath = resolveDependency(ctx);
      expect(relativePath).toBe('src/utils/a.ts');
    });
  });
  describe('relative dependency', () => {
    it('should returns relative path', () => {
      const appCtx = getAppContext('/path-to-project/', 'src');
      const fileCtx = getFileContext(appCtx, 'src/app.ts');
      const ctx = getDependencyContext(fileCtx, './utils/a.ts');
      const relativePath = resolveDependency(ctx);
      expect(relativePath).toBe('src/utils/a.ts');
    });
  });
});
