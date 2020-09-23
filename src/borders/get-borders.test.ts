import mockFs from 'mock-fs';
import { getAppContext } from '../app/get-app-context';
import { emptyRoot, otherRoot, tsProject } from './__fixtures__/roots';
import { getBorders } from './get-borders';

describe('get-borders', () => {
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

      const files = getBorders(ctx);
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

      const files = getBorders(ctx);
      expect(files.sort()).toEqual(['src', 'src/page'].sort());
    });
  });
  describe('without root option', () => {
    it('should returns empty array', () => {
      mockFs({
        '/path-to-project/src': tsProject,
        '/path-to-project/other': otherRoot,
      });
      const ctx = getAppContext('/path-to-project/');

      const files = getBorders(ctx);
      expect(files.sort()).toEqual(['src', 'other', 'src/page'].sort());
    });
  });
});
