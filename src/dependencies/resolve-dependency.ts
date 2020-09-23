import path from 'path';
import { DependenciesContext } from './dependencies-context';

export function resolveDependency(ctx: DependenciesContext) {
  if (ctx.dependency.startsWith('.')) {
    const dir = path.dirname(ctx.filePath);
    return path.resolve('/' + dir, ctx.dependency).slice(1);
  }
  return ctx.dependency;
}
