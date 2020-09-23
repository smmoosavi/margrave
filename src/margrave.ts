import { getAppContext } from './app/get-app-context';
import { getBorders } from './borders/get-borders';
import { checkDependency } from './check/check-dependency';
import { checkFile } from './check/check-file';
import { getDependencyContext } from './dependencies/get-dependency-context';
import { getFileDependencies } from './dependencies/get-file-dependencies';
import { getFileContext } from './files/get-file-context';
import { getTsFiles } from './files/get-ts-files';
import { logMessages } from './message/log-messages';
import { getRoots } from './roots/get-roots';
import { createStore } from './store/create-store';

export interface Options {
  nodePath: string;
  root: string;
}

export function margrave(options: Options) {
  const { nodePath, root } = options;
  const store = createStore();
  const appCtx = getAppContext(nodePath, root);
  const borders = getBorders(appCtx);
  store.addBorders(appCtx, borders);
  const roots = getRoots(appCtx);
  store.addRoots(appCtx, roots);
  const files = getTsFiles(appCtx);
  files.forEach((file) => {
    const fileCtx = getFileContext(appCtx, file);
    checkFile(store, fileCtx);
    const dependencies = getFileDependencies(fileCtx);
    if (dependencies) {
    }
    dependencies?.forEach((dependency) => {
      const depCtx = getDependencyContext(fileCtx, dependency);
      checkDependency(store, depCtx);
    });
  });
  logMessages(store.getMessages());
}
