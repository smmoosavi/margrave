import { getAppContext } from '../app/get-app-context';
import { getFileContext } from '../files/get-file-context';
import { getDependencyContext } from './get-dependency-context';
import { getDependencyRoot } from './get-dependency-root';

describe('get-dependency-root', () => {
  describe('absolute dependency', () => {
    it('should returns relative path', () => {
      const appCtx = getAppContext('/path-to-project/', 'src');
      const fileCtx = getFileContext(appCtx, 'src/app.ts');
      const ctx = getDependencyContext(fileCtx, 'src/utils/a.ts');
      const relativePath = getDependencyRoot(ctx);
      expect(relativePath).toBe('src');
    });
  });
  describe('relative dependency', () => {
    it('should returns relative path', () => {
      const appCtx = getAppContext('/path-to-project/', 'src');
      const fileCtx = getFileContext(appCtx, 'src/app.ts');
      const ctx = getDependencyContext(fileCtx, './utils/a.ts');
      const relativePath = getDependencyRoot(ctx);
      expect(relativePath).toBe('src');
    });
  });
});
