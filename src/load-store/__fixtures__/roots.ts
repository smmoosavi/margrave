export const emptyRoot = {};

export const otherRoot = {
  'index.ts': '',
};

export const tsProject = {
  'index.ts': '',
  'App.tsx': '',
  pages: {
    'index.ts': '',
    'Page.tsx': `
import 'src/user';
import '../user';
import '../user/type';
import 'src/user/type';
    `,
  },
  user: {
    'index.ts': '',
    'type.ts': '',
    'User.tsx': `
import './type';
import 'src/user/type';
import 'src/user';
import '.';
    `,
  },
};
