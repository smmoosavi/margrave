import { DependenciesContext } from '../dependencies/dependencies-context';
import { getFileContext } from '../files/get-file-context';
import {
  createInvalidAbsoluteImportMessage,
  createInvalidBorderImportMessage,
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
  const resolvedDependency = resolveDependency(ctx);
  const dependencyCtx = getFileContext(ctx, resolvedDependency);
  const dependencyBorder = getBorder(store, dependencyCtx);
  if (resolvedDependency === border) {
    store.addMessage(createInvalidBorderImportMessage(ctx, null));
    return;
  }
  if (dependencyType === 'absolute') {
    if (border && border === dependencyBorder) {
      const relativeDependency = getRelativeDependency(ctx);
      store.addMessage(
        createInvalidAbsoluteImportMessage(ctx, relativeDependency),
      );
      return;
    }
    if (dependencyBorder && ctx.dependency !== dependencyBorder) {
      store.addMessage(
        createInvalidAbsoluteImportMessage(ctx, dependencyBorder),
      );
    }
  }
  if (dependencyType === 'relative') {
    if (dependencyBorder && border !== dependencyBorder) {
      store.addMessage(
        createInvalidRelativeImportMessage(ctx, dependencyBorder),
      );
    }
  }
}
