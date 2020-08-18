import glob from 'glob';
import { AppContext } from '../app/app-context';

export function getIndexFiles(ctx: AppContext): string[] {
  const { nodePath, root } = ctx;
  return glob.sync(
    (root === '.' || root === '' ? '' : root + '/') + '**/index.ts',
    {
      cwd: nodePath,
    },
  );
}
