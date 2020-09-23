import { AppContext } from '../app/app-context';
import { getBorders } from '../borders/get-borders';
import { checkDependency } from '../check/check-dependency';
import { checkFile } from '../check/check-file';
import { getDependencyContext } from '../dependencies/get-dependency-context';
import { getFileDependencies } from '../dependencies/get-file-dependencies';
import { getFileContext } from '../files/get-file-context';
import { getTsFiles } from '../files/get-ts-files';
import { getRoots } from '../roots/get-roots';
import { Store } from '../store/store';

export function loadStore(ctx: AppContext, store: Store) {
  const borders = getBorders(ctx);
  store.addBorders(ctx, borders);
  const roots = getRoots(ctx);
  store.addRoots(ctx, roots);
  const files = getTsFiles(ctx);
  files.forEach((file) => {
    const fileCtx = getFileContext(ctx, file);
    checkFile(store, fileCtx);
    const dependencies = getFileDependencies(fileCtx);
    if (dependencies) {
    }
    dependencies?.forEach((dependency) => {
      const depCtx = getDependencyContext(fileCtx, dependency);
      checkDependency(store, depCtx);
    });
  });
}
