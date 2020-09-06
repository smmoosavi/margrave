import glob from 'glob';
import { AppContext } from '../app/app-context';

export function getRoots(ctx: AppContext) {
  const { root, nodePath } = ctx;
  if (root === '.') {
    return glob.sync('*', {
      cwd: nodePath,
    });
  }
  return [root];
}
