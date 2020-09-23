import mockFs from 'mock-fs';
import { getAppContext } from '../app/get-app-context';
import { getFileContext } from '../files/get-file-context';
import { getFileDependencies } from './get-file-dependencies';
import { tsProject } from './__fixtures__/roots';

describe('get-file-dependencies', () => {
  afterAll(() => {
    mockFs.restore();
  });
  describe('for empty file', () => {
    it('should returns empty array', () => {
      mockFs({
        '/path-to-project/src': tsProject,
      });
      const ctx = getFileContext(
        getAppContext('/path-to-project/', 'src'),
        'src/empty.ts',
      );

      const dependencies = getFileDependencies(ctx);
      expect(dependencies).toEqual([]);
    });
  });
  describe('for non existent file', () => {
    it('should returns null', () => {
      mockFs({
        '/path-to-project/src': tsProject,
      });
      const ctx = getFileContext(
        getAppContext('/path-to-project/', 'src'),
        'src/no-file.ts',
      );

      const dependencies = getFileDependencies(ctx);
      expect(dependencies).toBeNull();
    });
  });
  describe('for bad syntax', () => {
    it('should returns null', () => {
      mockFs({
        '/path-to-project/src': tsProject,
      });
      const ctx = getFileContext(
        getAppContext('/path-to-project/', 'src'),
        'src/bad.ts',
      );

      const dependencies = getFileDependencies(ctx);
      expect(dependencies).toBeNull();
    });
  });
  it('should returns all dependencies', () => {
    mockFs({
      '/path-to-project/src': tsProject,
    });
    const ctx = getFileContext(
      getAppContext('/path-to-project/', 'src'),
      'src/app.tsx',
    );

    const dependencies = getFileDependencies(ctx);
    expect(dependencies).toEqual(['abc', 'abc', 'xyz', './utils']);
  });
});
