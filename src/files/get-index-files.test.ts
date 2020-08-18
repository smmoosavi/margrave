import mockFs from 'mock-fs';
import { getAppContext } from '../app/get-app-context';
import { emptyRoot, otherRoot, tsProject } from './__fixtures__/roots';
import { getIndexFiles } from './get-index-files';

describe('get-all-index-files', () => {
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

      const files = getIndexFiles(ctx);
      expect(files).toHaveLength(0);
    });
  });
  describe('in root with ts and tsx files', () => {
    it('should returns empty array', () => {
      mockFs({
        '/path-to-project/src': tsProject,
        '/path-to-project/other': otherRoot,
      });
      const ctx = getAppContext('/path-to-project/', 'src');

      const files = getIndexFiles(ctx);
      expect(files.sort()).toEqual(['src/index.ts'].sort());
    });
  });
  describe('without root option', () => {
    it('should returns empty array', () => {
      mockFs({
        '/path-to-project/src': tsProject,
        '/path-to-project/other': otherRoot,
      });
      const ctx = getAppContext('/path-to-project/');

      const files = getIndexFiles(ctx);
      expect(files.sort()).toEqual(['src/index.ts', 'other/index.ts'].sort());
    });
  });
});
