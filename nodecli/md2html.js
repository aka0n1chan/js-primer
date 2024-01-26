import { marked } from 'marked';

export function md2html(file, cliOptions) {
  return marked.parse(file, {
    gfm: cliOptions.gfm,
  });
}
