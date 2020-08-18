const index_ts = `

`;

const utils_ts = `

`;

const app_tsx = `
import 'abc'
import { x } from 'abc'
import d from 'xyz'
import { y } from './utils'
`;

const empty_ts = ``;

const bad_ts = `
what is js, what is import x from 'x'
`;

export const tsProject = {
  'index.ts': index_ts,
  'utils.ts': utils_ts,
  'app.tsx': app_tsx,
  'empty.ts': empty_ts,
  'bad.ts': bad_ts,
};
