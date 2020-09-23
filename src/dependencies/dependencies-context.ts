import { FileContext } from '../files/file-context';

export interface DependenciesContext extends FileContext {
  dependency: string;
}
