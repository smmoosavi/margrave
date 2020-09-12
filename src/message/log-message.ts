import chalk from 'chalk';
import { Message } from './message';

export function logMessage(message: Message) {
  switch (message.type) {
    case 'invalid-absolute-import': {
      console.log(
        chalk.yellow(
          `    invalid absolute import: ${chalk.red.bold(
            message.dependency,
          )} -> ${chalk.green.bold(message.correctDependency)}`,
        ),
      );
      return;
    }
    case 'invalid-relative-import': {
      console.log(
        chalk.yellow(
          `    invalid relative import: ${chalk.red.bold(
            message.dependency,
          )} -> ${chalk.green.bold(message.correctDependency)}`,
        ),
      );
      return;
    }
    case 'border-less-file': {
      console.log(chalk.yellow(`    border-less file`));
      return;
    }
  }
}
