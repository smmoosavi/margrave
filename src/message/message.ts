import { DependenciesContext } from '../dependencies/dependencies-context';
import { FileContext } from '../files/file-context';

export interface InvalidBorderImportMessage {
  type: 'invalid-border-import';
  file: string;
  dependency: string;
  correctDependency: string | null;
}

export interface InvalidAbsoluteImportMessage {
  type: 'invalid-absolute-import';
  file: string;
  dependency: string;
  correctDependency: string;
}

export interface InvalidRelativeImportMessage {
  type: 'invalid-relative-import';
  file: string;
  dependency: string;
  correctDependency: string;
}

export interface BorderLessFileMessage {
  type: 'border-less-file';
  file: string;
}

export type Message =
  | InvalidBorderImportMessage
  | InvalidAbsoluteImportMessage
  | InvalidRelativeImportMessage
  | BorderLessFileMessage;

export function createInvalidBorderImportMessage(
  ctx: DependenciesContext,
  correctDependency: string | null,
): Message {
  return {
    type: 'invalid-border-import',
    file: ctx.filePath,
    dependency: ctx.dependency,
    correctDependency,
  };
}

export function createInvalidAbsoluteImportMessage(
  ctx: DependenciesContext,
  correctDependency: string,
): Message {
  return {
    type: 'invalid-absolute-import',
    file: ctx.filePath,
    dependency: ctx.dependency,
    correctDependency,
  };
}

export function createInvalidRelativeImportMessage(
  ctx: DependenciesContext,
  correctDependency: string,
): Message {
  return {
    type: 'invalid-relative-import',
    file: ctx.filePath,
    dependency: ctx.dependency,
    correctDependency,
  };
}

export function createBorderLessFileMessage(ctx: FileContext): Message {
  return {
    type: 'border-less-file',
    file: ctx.filePath,
  };
}
