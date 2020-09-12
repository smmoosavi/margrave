import { getAppContext } from '../app/get-app-context';
import { getDependencyContext } from './get-dependency-context';
import { getFileContext } from '../files/get-file-context';
import { getRelativeDependency } from './get-relative-dependency';

describe('get-relative-dependency', () => {
  describe('absolute dependency', () => {
    it('should returns relative path', () => {
      const appCtx = getAppContext('/path-to-project/', 'src');
      const fileCtx = getFileContext(appCtx, 'src/app.ts');
      const ctx = getDependencyContext(fileCtx, 'src/utils/a.ts');
      const relativePath = getRelativeDependency(ctx);
      expect(relativePath).toBe('./utils/a.ts');
    });
    describe('relative dependency', () => {
      it('should returns relative path', () => {
        const appCtx = getAppContext('/path-to-project/', 'src');
        const fileCtx = getFileContext(appCtx, 'src/pages/page.ts');
        const ctx = getDependencyContext(fileCtx, 'src/utils/a.ts');
        const relativePath = getRelativeDependency(ctx);
        expect(relativePath).toBe('../utils/a.ts');
      });
    });
  });
  describe('relative dependency', () => {
    it('should returns relative path', () => {
      const appCtx = getAppContext('/path-to-project/', 'src');
      const fileCtx = getFileContext(appCtx, 'src/app.ts');
      const ctx = getDependencyContext(fileCtx, './utils/a.ts');
      const relativePath = getRelativeDependency(ctx);
      expect(relativePath).toBe('./utils/a.ts');
    });
  });
});
