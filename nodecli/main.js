import { program } from 'commander';
import * as fs from 'node:fs/promises';
import { md2html } from './md2html.js';
program.option('--gfm', 'GFMを有効にする');
program.parse(process.argv);

const filePath = program.args[0];
const options = program.opts();

const cliOptions = {
  gfm: options.gfm ?? false,
};
fs.readFile(filePath, { encoding: 'utf8' })
  .then((file) => {
    const html = md2html(file, cliOptions);
    console.log(html);
  })
  .catch((err) => {
    console.error(err.message);
    process.exit(1);
  });