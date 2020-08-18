import { FileContext } from '../files/file-context';
import { DependenciesContext } from './dependencies-context';

export function getDependencyContext(
  ctx: FileContext,
  dependency: string,
): DependenciesContext {
  return { ...ctx, dependency };
}
