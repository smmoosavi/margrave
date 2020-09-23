import { DependenciesContext } from '../dependencies/dependencies-context';
import { getFileContext } from '../files/get-file-context';
import {
  createInvalidAbsoluteImportMessage,
  createInvalidRelativeImportMessage,
} from '../message/message';
import { Store } from '../store/store';
import { getBorder } from './get-border';
import { getDependencyType } from './get-dependency-type';
import { getRelativeDependency } from '../dependencies/get-relative-dependency';
import { resolveDependency } from '../dependencies/resolve-dependency';

export function checkDependency(store: Store, ctx: DependenciesContext) {
  const dependencyType = getDependencyType(store, ctx);
  if (dependencyType === 'external') {
    return;
  }

  const border = getBorder(store, ctx);
  const dependencyFile = resolveDependency(ctx);
  const dependencyCtx = getFileContext(ctx, dependencyFile);
  const dependencyBorder = getBorder(store, dependencyCtx);
  if (dependencyType === 'absolute' && border === dependencyBorder && border) {
    const relativeDependency = getRelativeDependency(ctx);
    store.addMessage(
      createInvalidAbsoluteImportMessage(ctx, relativeDependency),
    );
  }
  if (
    dependencyType === 'relative' &&
    border !== dependencyBorder &&
    dependencyBorder
  ) {
    store.addMessage(createInvalidRelativeImportMessage(ctx, dependencyBorder));
  }
}
