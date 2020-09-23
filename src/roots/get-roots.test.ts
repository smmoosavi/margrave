import mockFs from 'mock-fs';
import { getAppContext } from '../app/get-app-context';
import { emptyRoot, otherRoot, tsProject } from './__fixtures__/roots';
import { getRoots } from './get-roots';

describe('get-borders', () => {
  afterAll(() => {
    mockFs.restore();
  });

  describe('in empty root', () => {
    it('should returns root', () => {
      mockFs({
        '/path-to-project/src': emptyRoot,
        '/path-to-project/other': otherRoot,
      });
      const ctx = getAppContext('/path-to-project/', 'src');

      const files = getRoots(ctx);
      expect(files.sort()).toEqual(['src'].sort());
    });
  });
  describe('in root with ts and tsx files', () => {
    it('should returns empty array', () => {
      mockFs({
        '/path-to-project/src': tsProject,
        '/path-to-project/other': otherRoot,
      });
      const ctx = getAppContext('/path-to-project/', 'src');

      const files = getRoots(ctx);
      expect(files.sort()).toEqual(['src'].sort());
    });
  });
  describe('without root option', () => {
    it('should returns empty array', () => {
      mockFs({
        '/path-to-project/src': tsProject,
        '/path-to-project/other': otherRoot,
      });
      const ctx = getAppContext('/path-to-project/');

      const files = getRoots(ctx);
      expect(files.sort()).toEqual(['src', 'other'].sort());
    });
    it('should returns files', () => {
      mockFs({
        '/path-to-project/index.ts': '',
        '/path-to-project/src': tsProject,
        '/path-to-project/other': otherRoot,
      });
      const ctx = getAppContext('/path-to-project/');

      const files = getRoots(ctx);
      expect(files.sort()).toEqual(['src', 'other', 'index.ts'].sort());
    });
  });
});
