declare module 'precinct' {
  import fs from 'fs';
  type detective = 'amd' | 'commonjs' | 'es6' | 'sass' | 'stylus' | 'less';
  interface PrecinctOptions {
    type?: detective;
    amd?: { skipLazyLoaded?: boolean };
    es6?: { mixedImports?: boolean };
    css?: { url?: boolean };
  }
  interface PaperWorkOptions extends PrecinctOptions {
    includeCore?: boolean;
    fileSystem?: typeof fs;
  }
  function precinct(content: string, options?: PrecinctOptions): string[];
  namespace precinct {
    function paperwork(filename: string, options?: PaperWorkOptions): string[];
  }
  export = precinct;
}
