import { DependenciesContext } from './dependencies-context';

export function getDependencyRoot(ctx: DependenciesContext) {
  if (ctx.dependency.startsWith('.')) {
    return ctx.filePath.split('/')[0] ?? '';
  }
  return ctx.dependency.split('/')[0] ?? '';
}
