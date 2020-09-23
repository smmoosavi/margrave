import { logMessage } from './log-message';
import { Message } from './message';

export function logMessages(messages: Message[]) {
  const files = new Map<string, Message[]>();
  messages.forEach((message) => {
    const fileMessages: Message[] = files.get(message.file) || [];
    fileMessages.push(message);
    files.set(message.file, fileMessages);
  });
  Array.from(files.entries()).forEach(([file, fileMessages], index) => {
    console.log(file);
    fileMessages.forEach((message) => {
      logMessage(message);
    });
  });
  console.log(`${messages.length} errors found in ${files.size} files`);
}
