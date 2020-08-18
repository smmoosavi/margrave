import { AppContext } from '../app/app-context';

export interface FileContext extends AppContext {
  filePath: string;
}
