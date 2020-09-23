import path from 'path';

import { DependenciesContext } from './dependencies-context';
import { resolveDependency } from './resolve-dependency';

export function getRelativeDependency(ctx: DependenciesContext) {
  if (ctx.dependency.startsWith('.')) {
    return ctx.dependency;
  }
  const resolvedDependency = resolveDependency(ctx);
  const dir = path.dirname(ctx.filePath);
  const rel = path.relative(dir, resolvedDependency);
  if (rel.startsWith('.')) {
    return rel;
  }
  return './' + rel;
}
