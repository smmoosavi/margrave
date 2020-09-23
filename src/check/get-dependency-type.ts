import { DependenciesContext } from '../dependencies/dependencies-context';
import { getDependencyRoot } from '../dependencies/get-dependency-root';
import { Store } from '../store/store';

export type DependencyType = 'external' | 'absolute' | 'relative';

export function getDependencyType(
  store: Store,
  ctx: DependenciesContext,
): DependencyType {
  if (ctx.dependency.startsWith('.')) {
    return 'relative';
  }
  if (store.hasRoot(getDependencyRoot(ctx))) {
    return 'absolute';
  }
  return 'external';
}
