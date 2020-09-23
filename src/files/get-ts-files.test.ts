import mockFs from 'mock-fs';
import { getAppContext } from '../app/get-app-context';
import { emptyRoot, otherRoot, tsProject } from './__fixtures__/roots';
import { getTsFiles } from './get-ts-files';

describe('get-all-files', () => {
  afterAll(() => {
    mockFs.restore();
  });

  describe('in empty root', () => {
    it('should returns empty array', () => {
      mockFs({
        '/path-to-project/src': emptyRoot,
        '/path-to-project/other': otherRoot,
      });
      const ctx = getAppContext('/path-to-project/', 'src');

      const files = getTsFiles(ctx);
      expect(files).toEqual([]);
    });
  });
  describe('in root with ts and tsx files', () => {
    it('should returns ts and tsx files', () => {
      mockFs({
        '/path-to-project/src': tsProject,
        '/path-to-project/other': otherRoot,
      });
      const ctx = getAppContext('/path-to-project/', 'src');

      const files = getTsFiles(ctx);
      expect(files.sort()).toEqual(
        ['src/index.ts', 'src/util.ts', 'src/app.tsx'].sort(),
      );
    });
  });
  describe('without root option', () => {
    it('should returns ts and tsx files', () => {
      mockFs({
        '/path-to-project/src': tsProject,
        '/path-to-project/other': otherRoot,
      });
      const ctx = getAppContext('/path-to-project/');

      const files = getTsFiles(ctx);
      expect(files.sort()).toEqual(
        ['src/index.ts', 'src/util.ts', 'src/app.tsx', 'other/index.ts'].sort(),
      );
    });
  });
});
