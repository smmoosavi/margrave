import glob from 'glob';
import { AppContext } from '../app/app-context';

export function getTsFiles(ctx: AppContext): string[] {
  const { nodePath, root } = ctx;
  return glob.sync(
    (root === '.' || root === '' ? '' : root + '/') + '**/*.{ts,tsx}',
    {
      cwd: nodePath,
    },
  );
}
